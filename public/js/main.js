$('.js-switch').bootstrapSwitch();

$('.js-switch').on('switchChange.bootstrapSwitch', function(event, state) {
	if($(this).attr('id') == 'select-all') {
	    console.log("You changed them ALL.");
	    $(".js-switch").bootstrapSwitch('state', state, state);
	} else {
		console.log("Make an AJAX request.");


		var github_id = $(this).attr('data-github-id');

		$.post('https://gitstash.dfl.mn/repositories', {
			'github_id' : github_id } )
			.done(function(data) {
			    console.log(data);
		});
	}
});