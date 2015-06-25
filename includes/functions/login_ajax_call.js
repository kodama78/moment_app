/*
function to log the user in. Accesses the database on the server, and pull down 
by ID. Will be attached to login button on login.html
NEEDS TO BE FINISHED!
*/
function login() {
    var username = $('#username').val();
    var password = $('#password').val();
    $.ajax({
        url: 'includes/functions/login_handler.php',
        dataType: 'json',
        method: 'POST',
        crossDomain: true,
        cache: false,
        data: {
            username: username,
            password: password,
        },
        success: function(response) {
            if (response.success == false) {
                console.log('Login failed. Incorrect username or password.');
                $('#login_failed').css('visibility', 'visible');

            } else {
                $.ajax({
                    url: 'includes/functions/main_text_area.html',
                    dataType: 'html',
                    cache: false,
                    success: function(response) {
                        console.log('success, you have logged in');
                        $('#login_failed').css('visibility', 'hidden');
                        $('.navbar-nav').html('');
                        attach_links(logged_in_menu_links);
                        $('.main_body').html('');
                        $('.main_body').append(response);
                        $('#datepicker').datepicker();
                        $('.logout').click(function(){
                            logout();
                        });

                        $('#submit_update_btn').click(function() {
                            	edit_or_submit_entry();
                        });
                    }
                });
            }

        }
    });
}
