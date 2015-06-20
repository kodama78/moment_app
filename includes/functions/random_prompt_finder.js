//This will make the ajax call from the server and call down a question
//for the user to answer in their thought. It then displays it in the prompt
//display and sets the title of the journal entry to the prompt

function random_prompt_finder(){
	$.ajax({
		url:'includes/functions/random_prompt_handler.php',
		dataType: 'json',
		method: 'POST',
		success: function(response){
			console.log('random prompt finder returns ', response);
			if(response.success){
				$('#prompt_display').text('');
				var random_prompt = response.data.question;
				var rq_id = response.data.id;
				$('#prompt_display').text(random_prompt);
				$('#rq_id').val(rq_id);
			}
		},
	});
}