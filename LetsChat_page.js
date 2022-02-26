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

  function getData() { firebase.database().ref("/"+room_name).on('value', function(snapshot) { document.getElementById("output").innerHTML = ""; snapshot.forEach(function(childSnapshot) { childKey  = childSnapshot.key; childData = childSnapshot.val(); if(childKey != "purpose") {
           firebase_message_id = childKey;
           message_data = childData;
  //Start code
  
  //End code
        } });  }); }
  getData();
  
  function send()
  {
        msg = document.getElementById("msg").value;
        firebase.database().ref(room_name).push({
              name:user_name,
              message:msg,
  
        });
  
        document.getElementById("msg").value = "";
  }
  
  function logout() {
        localStorage.removeItem("user_name");
        localStorage.removeItem("room_name");
            window.location = "index.html";
        }
        
  