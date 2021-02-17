

var firebaseConfig = {
    apiKey: "AIzaSyB0vO_T2hF6WLazKPar0zmr7qhg3Mn2jwo",
    authDomain: "kwitterapp-d429d.firebaseapp.com",
    databaseURL: "https://kwitterapp-d429d-default-rtdb.firebaseio.com",
    projectId: "kwitterapp-d429d",
    storageBucket: "kwitterapp-d429d.appspot.com",
    messagingSenderId: "929152798683",
    appId: "1:929152798683:web:5d99b4ed5531cd26e461fe",
    measurementId: "G-2S8MYKXNQ6"
  };
  firebase.initializeApp(firebaseConfig);
  
function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
     Room_names = childKey;

    });});}
getData();
