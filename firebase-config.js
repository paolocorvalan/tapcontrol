// ============================================================
// PASO 1: Reemplaza estos valores con los de TU proyecto Firebase.
// Los encuentras en: Configuración del proyecto (⚙️) > Tus apps > SDK setup and configuration
// ============================================================
const firebaseConfig = {
  apiKey: "TU_API_KEY",
  authDomain: "TU_PROYECTO.firebaseapp.com",
  projectId: "TU_PROYECTO",
  storageBucket: "TU_PROYECTO.appspot.com",
  messagingSenderId: "TU_SENDER_ID",
  appId: "TU_APP_ID",
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();
const auth = firebase.auth();
