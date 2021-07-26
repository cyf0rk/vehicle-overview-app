import firebase from 'firebase';
import 'firebase/auth';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyA34eHng30NbEJou5IA6uN7wzNLLbrw2Lg',
  authDomain: 'vehicle-overview-app.firebaseapp.com',
  projectId: 'vehicle-overview-app',
  storageBucket: 'vehicle-overview-app.appspot.com',
  messagingSenderId: '333393787383',
  appId: '1:333393787383:web:09c4a37f6e6f48208f56f2',
};

firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const db = firebase.firestore();

export default firebase;
