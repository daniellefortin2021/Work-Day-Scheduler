var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

var taskText = document.querySelector(".description");
var taskTime = "";

//save text on click
$(".saveBtn").on("click", function(){

    taskText = $(this).siblings("description").val();
    taskTime = $(this).parent().attr("id");

    //save to local storage
    localStorage.setItem(taskTime, taskText);

    console.log("button clicked");
})

//check time status and alter class if necessary

// set curent time variable
// get time from rows - convert text to time?
// if time = current time set attribute
// if time > current time set attribute
// if time < current time set attribute



// get tasks from localstorage
$("#9am .description").val(localStorage.getItem("9am"));
$("#10am .description").val(localStorage.getItem("10am"));
$("#11am .description").val(localStorage.getItem("11am"));
$("#12pm .description").val(localStorage.getItem("12pm"));
$("#1pm .description").val(localStorage.getItem("1pm"));
$("#2pm .description").val(localStorage.getItem("2pm"));
$("#3pm .description").val(localStorage.getItem("3pm"));
$("#4pm .description").val(localStorage.getItem("4pm"));
$("#5pm .description").val(localStorage.getItem("5pm"));

