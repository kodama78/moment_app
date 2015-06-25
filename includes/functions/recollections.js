/*
this is the ajax call that sends the request to the server to retrieve the previous journal entries.
It collects the title, entry, id and timestamp from the server and creates DOM elements for them.
All DOM elements are located within a div.
It does so by the _SESSION sg user id
*/
function recollections_call() {
    $.ajax({
        url: 'includes/functions/recollections_handler.php',
        dataType: 'json',
        cache: false,
        success: function(response) {
        	$('#recollections_append').html('');
            console.log('recollections_call response is', response);
            previous_entries = response.data;
            for(var i = 0; i < previous_entries.length; i++){
            	var title = previous_entries[i].question;
            	var entry = previous_entries[i].entry;
                var id = previous_entries[i].id;
                var timestamp = previous_entries[i].entry_timestamp;
                var entry_div = $('<div>').addClass('col-xs-12 col-md-12 journal_entry').attr('id', id);
            	var created_title = $('<h4>').text(title);
            	var created_entry = $('<p>').text(entry);
                var created_timestamp = $('<p>').text(timestamp);
                // var delete_btn = $('<button>').addClass('btn btn-danger btn-small glyphicon glyphicon-remove').attr('id', id);
                // delete_btn.click(function(){
                //     delete_entry($(this).attr('id'));

                // });
                // var edit_btn = $('<button>').addClass('btn btn-info btn-small fa fa-pencil-square-o').attr('id', id);
                // edit_btn.click(function(){
                //     retrieve_to_edit_entry($(this).attr('id'));
                // });
                entry_div.append(created_title, created_timestamp, created_entry);
            	$('#recollections_append').append(entry_div);
            }
        }
    });
}
