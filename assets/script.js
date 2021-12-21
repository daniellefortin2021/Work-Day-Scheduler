var todayDate = moment().format('dddd, MMM Do YYYY');
$("#currentDay").html(todayDate);

//save text on click
$(".saveBtn").on("click", function(){
    // get values from text input
    taskText = $(this).siblings(".description").val();
    taskTime = $(this).parent().attr("id");

    //save to local storage
    localStorage.setItem(taskTime, taskText);

    console.log("button clicked");
});

//check time status and alter class

function timeCheck () {
    var currentTime = 10;
    $(".time-block").each(function(){

        var rowTime = $(this).attr("id");

        $(this).removeClass("future");
        $(this).removeClass("past");
        $(this).removeClass("present");
    
        if (rowTime === currentTime) {
            $(this).addClass("present");
        } else if (rowTime > currentTime) {
            $(this).addClass("future");
        } else {
            $(this).addClass("past");
        }

        console.log(currentTime);
        console.log(rowTime);
    })
}

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
$("#17 .description").val(localStorage.getItem("17"));

// call function to check time 
timeCheck();