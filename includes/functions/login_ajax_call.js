
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
		cache: false,
		data:{
			username: username,
			password: password,
		},
		success: function(response){			
			if(response.success == false)
			{
				console.log('Login failed. Incorrect username or password.');
			}
			else
			{
				$.ajax({
					url: 'includes/functions/main_text_area.html',
					dataType: 'html',
					cache: false,
					success: function(response){
						$('.main_body').html('');
						$('.main_body').append(response);
						console.log('login response is ', response);
					}
				});
			}
			
		}
	});
}
