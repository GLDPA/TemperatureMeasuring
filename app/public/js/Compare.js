$(function () {

    var output = '';

    $.ajax({
        type: 'GET',
        dataType: 'jsonp',
        url: 'http://localhost:55168/Service1.svc/getallmeasurments/',
        success: showMeasurements
    });

   

function showMeasurements(data) {

    output += '<tr>';
    output += '<th>ID</th>';
    output += '<th>DATE</th>';
    output += '<th>TEMPERATURE</th>';
    output += '</tr>';
    $.each(data, function (key, item) {

        output += '<tr>';
        output += '<th>' + item.Id + '</th>';
        output += '<th>' + item.Date + '</th>';

        if (item.Temperature > 26) {
            output += '<th>' + item.Temperature + "!" + '</th>';

        }
        else {
            output += '<th>' + item.Temperature + '</th>';
        }
        output += `<th> <div class="media-left"><button id='${item.Id}' class="feedback-delete btn btn-xs btn-danger"><span id="' + item.Id + '" class="glyphicon glyphicon-remove"></span></button></div> </th>`;
        output += '</tr>';


    });

    $('.temperatures').html(output);
}

var output = '';


});