import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
    apiKey: "AIzaSyCyi55TWC0JwYcgtaiDzurUcazjeTqX3jg",
    authDomain: "crwn-db-d6907.firebaseapp.com",
    databaseURL: "https://crwn-db-d6907.firebaseio.com",
    projectId: "crwn-db-d6907",
    storageBucket: "crwn-db-d6907.appspot.com",
    messagingSenderId: "625194617713",
    appId: "1:625194617713:web:355624e6190604100b84d0",
    measurementId: "G-NPCSY2HCGM"
};


firebase.initializeApp(config);

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;
    const userRef = firestore.doc(`users/${userAuth.uid}`);
    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch (error) {
            console.log('error creating user', error.message)
        }
    }
    return userRef;
}

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;