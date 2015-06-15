
/*
function to log the user in. Accesses the database on the server, and pull down 
by ID. Will be attached to login button on login.html
NEEDS TO BE FINISHED!
*/
function login(){
	var username = $('#username').val();
	var password = $('#password').val();
	$.ajax({
		url: 'includes/functions/login_handler.php',
		dataType:'json',
		method: 'POST',
		crossDomain: true,
		data:{
			username: username,
			password: password,
		},
		success: function(response){			
			console.log('success.response is', response);
			var user_id = response.row['id'];
			console.log('user_id is ', user_id);
			$.ajax({
				url: 'includes/functions/main_text_area.html',
				dataType: 'html',
				cache: false,
				success: function(response){
					$('.main_body').html('');
					$('.main_body').append(response);
				}
			});
		}
	});
}
