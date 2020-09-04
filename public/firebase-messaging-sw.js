importScripts('https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js')
importScripts('https://www.gstatic.com/firebasejs/7.19.1/firebase-messaging.js')

const firebaseConfig = ({
    apiKey: "AIzaSyD6spkiULY6971_caSR5DkZu3mmhwOgJcQ",
    authDomain: "exp-trk-pwa.firebaseapp.com",
    databaseURL: "https://exp-trk-pwa.firebaseio.com",
    projectId: "exp-trk-pwa",
    storageBucket: "exp-trk-pwa.appspot.com",
    messagingSenderId: "431414153052",
    appId: "1:431414153052:web:5e92c693ef65e898fa7b99",
    measurementId: "G-DDC5RH86S7"
  

});

firebase.initializeApp(firebaseConfig);
firebase.messaging();