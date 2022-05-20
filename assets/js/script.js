var saveBtn = $(".saveBtn");




var currentDate = moment();
$("#currentDay").text(currentDate.format("dddd, MMMM Do, YYYY"));
console.log(currentDate);


function timeblockColor() {
    var currentHour = moment().hour();

    $(".time-block").each(function() {
        var hour = parseInt($(this).attr("id"));

        if (hour > currentHour) {
            $(this).addClass("future");
            $(this).removeClass("present");
            $(this).removeClass("past");
        } if (hour === currentHour) {
            $(this).addClass("present");
            $(this).removeClass("future");
            $(this).removeClass("past");
        } if (hour < currentHour) {
            $(this).addClass("past");
            $(this).removeClass("present");
            $(this).removeClass("future");
        }
    })
};

function saveSchedule () {
    var time = $(this).siblings(".hour").text();
    var event = $(this).siblings(".event").val();

    localStorage.setItem("time", "event");
};

function schedule() {
    $(".hour").each(function() {
        var currentHour = $(this).text();
        var event = localStorage.getItem(currentHour);

        if (event !== null) {
            $(this).siblings(".event").val(event);
        }
    });
};


saveBtn.on("click", saveSchedule);
timeblockColor();
schedule();