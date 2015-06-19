/*
This function retrieves the entry from the serve and repopulates the text
input area with the retrieved information
*/
function retrieve_entry(id){
	var button_id = id;
	console.log('button_id is ', button_id);
	$.ajax({
		url:'includes/functions/retrieve_entry_handler.php',
		dataType: 'json',
		method: 'POST',
		crossdomain: true,
		cache: false,
		data: {
			id: button_id,
		},
		success: function(response){
			console.log('edit_entry response is ', response);
			var entry_object = response.entry_info;
			$('#recollections').toggleClass('active');
			$('#thoughts').toggleClass('active');
			$('.title_thoughts').val(entry_object.title);
			$('.textarea_thoughts').val(entry_object.entry);
			update_not_submit = true;
		},
		error: function(response){
			
		}
	});
}