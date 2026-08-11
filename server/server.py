from flask import Flask, request, jsonify
from flask_cors import CORS
import traceback
import firebase_admin
from firebase_admin import credentials, db

# Initialize Firebase
if not firebase_admin._apps:
    cred = credentials.Certificate("firebase_credentials.json")
    firebase_admin.initialize_app(cred, {
        'databaseURL': 'https://sarthak1proj-default-rtdb.firebaseio.com/'
    })

# Initialize the medical analysis system


# Structured medical questions for conversation flow
MEDICAL_QUESTIONS = [
    "How long have you been experiencing these symptoms?",
    "Have you noticed any patterns when symptoms get worse?",
    "Have you had any medications or treatments for these symptoms?",
    "Have you experienced these symptoms before?",
    "Is there any family history of similar conditions?"
]

# Store conversation state
conversation_states = {}

app = Flask(__name__)
CORS(app)

def store_analysis_result(session_id, analysis_result):
    """Store analysis results in Firebase."""
    try:
        analysis_ref = db.reference(f'/analysis/{session_id}')
        analysis_ref.set({
            **analysis_result,
            'timestamp': {'.sv': 'timestamp'}
        })
        return True
    except Exception as e:
        print(f"Error storing analysis result: {str(e)}")
        return False

@app.route('/analyze', methods=['POST'])
def analyze():
    try:
        data = request.get_json()
        if not data:
            return jsonify({
                'error': 'No data provided',
                'bot_response': 'Please provide a message.'
            }), 400

        message = data.get('message', '')
        session_id = data.get('session_id', 'default')

        if not message:
            return jsonify({
                'error': 'No message provided',
                'bot_response': 'Please provide a message with your symptoms.'
            }), 400

        # Initialize or get conversation state
        if session_id not in conversation_states:
            conversation_states[session_id] = {
                'question_index': 0,
                'symptoms': [],
                'answers': {}
            }

        state = conversation_states[session_id]
        state['answers'][str(state['question_index'])] = message

        # Call the ML analysis safely
        try:
            analysis_result = medical_system.analyze_message(message)
        except Exception as e:
            print(f"Error analyzing message: {str(e)}")
            print(traceback.format_exc())
            return jsonify({
                'error': 'Analysis error',
                'bot_response': 'I encountered an error analyzing your message. Please try again.'
            }), 500

        if 'error' in analysis_result:
            return jsonify({
                'error': analysis_result['error'],
                'bot_response': analysis_result.get('bot_response', 'An error occurred during analysis.')
            }), 500

        # Safely extract fields using .get()
        risk_label = analysis_result.get('risk_label', 'Unknown')
        risk_score = analysis_result.get('risk_score', 0)
        risk_percentage = analysis_result.get('risk_percentage', 0)
        symptoms = analysis_result.get('symptoms', [])
        possible_conditions = analysis_result.get('possible_conditions', [])
        clinical_summary = analysis_result.get('clinical_summary', 'No summary available')

        # Update conversation state with symptoms
        if symptoms:
            state['symptoms'].extend(symptoms)
            state['symptoms'] = list(set(state['symptoms']))

        # Get next question if available
        if state['question_index'] < len(MEDICAL_QUESTIONS):
            next_question = MEDICAL_QUESTIONS[state['question_index']]
        else:
            next_question = None

        if next_question:
            state['question_index'] += 1
            bot_response = f"Dr. AI: {next_question}"
            response = {
                'bot_response': bot_response,
                'is_final': False,
                'risk_label': risk_label,
                'risk_score': risk_score,
                'risk_percentage': risk_percentage,
                'symptoms': symptoms,
                'possible_conditions': possible_conditions,
                'clinical_summary': clinical_summary
            }
        else:
            bot_response = (
                f"Dr. AI: Based on our conversation, here's my analysis:\n\n"
                f"{clinical_summary}\n\n"
                f"Risk Level: {risk_label}\n"
                f"Risk Score: {risk_score}/10 ({risk_percentage}%)\n"
                f"Possible Conditions: {', '.join(possible_conditions)}"
            )

            # Store the final analysis in Firebase
            store_success = store_analysis_result(session_id, analysis_result)
            if not store_success:
                print("Warning: Could not store analysis result in Firebase.")

            # Reset conversation state for the next interaction
            conversation_states[session_id] = {
                'question_index': 0,
                'symptoms': [],
                'answers': {}
            }

            response = {
                'bot_response': bot_response,
                'is_final': True,
                'risk_label': risk_label,
                'risk_score': risk_score,
                'risk_percentage': risk_percentage,
                'symptoms': symptoms,
                'possible_conditions': possible_conditions,
                'clinical_summary': clinical_summary
            }

        # Store user message and bot response in Firebase
        try:
            chat_ref = db.reference(f'/chats/{session_id}/messages')
            chat_ref.push().set({
                'content': message,
                'sender': 'user',
                'timestamp': {'.sv': 'timestamp'}
            })

            chat_ref.push().set({
                'content': response['bot_response'],
                'sender': 'bot',
                'timestamp': {'.sv': 'timestamp'},
                'analysis': response if response.get('is_final') else None
            })
        except Exception as e:
            print(f"Error storing chat messages: {str(e)}")
            print(traceback.format_exc())

        return jsonify(response)

    except Exception as e:
        print(f"Error in analyze endpoint: {str(e)}")
        print(traceback.format_exc())
        return jsonify({
            'error': str(e),
            'bot_response': 'An error occurred while processing your request.'
        }), 500

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=5001)
