import firebase from "firebase";
//import { seedDatabase } from "../seed";
const firebaseConfig = {
    apiKey: "AIzaSyCDNWOL83btbpsAQ8BMaa62D-E8iFL3bbU",
    authDomain: "netflix-app-c21cd.firebaseapp.com",
    databaseURL: "https://netflix-app-c21cd.firebaseio.com",
    projectId: "netflix-app-c21cd",
    storageBucket: "netflix-app-c21cd.appspot.com",
    messagingSenderId: "195337353239",
    appId: "1:195337353239:web:f21ad5444238f13f9c0452",
    measurementId: "G-VHVT3L81H2"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

//seedDatabase(firebaseApp)

export default firebaseApp;