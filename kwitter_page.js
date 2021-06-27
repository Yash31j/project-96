//YOUR FIREBASE LINKS
var firebaseConfig = {
    apiKey: "AIzaSyA8r7j2Q1A4AqWx1XFf0C8_XThPZ_cuulo",
    authDomain: "covid-19bot-nmcl.firebaseapp.com",
    databaseURL: "https://covid-19bot-nmcl-default-rtdb.firebaseio.com",
    projectId: "covid-19bot-nmcl",
    storageBucket: "covid-19bot-nmcl.appspot.com",
    messagingSenderId: "575266603500",
    appId: "1:575266603500:web:1fddd991aef23dcf9dc0c9",
    measurementId: "G-66974H0DZ9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

user_name = localStorage.getItem("user_name");
room_name = localStorage.getItem("room_name");

function send(){
    msg=document.getElementById("msg").value;
    firebase.database().ref(room_name).push({
          name : user_name,
          message : msg,
          like : 0
    });
    document.getElementById("msg")="";} 

function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
       firebase_message_id = childKey;
       message_data = childData;
//Start code

//End code
    } });  }); }
getData();
function logout (){
    localStorage.removeItem("user_name");
    localStorage.removeItem("room_name");
    window.location="index.html";
}
