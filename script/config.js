import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";


const firebaseConfig = {
  apiKey: "AIzaSyCA2DTNjXcWG6PLbt-81J3GbNNe7VT3pjE",
  authDomain: "buy-sell-app-saylani.firebaseapp.com",
  projectId: "buy-sell-app-saylani",
  storageBucket: "buy-sell-app-saylani.appspot.com",
  messagingSenderId: "777195897372",
  appId: "1:777195897372:web:41b834a016ea7e39ee95d9",
  measurementId: "G-G8EBD8LK6T"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);