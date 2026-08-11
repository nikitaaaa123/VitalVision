import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { signInWithGoogle, signUpWithEmail, saveUserData } from "./firebaseConfig"; // Import Firebase functions

function Login() {
    const navigate = useNavigate();
    const [showLogin, setShowLogin] = useState(false);
    const [text, setText] = useState("Welcome to Healthbook");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    // Text animation effect
    useEffect(() => {
        let index = 0;
        const words = ["Welcome to Healthbook", "Your Health, Our Priority"];
        const interval = setInterval(() => {
            setText(words[index]);
            index = (index + 1) % words.length;
        }, 3000);
        return () => clearInterval(interval);
    }, []);

    // Handle Email Sign-Up/Login
    const handleEmailSignUp = async (e) => {
        e.preventDefault();
        if (email && password) {
            try {
                const user = await signUpWithEmail(email, password);
                saveUserData(user.uid, user.email);
                // Navigate to chatbot or open Streamlit
                window.open("http://localhost:8501", "_blank"); // Streamlit app
            } catch (error) {
                alert("Error: " + error.message);
            }
        } else {
            alert("Please enter both email and password.");
        }
    };

    // Handle Google Sign-In
    const handleGoogleSignIn = async () => {
        try {
            const user = await signInWithGoogle();
            saveUserData(user.uid, user.email);
            window.open("http://localhost:8501", "_blank"); // Streamlit app
        } catch (error) {
            alert("Google Sign-In Failed: " + error.message);
        }
    };

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-[#D6FFEC] to-[#C2F9FF]">
            {!showLogin ? (
                <div className="text-center">
                    <h2 className="text-3xl font-bold text-[#086972] mb-6">{text}</h2>
                    <div className="flex space-x-6">
                        <button 
                            className="bg-[#17b978] hover:bg-[#086972] text-white font-medium py-4 px-6 rounded-lg"
                            onClick={() => setShowLogin(true)}
                        >
                            Login as Patient
                        </button>
                        <button 
                            className="bg-[#17b978] hover:bg-[#086972] text-white font-medium py-4 px-6 rounded-lg"
                            onClick={() => setShowLogin(true)}
                        >
                            Login as Doctor/Hospital
                        </button>
                    </div>
                </div>
            ) : (
                <div className="bg-white/60 backdrop-blur-lg p-8 rounded-xl shadow-lg w-full max-w-md">
                    <div className="text-center mb-6">
                        <h3 className="text-xl font-semibold text-[#071a52]">Sign in</h3>
                    </div>
                    
                    <form onSubmit={handleEmailSignUp} className="space-y-4">
                        <div>
                            <label htmlFor="email" className="block text-[#086972]">Email</label>
                            <input 
                                type="email"
                                id="email"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17b978]/50" 
                                required
                            />
                        </div>
                        
                        <div>
                            <label htmlFor="password" className="block text-[#086972]">Password</label>
                            <input 
                                type="password"
                                id="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-[#17b978]/50" 
                                required
                            />
                        </div>

                        <button 
                            type="submit" 
                            className="w-full bg-[#17b978] hover:bg-[#086972] text-white font-medium py-2 rounded-lg transition-all"
                        >
                            Log in
                        </button>
                    </form>

                    {/* Google Sign-In Button */}
                    <div className="text-center mt-4">
                        <button
                            onClick={handleGoogleSignIn} 
                            className="w-full bg-white text-black border border-gray-300 rounded-lg py-2 px-4 flex items-center justify-center space-x-2"
                        >
                            <img src="https://www.gstatic.com/firebasejs/ui/2.0.0/images/auth/google.svg" alt="Google" className="w-5 h-5"/>
                            <span>Sign in with Google</span>
                        </button>
                    </div>
                    
                    <div className="text-center mt-4">
                        <button 
                            onClick={() => setShowLogin(false)} 
                            className="text-[#086972] hover:text-[#17b978]"
                        >
                            Back to Home
                        </button>
                    </div>
                </div>
            )}
        </div>
    );
}

export default Login;
