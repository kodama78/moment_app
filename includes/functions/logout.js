/*
This accesses the server and erases the user_id. It then destroys the journal entries appended to the main_text_area
and sends the user to the login area to log back in
*/
function logout() {
    console.log('in the logout function');
    $.ajax({
        url: 'includes/functions/logout_handler.php',
        dataType: 'json',
        cache: false,
        crossDomain: true,
        method: 'POST',
        success: function(response) {
            console.log('logout response is ', response);
            if(response.success == true){
                $('#recollections_append').html('');
                $('.navbar-nav').html('');
                $('.main_body').append('login.html');
                attach_links(login_menu_links);
            }
            
        }
    });
}
