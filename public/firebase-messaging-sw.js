/* eslint-disable no-undef */
importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

const firebaseConfig = {
  apiKey: "AIzaSyAw69tX99OyX4HJA6DlvDgyaPoZBKEIBvI",
  authDomain: "jornada-milhas-396b8.firebaseapp.com",
  projectId: "jornada-milhas-396b8",
  storageBucket: "jornada-milhas-396b8.firebasestorage.app",
  messagingSenderId: "191110397059",
  appId: "1:191110397059:web:241e536bbe563108022fb6",
};

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();

messaging.onBackgroundMessage((payload) => {
  console.log("Notificação em segundo plano", payload.notification);
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
