import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-app.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-firestore.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.12.2/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyC2Rm7ft59D7whGK_ff59Z8hb1EvrL5bGA",
  authDomain: "learn-english-morocco.firebaseapp.com",
  projectId: "learn-english-morocco",
  storageBucket: "learn-english-morocco.firebasestorage.app",
  messagingSenderId: "306088785225",
  appId: "1:306088785225:web:d1256f724ff43742179698"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
