import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyBE503UxVIuWsDFlPGK7qceoVHeERuRvRI',
  authDomain: 'crwn-clothing-4a55b.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-4a55b.firebaseio.com',
  projectId: 'crwn-clothing-4a55b',
  storageBucket: '',
  messagingSenderId: '179676022780',
  appId: '1:179676022780:web:2daf6519cb5a5c3d'
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
