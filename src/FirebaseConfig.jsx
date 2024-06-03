import { initializeApp, firebase } from "firebase/app";
import 'firebase/database';

// Configura Firebase con la configuración de tu proyecto
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "trivia-banco-nacion.firebaseapp.com",
  projectId: "trivia-banco-nacion",
  storageBucket: "trivia-banco-nacion.appspot.com",
  messagingSenderId: "631796970978",
  appId: "1:631796970978:web:48c3ecce793c9b1c6cf5bb"
};

const app = initializeApp(firebaseConfig);

export default app;