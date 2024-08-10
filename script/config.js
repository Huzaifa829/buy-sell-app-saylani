import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";
import { getStorage } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-storage.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-firestore.js";

const firebaseConfig = {
  apiKey: "AIzaSyCnipK2hYRyjY13TFNr4sNocl28ZROv3HI",
  authDomain: "buysell-app-bc349.firebaseapp.com",
  projectId: "buysell-app-bc349",
  storageBucket: "buysell-app-bc349.appspot.com",
  messagingSenderId: "451043376211",
  appId: "1:451043376211:web:15946dc02799f153e25aa6",
  measurementId: "G-322B6HR025"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);