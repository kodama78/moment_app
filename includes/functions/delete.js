/*
ajax call to delete entry from server. in success function will will remove the parent div from the dom
*/
function delete_entry(id){
	var button_id = id;
	$.ajax({
		url:'includes/functions/delete_handler.php',
		dataType: 'json',
		method: 'POST',
		data:{
			id: button_id,
		},
		success: function(response){
			if (response.success){
				$('#'+ button_id).remove();
			}
		}
	});
}