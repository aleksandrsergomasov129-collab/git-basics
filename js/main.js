$(function () {

    let showPopup = function () {
        $('.popup-container').css('display', 'flex');
    };

    let closePopup = function () {
        $('.popup-container').css('display', 'none');
    };
    let clearForm = function () {
        $('#name').val('');
        $('#phone').val('');
    };

    $('button').on('click', function () {
        showPopup();
    });
    $('.close').on('click', function () {
        clearForm();
        closePopup();
    });
});