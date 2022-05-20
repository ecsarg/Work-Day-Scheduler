var saveBtn = $(".saveBtn");

var todayDate = document.querySelector("#currentDay");
var currentDate = moment();
todayDate.textContent = currentDate.format("dddd MMMM Do YYYY");


function timeblockColor() {
    var currentHour = moment().hour();

    $(".time-block").each(function() {
        var hour = parseInt($(this).attr("id"));

        if (hour > currentHour) {
            $(this).addClass("future");
        } if (hour === currentHour) {
            $(this).addClass("present");
        } if (hour < currentHour) {
            $(this).addClass("past");
        }
    })
};

saveBtn.on("click", function() {
    var time = $(this).siblings(".hour").text();
    var event = $(this).siblings(".event").val();

    localStorage.setItem("time", "event");
});

function schedule() {
    $(".hour").each(function() {
        var currentHour = $(this).text();
        var event = localStorage.getItem(currentHour);

        if (event !== null) {
            $(this).siblings(".event").val(event);
        }
    });
}

timeblockColor();
schedule();