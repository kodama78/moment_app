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
                var id = previous_entries[i].id;
                var entry_div = $('<div>').addClass('col-xs-12 col-md-12 journal_entry').attr('id', id);
            	var created_title = $('<h3>').text(title);
            	var created_entry = $('<p>').text(entry);
                var delete_btn = $('<button>').addClass('btn-danger btn-small glyphicon glyphicon-remove').attr('id', id);
                delete_btn.click(function(){
                    delete_entry($(this).attr('id'));

                });
                var edit_btn = $('<button>').addClass('btn-info btn-small fa fa-pencil-square-o').attr('id', id);
                edit_btn.click(function(){
                    retrieve_entry($(this).attr('id'));
                });
                entry_div.append(created_title, created_entry, delete_btn, edit_btn);
            	$('#recollections_append').append(entry_div);
            }
        },
    });
}
