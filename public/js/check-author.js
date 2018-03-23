$(document).ready(function () {
    disableBtn();
    $('#author').blur(function () {
        var $author = $('#author');
        if($author.val().length === 0) {
            $('#authorNull').show();
            $('#authorLength').hide();
            disableBtn();
        } else if($author.val().length > 40) {
            $('#authorNull').hide();
            $('#authorLength').show();
            disableBtn();
        } else {
            $('#authorNull').hide();
            $('#authorLength').hide();
            enableBtn();
        }
    })
});

function disableBtn() {
    document.getElementById("btn-create").disabled = true;
}

function enableBtn() {
    document.getElementById("btn-create").disabled = false;
}