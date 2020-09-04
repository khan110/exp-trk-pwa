import firebase from 'firebase';

const firebaseConfig = {
  apiKey: "AIzaSyD6spkiULY6971_caSR5DkZu3mmhwOgJcQ",
  authDomain: "exp-trk-pwa.firebaseapp.com",
  databaseURL: "https://exp-trk-pwa.firebaseio.com",
  projectId: "exp-trk-pwa",
  storageBucket: "exp-trk-pwa.appspot.com",
  messagingSenderId: "431414153052",
  appId: "1:431414153052:web:5e92c693ef65e898fa7b99",
  measurementId: "G-DDC5RH86S7"
};

  firebase.initializeApp(firebaseConfig);
  const messaging = firebase.messaging();

export function initNotification() {
    Notification.requestPermission().then((permission) => { 
        console.log(permission) 
        if(permission === "granted"){
            messaging.getToken().then((currentToken) => {
                if (currentToken) {
                    console.log("TOKEN")
                    console.log(currentToken);
                } else {
                  console.log('No Instance ID token available. Request permission to generate one.');

                }
              }).catch((err) => {
                console.log('An error occurred while retrieving token. ', err);
              });
        }
    })
}