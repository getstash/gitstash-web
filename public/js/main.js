$(document).ready(function() {

	$('.js-switch').bootstrapSwitch();

	// This bit works. Don't touch it.
	$.get('https://gitstash.dfl.mn/repositories', function(data) {
		data.forEach(function(item) {
			var enabled = !!item.enabled;
			$('[data-github-id="' + item.github_id + '"]').bootstrapSwitch('state', enabled, enabled);
		});

		var anyOff = false;

		$('tbody .js-switch').each(function (el) {
			if (!$(el).bootstrapSwitch('state'))
				anyOff = true;
		});

		if (!anyOff)
			$('thead .js-switch').bootstrapSwitch('state', true, true);
	});


	$('.js-switch').on('switchChange.bootstrapSwitch', function(event, state) {
		if($(this).attr('id') == 'select-all') {
		    $(".js-switch").bootstrapSwitch('state', state, state);

		    $(".js-switch:not(#select-all)").each(function() {

		    	var github_id = $(this).attr('data-github-id');
		    	var new_state = state ? 1 : 0;

		    	$.post('https://gitstash.dfl.mn/repositories', {
					'github_id' : github_id, 'enabled' : new_state} )
					.done(function(data) {
				    	console.log(data);
				});
		    })
		} else {

			var github_id = $(this).attr('data-github-id');
			var new_state = state ? 1 : 0;

			$.post('https://gitstash.dfl.mn/repositories', {
				'github_id' : github_id, 'enabled' : new_state} )
				.done(function(data) {
				    console.log(data);
			});
		}
	});

});