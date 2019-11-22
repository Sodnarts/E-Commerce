import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: 'AIzaSyALX2BGlv4vVP5oM0XbedGnlSHsps5Gl-o',
    authDomain: 'sodnarts.firebaseapp.com',
    databaseURL: 'https://sodnarts.firebaseio.com',
    projectId: 'sodnarts',
    storageBucket: 'sodnarts.appspot.com',
    messagingSenderId: '607021720660',
    appId: '1:607021720660:web:1ae71561a73bfbf7c0b9c1',
    measurementId: 'G-D9DVWSMSNW',
};

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
                ...additionalData,
            });
        } catch (error) {
            console.log('Error creating user: ', error.message);
        }
    }

    return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
