var datetime = null,
date = null;

var update = function () {
    date = moment(new Date());
    var html = '<p>' + date.format('dddd, MMMM Do') + '</p>';
    html += '<p id="time">' + date.format('HH:mm') + '</p>';

    $('#date').html(html);
};

$(document).ready(function() {
    $('#date').html(date);
    update();
    setInterval(update, 1000);
});

