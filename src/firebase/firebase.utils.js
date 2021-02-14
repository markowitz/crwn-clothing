import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
        apiKey: "AIzaSyA8gPdMoEtfasjj9YKhAxr1G50zzuVNeZk",
        authDomain: "crwn-db-a9fc8.firebaseapp.com",
        projectId: "crwn-db-a9fc8",
        databaseURL: "https://crwn-db-a9fc8-default-rtdb.firebaseio.com/",
        storageBucket: "crwn-db-a9fc8.appspot.com",
        messagingSenderId: "690842566222",
        appId: "1:690842566222:web:3691f18d8f4978280f0d1f"
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
        if(!userAuth) return;

        const userRef = firestore.doc(`users/${userAuth.uid}`);
        const snapShot = await userRef.get();

        if(!snapShot.exists) {
                const {displayName, email} = userAuth;
                const createdAt = new Date();

                try {
                        await userRef.set({
                                displayName,
                                email,
                                createdAt,
                                ...additionalData
                        })
                }catch(error) {
                        console.log('error creating new user');
                }
        }

        return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();

provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);


export default firebase;