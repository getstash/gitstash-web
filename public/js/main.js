$(document).ready(function() {

	$('.js-switch').bootstrapSwitch();

	// This bit works. Don't touch it.
	$.get('https://gitstash.dfl.mn/repositories', function(data) {
		data.forEach(function(item) {
			$('[data-github-id="' + item.github_id + '"]').bootstrapSwitch('state', item.enabled, item.enabled);
		});
	});


	$('.js-switch').on('switchChange.bootstrapSwitch', function(event, state) {
		if($(this).attr('id') == 'select-all') {
		    $(".js-switch").bootstrapSwitch('state', state, state);

		    $(".js-switch:not(#select-all)").each(function() {

		    	var github_id = 'gh:' + $(this).attr('data-github-id');
		    	var new_state = state ? 'true' : 'false';

		    	$.post('https://gitstash.dfl.mn/repositories', {
					'github_id' : github_id, 'enabled' : new_state} )
					.done(function(data) {
				    	console.log(data);
				});
		    })
		} else {

			var github_id = 'gh:' + $(this).attr('data-github-id');
			var new_state = state ? 'true' : 'false';

			$.post('https://gitstash.dfl.mn/repositories', {
				'github_id' : github_id, 'enabled' : new_state} )
				.done(function(data) {
				    console.log(data);
			});
		}
	});

});