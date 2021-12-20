var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

var taskText = document.querySelector(".description");
var taskTime = "";

var currentTime = moment().hour();

console.log(currentTime);

//save text on click
$(".saveBtn").on("click", function(){

    taskText = $(this).siblings("description").val();
    taskTime = $(this).parent().attr("id");

    //save to local storage
    localStorage.setItem(taskTime, taskText);

    console.log("button clicked");
})

//check time status and alter class if necessary

function checkTime(){

    $(".timeBlock").each(function(){
        var rowTime = $(this).attr("id");

            if (rowTime < currentTime){
                $(this).siblings("description").removeClass("future");
                $(this).siblings("description").removeClass("present");
                $(this).siblings("description").addClass("past");
            }

            else if (rowTime === currentTime) {
                $(this).siblings("description").removeClass("future");
                $(this).siblings("description").addClass("present");
                $(this).siblings("description").removeClass("past");
            }

            else if (rowTime > currentTime) {
                $(this).siblings("description").addClass("future");
                $(this).siblings("description").removeClass("present");
                $(this).siblings("description").removeClass("past");
            }
        console.log(rowTime);
    })
};
// set curent time variable
// get time from rows - convert text to time?
// if time = current time set attribute
// if time > current time set attribute
// if time < current time set attribute




// get tasks from localstorage
$("#9 .description").val(localStorage.getItem("9"));
$("#10 .description").val(localStorage.getItem("10"));
$("#11 .description").val(localStorage.getItem("11"));
$("#12 .description").val(localStorage.getItem("12"));
$("#13 .description").val(localStorage.getItem("13"));
$("#14 .description").val(localStorage.getItem("14"));
$("#15 .description").val(localStorage.getItem("15"));
$("#16 .description").val(localStorage.getItem("16"));
$("#17 .description").val(localStorage.getItem("5"));

// call functions

checkTime();