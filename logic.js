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
$("#addTrain").on('click', function(event) {
event.preventDefault(); 

    // Gets user data inputs
    var trName = $('#trainName').val().trim();
    var trDestination = $('#trainDestination').val().trim();
    var trTime = $('#trainTime').val();
    var trFrequency = $('#trainFrequency').val();

    // console.log(trName);
    // console.log(trDestination);
    // console.log(trTime);
    // console.log(trFrequency);

    // creates local temporary object for storing user data
    var newTrain = {
        name: trName,
        destination: trDestination,
        time: trTime,
        frequency: trFrequency,
    }
    // console.log(newTrain);

    // Uploads temporary object to the database
    database.ref().push(newTrain);

    // logs uploaded data to the console
    // console.log(newTrain);

    alert("New Train added successfully!!");

    // clears form text boxes
    $('#trainName').val("");
    $('#trainDestination').val("");
    $('#trainTime').val("");
    $('#trainFrequency').val("");
});
// 3. Create Firebase event for adding employee to the database and a row in the html when a user adds an entry
database.ref().on("child_added", function(childSnapshot) {
    console.log(childSnapshot.val());

    // stores everything in a variable
    var nameOfTrain = childSnapshot.val().name;
    var destinationOfTrain = childSnapshot.val().destination;
    var timeOfTrain = childSnapshot.val().time;
    var frequencyOfTrain = childSnapshot.val().frequency;

    // console logs info
    console.log(nameOfTrain);
    console.log(destinationOfTrain);
    console.log(timeOfTrain);
    console.log(frequencyOfTrain);

    // makes time look nicer

    // calculates next arrival
    var arrival = (timeOfTrain.val() + frequencyOfTrain.val());
    console.log(arrival);

    // calculates minuets away

    // creates new row
    var newRow = $("<tr>").append(
        $("<td>").text(nameOfTrain),
        $("<td>").text(destinationOfTrain),
        $("<td>").text(frequencyOfTrain)
    );
    // append new row to the table
        $("#trainTable  > tbody").append(newRow)
});


  
    // Prettify the employee start
    // var empStartPretty = moment.unix(empStart).format("MM/DD/YYYY");
  
    // Calculate the months worked using hardcore math
    // To calculate the months worked
    // var empMonths = moment().diff(moment(empStart, "X"), "months");
    // console.log(empMonths);
  
    // Calculate the total billed rate
    // var empBilled = empMonths * empRate;
    // console.log(empBilled);
  

  



