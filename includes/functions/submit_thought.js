function submit_thought(){
	if($('.textarea_thoughts') == '')
		{
			console.log('no thoughts?');
		}
	else
	{
		var new_entry = {};
		new_entry.title = $('.title_thoughts').val();
		new_entry.thought = $('.textarea_thoughts').val();
		$.ajax({
			url:'includes/functions/submit_thought_handler.php',
			dataType: 'json',
			method: 'POST',
			crossdomain: true,
			cache: false,
			data: {
				title: new_entry.title,
				entry: new_entry.thought,
			},
			success:function(response){
				console.log('submit_thought response is ', response);
			}
		});
	}

}