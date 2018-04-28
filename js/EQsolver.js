$(document).ready( function() {
    $('#equation').on('change keyup paste', function() {
        var value = $('#equation')[0]['value'];
        var answer = eval(value);
        if (answer) {
            $('#result').html(eval(value));
        }
    })
})