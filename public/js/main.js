$('.js-switch').bootstrapSwitch();

$("#select-all").click(function () {
    $(".js-switch").prop('checked', $(this).prop('checked'));
    $(".js-switch").setState($(this).state());
});
