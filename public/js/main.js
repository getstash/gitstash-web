$('.js-switch').bootstrapSwitch();

$("#rowSelectAll").click(function () {
    $(".js-switch").prop('checked', $(this).prop('checked'));
});