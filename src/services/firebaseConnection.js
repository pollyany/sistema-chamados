import { initializeApp } from 'firebase/app'
import { getAuth } from 'firebase/auth'
import { getFirestore } from 'firebase/firestore'
import { getStorage } from 'firebase/storage'

const firebaseConfig = {
  apiKey: "AIzaSyCHKuLIY-KFkn_I2wsPE8VQ8z86gcPWRSE",
  authDomain: "sistema-chamados-6d789.firebaseapp.com",
  projectId: "sistema-chamados-6d789",
  storageBucket: "sistema-chamados-6d789.appspot.com",
  messagingSenderId: "719344255266",
  appId: "1:719344255266:web:1ea03405615a570f55657b"
};

const firebaseapp = initializeApp(firebaseConfig)

const auth = getAuth(firebaseapp)
const db = getFirestore(firebaseapp)
const storage = getStorage(firebaseapp)

export {auth, db, storage}