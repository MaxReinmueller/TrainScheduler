  // 1. configures firebase 
  var firebaseConfig = {
      apiKey: "AIzaSyBUz0ZwyJJUT60j1INAh8P47dR4mR-p_D8",
      authDomain: "train-scheduler-9267d.firebaseapp.com",
      databaseURL: "https://train-scheduler-9267d.firebaseio.com",
      projectId: "train-scheduler-9267d",
      storageBucket: "",
      messagingSenderId: "475747952889",
      appId: "1:475747952889:web:c5a4e116cf4b8582"
  };

    // Initialize Firebase
    firebase.initializeApp(firebaseConfig);

    var database = firebase.database();

// 2. button for adding employees
$('#addTrain').on('click', function(event) {
event.preventDefault(); 

    // Gets user data inputs
    var trName = $('#trainName').val().trim();
    var trDestination = $('#trainDestination').val().trim();
    var trTime = $('#trainTime').val();
    var trFrequency = $('trainFrequency').val();

    // creates local temporary object for storing user data
    var newTrain = {
        name: trName,
        destination: trDestination,
        time: trTime,
        frequency: trFrequency,
    }

    // Uploads temporary object to the database
    database.ref().push(newTrain);

    // logs uploaded data to the console
    console.log(newTrain);

    alert("New Train added successfully!!");

    // clears form text boxes
    $('#trainName').val("");
    $('#trainDestination').val("");
    $('#trainTime').val("");
    $('trainFrequency').val("");
});
// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry

    // stores everything in a variable

    // console logs info

    // makes time look nicer

    // calculates minuets away

    // creats new row

    // append new row to the table



