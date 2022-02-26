// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAc2Oj2vmbwMPSxgAbvhtMyx5A_bjC9cWg",
    authDomain: "letschat-3ce0c.firebaseapp.com",
    databaseURL: "https://letschat-3ce0c-default-rtdb.firebaseio.com",
    projectId: "letschat-3ce0c",
    storageBucket: "letschat-3ce0c.appspot.com",
    messagingSenderId: "749114176564",
    appId: "1:749114176564:web:e5b456f127c0c3735bc661"
  };
  
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  user_name = localStorage.getItem("user_name");

document.getElementById("user_name").innerHTML = "Welcome " + user_name + "!";

  function getData() {firebase.database().ref("/").on('value', function(snapshot) {document.getElementById("output").innerHTML = "";snapshot.forEach(function(childSnapshot) {childKey  = childSnapshot.key;
    Room_names = childKey;
   //Start code
   console.log("Room Name - " + Room_names);
   row = "<div class='room_name' id=" + Room_names + " onclick='redirectToRoomName(this.id)' >#" + Room_names + "</div><hr>";
   document.getElementById("output").innerHTML += row;
   //End code
   });});}
getData();

function addRoom()
{
   room_name = document.getElementById("room_name").value;

   firebase.database().ref("/").child(room_name).update({
         purpose : "adding room name"
   });

   localStorage.setItem("room_name", room_name);

   window.location = "LetsChat_page.html";
}

function redirectToRoomName(name)
{
   console.log(name);
   localStorage.setItem("room_name", name);
   window.location = "LetsChat_page.html";
}
function logout() {
   localStorage.removeItem("user_name");
   localStorage.removeItem("room_name");
       window.location = "index.html";
   }
   
