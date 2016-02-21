$('.js-switch').bootstrapSwitch();

$('#select-all').on('switch-change', function () {
    console.log("u changed it");
});

/*$("#select-all").click(function () {
    $(".js-switch").prop('checked', $(this).prop('checked'));
<<<<<<< HEAD
    $(".js-switch").setState($(this).state());
});*/
    //$(".js-switch").setState($(this).state());
