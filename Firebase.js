import firebase from "firebase";

const firebaseApp =  firebase.initializeApp({
   
        apiKey: "AIzaSyDiG6R5i07VTyxKFNkbSZOOpYyqJeY7wSA",
        authDomain: "project-web-ad967.firebaseapp.com",
        databaseURL: "https://project-web-ad967.firebaseio.com",
        projectId: "project-web-ad967",
        storageBucket: "project-web-ad967.appspot.com",
        messagingSenderId: "786821294276",
        appId: "1:786821294276:web:183c4a1b890793672b8191",
        measurementId: "G-YCD6ZWRHTZ"
      };

});

//const db = firebaseApp.firestore();

const auth =firebase.auth();


export { auth};