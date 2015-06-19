//This function edits the entry pulled down in the retrieve_entry.js
//and mkaes an ajax call to the edit_update_handler to update the information
//on the server using the entries ID.
function edit_entry(button_id){
	if ($('.textarea_thoughts') == '') {
        console.log('no thoughts?');
    }
    else
    {
    	var edited_entry = {};
        edited_entry.title = $('.title_thoughts').val();
        edited_entry.thought = $('.textarea_thoughts').val();
        $.ajax({
        	url:'includes/functions/edit_entry_handler.php',
        	dataType: 'json',
        	method: 'POST',
        	crossdomain: true,
        	cache: false,
        	data:{
        		title: edited_entry.title,
        		entry: edited_entry.thought,
        		id: button_id,
        	},
        	success: function(response){
        		if(response.success){
        			console.log('entry edit successful. Response is ', response);
        		}
        	}
        });

    }
}
