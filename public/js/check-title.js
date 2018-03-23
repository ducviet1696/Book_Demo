$(document).ready(function () {
    disableBtn();
    $('#title').blur(function () {
        var $title = $('#title');
        if($title.val().length === 0) {
            $('#titleNull').show();
            $('#titleLength').hide();
            disableBtn();
        } else if($title.val().length > 40) {
            $('#titleNull').hide();
            $('#titleLength').show();
            disableBtn();
        } else {
            $('#titleNull').hide();
            $('#titleLength').hide();
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