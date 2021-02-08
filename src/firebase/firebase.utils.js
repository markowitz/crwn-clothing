import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyA8gPdMoEtfasjj9YKhAxr1G50zzuVNeZk",
        authDomain: "crwn-db-a9fc8.firebaseapp.com",
        projectId: "crwn-db-a9fc8",
        storageBucket: "crwn-db-a9fc8.appspot.com",
        messagingSenderId: "690842566222",
        appId: "1:690842566222:web:3691f18d8f4978280f0d1f"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;