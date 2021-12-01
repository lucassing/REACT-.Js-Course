import firebase from "firebase";

const firebaseConfig = {
    apiKey: "AIzaSyCTbXEFfwfdFjeATQXfYvYGhUvWNBMB9sU",
    authDomain: "lucas-ecommerce.firebaseapp.com",
    projectId: "lucas-ecommerce",
    storageBucket: "lucas-ecommerce.appspot.com",
    messagingSenderId: "372302931856",
    appId: "1:372302931856:web:cfc2826cb3e602d683b515"
};
if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
}
else{
    firebase.app()
}

firebase.auth = firebase.auth()
firebase.db = firebase.firestore()

export default firebase
