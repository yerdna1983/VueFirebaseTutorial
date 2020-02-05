import Firebase from "firebase";
let config = {
  apiKey: "AIzaSyDX4tr03zNg3_PA2oAPJiiPA_xNET4nYkU",
  authDomain: "zapisdodb.firebaseapp.com",
  databaseURL: "https://zapisdodb.firebaseio.com",
  projectId: "zapisdodb",
  storageBucket: "zapisdodb.appspot.com",
  messagingSenderId: "450190089387"
};

let app = Firebase.apps.length
  ? Firebase.app()
  : Firebase.initializeApp(config);

export const db = app.database();
