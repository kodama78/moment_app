//This function edits the entry pulled down in the retrieve_entry.js
//and mkaes an ajax call to the edit_update_handler to update the information
//on the server using the entries ID.
function edit_or_submit_entry() {
    if ($.trim($('.textarea_thoughts').val()) == '') {
        console.log('You forgot something...');
    } 
    else {
        if ($('#datepicker').val() == '') {
            console.log("You didn't put a date");
        }
        else
        {
            if ($('#hidden_id').val() == '')
            {
                submit_new_thought();
                clear_inputs_val();
                $('#rq_id').val('1');
            }
            else
            {
                submit_edited_entry();
                clear_inputs_val();
                $('#hidden_id').val('');
            }
        }
    }
}
