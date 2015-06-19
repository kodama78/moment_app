//This function edits the entry pulled down in the retrieve_entry.js
//and mkaes an ajax call to the edit_update_handler to update the information
//on the server using the entries ID.
function edit_or_submit_entry(){
	if ($('.textarea_thoughts') == '')
	{
        console.log('no thoughts?');
    }
    else
    {
    	if($('#hidden_id').val() == '')
    	{
    		submit_new_thought();
    	}
    	else
    	{
    		submit_edited_entry();
    	}
    }
}
