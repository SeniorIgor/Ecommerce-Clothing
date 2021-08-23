import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDR6LOfWqnLfHxRXg9vP70R0RENUocPOnE',
  authDomain: 'ecm-clothing-db.firebaseapp.com',
  projectId: 'ecm-clothing-db',
  storageBucket: 'ecm-clothing-db.appspot.com',
  messagingSenderId: '921099127887',
  appId: '1:921099127887:web:89983d8c8798941889ee3a',
  measurementId: 'G-TM25N9NYJ7',
};

export const createUserProfileDocument = async (
  user: firebase.User,
  additionalData: Object = {}
) => {
  if (!user) return;

  const userRef = firestore.doc(`users/${user.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = user;
    const createdAt = new Date();

    try {
      userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log('Error creating user', error.message);
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
