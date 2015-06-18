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
                $('.login').click();
            }
            
        }
    });
}
