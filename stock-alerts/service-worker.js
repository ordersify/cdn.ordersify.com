importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/7.18.0/firebase-messaging.js');
firebase.initializeApp({
  apiKey: "AIzaSyCu-Ojut-fLbvAI2rIO-nKFzbKOPrQDCHs",
  authDomain: "ordersify-stock-alerts.firebaseapp.com",
  databaseURL: "https://ordersify-stock-alerts.firebaseio.com",
  projectId: "ordersify-stock-alerts",
  storageBucket: "ordersify-stock-alerts.appspot.com",
  messagingSenderId: "929892195251",
  appId: "1:929892195251:web:7aaea3db26975bfdec49c6",
  measurementId: "G-G8JRKKBCGW"
});
const messaging = firebase.messaging();
messaging.setBackgroundMessageHandler(function (payload) {
  console.log('[firebase-messaging-sw.js] Received background message ', payload);
  const notificationTitle = 'Background Message Title';
  const notificationOptions = {
    body: 'Background Message body.'
  };

  return self.registration.showNotification(notificationTitle, notificationOptions);
});
