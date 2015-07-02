
/*
Function used to create a new account. NEEDS TO BE IMPROVED AND EDITED TO WORK WITH
CURRENT CODE!
*/
function account_create() {
	console.log('ACCOUNT CREATE CLICKED!');
    user_account = {};
    user_account.username = $('#username').val();
    user_account.password = $('#password').val();
    user_account.password_confirmation = $('#password_confirmation').val();
    user_account.firstname = $('#firstname').val();
    user_account.lastname = $('#lastname').val();
    user_account.email = $('#email').val();
    //----------------------*NOTE* ---------------------// 
    //we still need conditionals for the username use, first & last name minimum charachters//
    //email validation//
    //password must be valid//
    //password confirmation conditional//
    if (user_account.password_confirmation === user_account.password) {
        console.log('passwords match!');
        $.ajax({
            url: 'includes/functions/account_create_handler.php',
            dataType: 'JSON',
            cache: false,
            crossDomain: true,
            method: 'POST',
            data: {
                username: user_account.username,
                password: user_account.password,
                email: user_account.email,
                first_name: user_account.firstname,
                last_name: user_account.lastname
            },
            success: function(response){
            	console.log('response for account_create is', response);
                if(response.success == false){
                    console.log('Sorry, user not created, ' + response.output.message);
                }
            }
        });
    }   
    else if (user_account.password_confirmation != user_account.password) {
        console.log('the passwords do not match!');
        user_account = {};
        $('#password').val('');
        $('#password_confirmation').val('');
    }
}
