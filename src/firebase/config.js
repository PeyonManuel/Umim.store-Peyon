// Import the functions you need from the SDKs you need
import { initializeApp } from 'firebase/app';
import { getFirestore } from 'firebase/firestore/lite';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyAgTnDnGdxBaP5fjlPvaIxU-zuQtiFSzRM',
	authDomain: 'umim-store.firebaseapp.com',
	projectId: 'umim-store',
	storageBucket: 'umim-store.appspot.com',
	messagingSenderId: '843843569840',
	appId: '1:843843569840:web:0c2b66639b62a516f41375',
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
