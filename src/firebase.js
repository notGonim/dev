import firebase from 'firebase'


const firebaseConfig = {
    apiKey: "AIzaSyAD6w-5NGBGF000G6gEe3juu2Y9y2Yd8oM",
    authDomain: "deve-28f9b.firebaseapp.com",
    projectId: "deve-28f9b",
    storageBucket: "deve-28f9b.appspot.com",
    messagingSenderId: "719897519344",
    appId: "1:719897519344:web:81e42b9359b51d861a8e35"
};



const firebaseApp = firebase.initializeApp(firebaseConfig)
const db = firebaseApp.firestore()
const auth = firebase.auth()

export { db, auth } 