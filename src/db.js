import { initializeApp } from "firebase/app"
import { getFirestore, collection, getDocs } from "firebase/firestore"

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyAbSoZrVHaT1dWgqZVS1Esre4nStu29x7I",
    authDomain: "learn-firebase-9-6181a.firebaseapp.com",
    projectId: "learn-firebase-9-6181a",
    storageBucket: "learn-firebase-9-6181a.appspot.com",
    messagingSenderId: "702611322744",
    appId: "1:702611322744:web:a8860277fe71818cf3ba8d"
  }

const app = initializeApp(firebaseConfig)

const db = getFirestore(app)

const queryButton = document.getElementById('queryButton')
if (queryButton) {
    queryButton.onclick = () => {
        console.log('Getting docs')
        getDocs(collection(db, "books"))
        .then((docs) => {
            docs.forEach((doc) => {
            console.log(`${doc.id} => ${doc.data()}`)
            })
        })
        .catch((err) => {
            console.log("Error querying docs", err)
        })
    }
} else {
    console.log('Query button is null')
}
