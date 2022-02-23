// Import the functions you need from the SDKs you need
import {initializeApp} from 'firebase/app';
import {getAuth} from 'firebase/auth';

const firebaseConfig = {
    apiKey: 'AIzaSyDvY9DZa5D2jKIwL4fK28tSestQIR5SRQs',
    authDomain: 'mental-heath-gdsc-uit.firebaseapp.com',
    databaseURL: 'https://mental-heath-gdsc-uit-default-rtdb.asia-southeast1.firebasedatabase.app',
    projectId: 'mental-heath-gdsc-uit',
    storageBucket: 'mental-heath-gdsc-uit.appspot.com',
    messagingSenderId: '1029761536101',
    appId: '1:1029761536101:web:1a74c9aa6fabc4b888f68c',
    measurementId: 'G-0L0BCYRQMG',
};

// Initialize Firebase
initializeApp(firebaseConfig);

export const auth = getAuth();
