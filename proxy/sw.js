// Import and configure the Firebase SDK
// These scripts are made available when the app is served or deployed on Firebase Hosting
// If you do not serve/host your project using Firebase Hosting see https://firebase.google.com/docs/web/setup
importScripts('https://www.gstatic.com/firebasejs/9.8.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/9.8.1/firebase-messaging-compat.js');

firebase.initializeApp({
  apiKey: "AIzaSyBzg1h2heN7nIuMGg2io_aty0IaGGcPrOM",
  authDomain: "back-in-stock-327609.firebaseapp.com",
  projectId: "back-in-stock-327609",
  storageBucket: "back-in-stock-327609.appspot.com",
  messagingSenderId: "973272147139",
  appId: "1:973272147139:web:9b5d3ecc3aa5c4e68b2e76",
  measurementId: "G-LPKTGBX8MF"
});
const messaging = firebase.messaging();

messaging.onBackgroundMessage(function(payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  // Customize notification here
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.',
    icon: '/firebase-logo.png'
  };

  self.registration.showNotification(notificationTitle,
    notificationOptions);
});