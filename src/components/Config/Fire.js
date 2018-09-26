
import firebase from 'firebase';

  const config = {
    apiKey: "AIzaSyANt7YdNFuwsHd7VzhsOSG-Uqozz9k7u0Q",
    authDomain: "dashboard-b3ffc.firebaseapp.com",
    databaseURL: "https://dashboard-b3ffc.firebaseio.com",
    projectId: "dashboard-b3ffc",
    storageBucket: "dashboard-b3ffc.appspot.com",
    messagingSenderId: "458165768425"
  };
 const Fire =  firebase.initializeApp(config);
export default Fire;