// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getMessaging, getToken, onMessage } from "firebase/messaging";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAw69tX99OyX4HJA6DlvDgyaPoZBKEIBvI",
  authDomain: "jornada-milhas-396b8.firebaseapp.com",
  projectId: "jornada-milhas-396b8",
  storageBucket: "jornada-milhas-396b8.firebasestorage.app",
  messagingSenderId: "191110397059",
  appId: "1:191110397059:web:241e536bbe563108022fb6",
};

// Initialize Firebase
initializeApp(firebaseConfig);
const messaging = getMessaging();

export const requestToken = async () => {
  try {
    const currentToken = await getToken(messaging, {
      vapidKey:
        "BL9_UlYntyz3vAG47Pwr0BDkpzKqNHZel-iMxl-TOuORZMtrGklW--r2h97COwttftwszi3TEgHH4qsUiWSna4c",
    });
    if (currentToken) {
      console.log(currentToken);
    } else {
      console.log("Nenhum token recebido");
    }
  } catch (err) {
    console.log(err);
  }
};

export const onMessageListener = () =>
  new Promise((resolve) => {
    onMessage(messaging, (payload) => {
      console.log("Notificação em primeiro plano", payload.notification);
      resolve(payload);
    });
  });
