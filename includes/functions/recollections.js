/*
this is the ajax call that sends the request to the server to retrieve the previous journal entries.
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
            	var title = previous_entries[i].title;
            	var entry = previous_entries[i].entry;
            	var created_title = $('<h3>').text(title);
            	var created_entry = $('<p>').text(entry);
            	$('#recollections_append').append(created_title, created_entry);
            }
        },
    });
}
