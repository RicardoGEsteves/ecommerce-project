import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyDYtwxu9INyJDE3sz2QkqR_BJvL34NtEps',
  authDomain: 'ecommerce-project-db.firebaseapp.com',
  databaseURL: 'https://ecommerce-project-db.firebaseio.com',
  projectId: 'ecommerce-project-db',
  storageBucket: 'ecommerce-project-db.appspot.com',
  messagingSenderId: '344168600910',
  appId: '1:344168600910:web:5fbfc8c92c9a48e0d77a1f',
  measurementId: 'G-7Z082K5LPJ'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
