import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyAHWeH447MuYcrUYtVuvFnvjwbPjnMiCe4",
    authDomain: "facebook-clone-d466e.firebaseapp.com",
    databaseURL: "https://facebook-clone-d466e.firebaseio.com",
    projectId: "facebook-clone-d466e",
    storageBucket: "facebook-clone-d466e.appspot.com",
    messagingSenderId: "1047537882482",
    appId: "1:1047537882482:web:c0545c20103f06196d79eb",
    measurementId: "G-TP3MMBLE5N"
  };

  const firebaseApp = firebase.initializeApp(firebaseConfig);
  const db = firebaseApp.firestore();
  const auth = firebase.auth();
  const provider = new firebase.auth.GoogleAuthProvider();


  export {auth, provider};
  export default db; 