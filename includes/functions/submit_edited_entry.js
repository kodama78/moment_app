function submit_edited_entry(){
	var edited_entry = {};
        edited_entry.title = $('.title_thoughts').val();
        edited_entry.thought = $('.textarea_thoughts').val();
        $.ajax({
        	url:'includes/functions/submit_edited_entry_handler.php',
        	dataType: 'json',
        	method: 'POST',
        	crossdomain: true,
        	cache: false,
        	data:{
        		title: edited_entry.title,
        		entry: edited_entry.thought,
        	},
        	success: function(response){
        		if(response.success){
        			console.log('edited entry successful. Response is ', response);
        			$('#hidden_id').val('');
        		}
        	}
        });
}