import { initializeApp, firebase } from "firebase/app";
import 'firebase/database';

// Configura Firebase con la configuración de tu proyecto
const firebaseConfig = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "nacionseguros-3662a.firebaseapp.com",
  databaseURL: "https://nacionseguros-3662a-default-rtdb.firebaseio.com",
  projectId: "nacionseguros-3662a",
  storageBucket: "nacionseguros-3662a.firebasestorage.app",
  messagingSenderId: "961455310490",
  appId: "1:961455310490:web:78a0eff31354e1b3ffc123"
};

const app = initializeApp(firebaseConfig);

export default app;
