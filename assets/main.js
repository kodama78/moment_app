/*
These are used to create the menu links that are located in the header.
Creating this dynamically in case menu needs to be changed at a later date.
*/
menu_links = {
	'login':{
		text: 'login',
		file: 'login.html',
	},
	'new user':{
		text: 'new user',
		file: 'new_user.html',
	},
	'home':{
		text: 'home',
		file: 'home.html',
		default: true
	},
}
/*
This function is used to create the list items for the links above. 
Created in list format for bootstrap.
*/
function attach_links(){
	for (key in menu_links){
		var li = $('<li>');
		var a = $('<a>',{
			text:menu_links[key].text,
			class: 'nav_bar_link_style'
		}).click(function(){
			load_page($(this).text());
		});
		li.append(a);
		$('.navbar-nav').append(li);
		if(typeof menu_links[key].default != 'undefined'){
			a.click();
		}
	}
}
/*
this function contains the ajax call that is used in the attach_links function
above. It appends the content from each page to the main_body of the 
index.php page.
*/
function load_page(page){
	target_url = menu_links[page].file;
	$.ajax({
		url: 'includes/functions/'+target_url,
		dataType: 'html',
		cache: false,
		success: function(response){
			$('.main_body').html('');
			$('.main_body').append(response);
		}
	});		
}

/*
function to log the user in. Accesses the database on the server, and pull down 
by ID. Will be attached to login button on login.html
NEEDS TO BE FINISHED!
*/
function login(){
	var username = $('#username').val();
	var password = $('#password').val();
	$.ajax({
		url: '',
		dataType:'json',
		method: 'POST',
		crossDomain: true,
		data:{
			username: username,
			password: password
		},
		success: function(response){
			if(response.success == false){
				console.log('login failed. Try again.');
			}
		}
	});
}
/*
Function used to create a new account. NEEDS TO BE IMPROVED AND EDITED TO WORK WITH
CURRENT CODE!
*/
function account_object_create() {
        user_account.username = $('#username').val();
        user_account.password = $('#password').val();
        user_account.password_confirmation = $('#password_confirmation').val();
        user_account.firstname = $('#account_firstname').val();
        user_account.lastname = $('#account_lastname').val();
        user_account.email = $('#account_email').val();
        user_object.username = $('#username').val();
        user_object.password = $('#password').val();
        //----------------------*NOTE* ---------------------//
        //we need more conditionals but we are just getting this up and running for now.// 
        //we still need conditionals for the username use, first & last name minimum charachters//
        //email validation//
        //password must be valid//
        //password confirmation conditional//
        if (user_account.password_confirmation === user_account.password) {
            console.log('passwords match!');
        } else if (user_account.password_confirmation != user_account.password) {
            console.log('the passwords do not match!');
            user_account = {};
            $('#password').val('');
            $('#password_confirmation').val('');
        }
        $.ajax({
            url: 'http://s-apis.learningfuze.com/todo/newAccount',
            dataType: 'JSON',
            cache: false,
            crossDomain: true,
            method: 'POST',
            data: {
                username: user_account.username,
                password: user_account.password,
                password2: user_account.password_confirmation,
                email: user_account.email,
                firstName: user_account.firstname,
                lastName: user_account.lastname
            },
//here we want to let the user know that the username is already taken, then redirect them to the account creation page//
            success: function(response) {
                user_login_server(user_object);
                if(response.success == false){
                    alert(response.errors[0]);
                     $.ajax({
                        url: 'pages/account_creation.html',
                        dataType: 'html',
                        method: 'GET',
                        cache: false,
                        success: function(response) {
                            $('.main_body').html('');
                            $('.main_body').append(response);
                            //account creation click function//
                            $('#submit_account_btn').click(function() {
                            account_object_create();
                            $('.main_body').html('');
                            console.log('user_account is ', user_account);
                        });
                    }
                });
            }
        }
    });
 }
$(document).ready(function(){
	attach_links();
});