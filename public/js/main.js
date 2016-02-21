$('.js-switch').bootstrapSwitch();

$('.js-switch').on('switchChange.bootstrapSwitch', function(event, state) {
	if($(this).attr('id') == 'select-all') {
	    console.log("u changed it");
	    $(".js-switch").bootstrapSwitch('state', state, state);
	} else {
		console.log("make req");
	}

});