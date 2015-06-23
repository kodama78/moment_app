//This function submits the edited entry back to the php handler.
//It takes its values from the entry by ID.
function submit_edited_entry(){
	var edited_entry = {};
        edited_entry.title = $('.title_thoughts').val();
        edited_entry.thought = $('.textarea_thoughts').val();
        edited_entry_set_reminder = $("#datepicker").datepicker("getDate");
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
        		if(response.success) {
                	console.log('this is inside the submit_thought success function');
                    recollections_call();
                    $('#thoughts').toggleClass('active');
                    $('#recollections').toggleClass('active');
                }
        	}
        });
}