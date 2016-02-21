$('.js-switch').bootstrapSwitch();

$('#select-all').on('switchChange.bootstrapSwitch', function(event, state) {
    console.log("u changed it");
    $(".js-switch").bootstrapSwitch('state', state, state);
});

/*$("#select-all").click(function () {
    $(".js-switch").prop('checked', $(this).prop('checked'));
<<<<<<< HEAD
    $(".js-switch").setState($(this).state());
});*/
    //$(".js-switch").setState($(this).state());
