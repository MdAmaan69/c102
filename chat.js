// Your web app's Firebase configuration
//ADD YOUR FIREBASE LINKS HERE
var firebaseConfig = {
    apiKey: "AIzaSyBTMTYSJDdIFUHKM-87h9xY_D7io4D37Uw",
    authDomain: "c100-c15e1.firebaseapp.com",
    databaseURL: "https://c100-c15e1-default-rtdb.firebaseio.com",
    projectId: "c100-c15e1",
    storageBucket: "c100-c15e1.appspot.com",
    messagingSenderId: "729463229843",
    appId: "1:729463229843:web:623570abf82484cc882c66"
  };

// Initialize Firebase
firebase.initializeApp(firebaseConfig);


function addUser()
{
    user_name = document.getElementById("user_name").value;
    firebase.database().ref("/").child(user_name).update({
        purpose : "adding user"
    });
    /*
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";
    */
  
    localStorage.setItem("user_name", user_name);

    window.location = "chat_room.html";

}



