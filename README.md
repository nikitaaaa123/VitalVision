VitalVision is an AI-powered healthcare assistant and medical analysis platform. It features a modern React-based frontend for user interactions (including a chatbot and risk display) and a robust Python backend that leverages machine learning models for medical data analysis and patient prioritization.

## 🚀 Features

*   **Interactive User Interface:** Built with React and Vite for high performance, featuring components for risk display, AI chatbot interaction, and patient research.
*   **AI Medical Analysis:** Python backend integrating machine learning models (`ML Model.ipynb`) to analyze healthcare datasets.
*   **Medical Prioritization Engine (`MedPrior1`):** A dedicated service to prioritize medical cases and map patients to doctors based on pincodes and severity.
*   **Secure Authentication & Database:** Integrated with Firebase (`firebaseConfig.js` & `firebase_credentials.json`) for secure user logins and real-time data syncing.

## 🛠️ Tech Stack

**Frontend:**
*   React (Vite)
*   Firebase (Auth / Firestore)
*   JSX / CSS

**Backend & Machine Learning:**
*   Python
*   Machine Learning (Jupyter Notebooks, Scikit-learn/TensorFlow/PyTorch)
*   Firebase Admin SDK

## 📁 Project Structure

```text
VitalVision/
├── index.html                 # Main HTML entry point
├── package.json               # Node.js dependencies
├── vite.config.js             # Vite configuration
├── src/                       # React Frontend source code
│   ├── App.jsx & main.jsx     # React entry points
│   ├── components/            # UI Components (ChatBot, RiskDisplay, login, etc.)
│   └── MedPrior1/             # Medical Prioritization Sub-module
│       ├── app.py             # Prioritization backend app
│       ├── DATASET.csv        # Prioritization dataset
│       └── doctors_pincode.csv# Doctor location mapping
└── server/                    # Python Backend
    ├── server.py              # Main backend server
    ├── ML Model.ipynb         # Machine learning model training notebook
    ├── DATASET.csv            # Medical dataset for backend analysis
    ├── requirements.txt       # Python dependencies
    └── firebase_credentials.json # Firebase service account key
