import { initializeApp } from "firebase/app";
import { 
  getAuth, 
  GoogleAuthProvider, 
  signInWithPopup, 
  signInWithRedirect, 
  createUserWithEmailAndPassword, 
  signOut 
} from "firebase/auth";
import { getDatabase, ref, push, set, onValue } from "firebase/database";

// 🔹 Firebase Project Configuration
const firebaseConfig = {
  apiKey: "AIzaSyDvzQigdNfA4S6YMT3-YHvTVaHSQ1z0VfU",
  authDomain: "sarthak1proj.firebaseapp.com",
  databaseURL: "https://sarthak1proj-default-rtdb.firebaseio.com",
  projectId: "sarthak1proj",
  storageBucket: "sarthak1proj.firebasestorage.app",
  messagingSenderId: "898885406584",
  appId: "1:898885406584:web:e43fb41822cf1571ba828d"
};

// 🔹 Initialize Firebase
const app = initializeApp(firebaseConfig);

// 🔹 Firebase Authentication
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

// 🔹 Firebase Realtime Database
const database = getDatabase(app);

/**
 * 🔹 Google Sign-In Function
 * Uses Popup on desktop and Redirect on mobile
 */
const signInWithGoogle = async () => {
  try {
    if (window.innerWidth < 768) {
      await signInWithRedirect(auth, provider);
    } else {
      const result = await signInWithPopup(auth, provider);
      console.log("Google Sign-In Success:", result.user);
      saveUserData(result.user.uid, result.user.email, result.user.displayName);
      return result.user;
    }
  } catch (error) {
    console.error("Google Sign-In Error:", error.message);
    alert(`Google Sign-In Failed: ${error.message}`);
    throw error;
  }
};

/**
 * 🔹 Sign Up with Email & Password
 */
const signUpWithEmail = async (email, password) => {
  try {
    const userCredential = await createUserWithEmailAndPassword(auth, email, password);
    console.log("Email Sign-Up Success:", userCredential.user);
    saveUserData(userCredential.user.uid, email);
    return userCredential.user;
  } catch (error) {
    console.error("Email Sign-Up Error:", error.message);
    alert(`Sign-Up Failed: ${error.message}`);
    throw error;
  }
};

/**
 * 🔹 Logout Function
 */
const logout = async () => {
  try {
    await signOut(auth);
    console.log("User Logged Out");
  } catch (error) {
    console.error("Logout Error:", error.message);
    alert(`Logout Failed: ${error.message}`);
  }
};

/**
 * 🔹 Save User Data to Firebase Realtime Database
 */
const saveUserData = (userId, email, name = "Anonymous") => {
  const userRef = ref(database, `users/${userId}`);
  set(userRef, {
    email: email,
    name: name,
    createdAt: new Date().toISOString(),
  }).then(() => {
    console.log("User data saved successfully!");
  }).catch((error) => {
    console.error("Error saving user data:", error.message);
  });
};

// 🔹 Export Firebase Functions
export { auth, provider, signInWithGoogle, signUpWithEmail, logout, database, ref, push, set, onValue, saveUserData };
