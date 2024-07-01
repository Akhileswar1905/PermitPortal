importScripts("https://www.gstatic.com/firebasejs/8.10.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/8.10.1/firebase-messaging.js"
);

firebase.initializeApp({
  apiKey: "AIzaSyCBzrE6H6qRvPKfDtdQ_FHaSiGadWmxEhA",
  authDomain: "srp-project-a990e.firebaseapp.com",
  projectId: "srp-project-a990e",
  storageBucket: "srp-project-a990e.appspot.com",
  messagingSenderId: "275785350924",
  appId: "1:275785350924:web:461db9dcf7687edc339329",
  measurementId: "G-Z5P78F370Y",
});

const messaging = firebase.messaging();

messaging.onBackgroundMessage(function (payload) {
  console.log(
    "[firebase-messaging-sw.js] Received background message ",
    payload
  );
  const notificationTitle = payload.notification.title;
  const notificationOptions = {
    body: payload.notification.body,
  };

  self.registration.showNotification(notificationTitle, notificationOptions);
});
