//this is the ajax call for submitting a new thought to the server.
//It collections the information from the inputs in the main_text_area.html
//and sends it to the php handler.
function submit_new_thought() {
    if ($('.textarea_thoughts') == '') {
        console.log('no thoughts?');
    }
    else
    {
        var new_entry = {};
        new_entry.title = $('.title_thoughts').val();
        new_entry.thought = $('.textarea_thoughts').val();
        $.ajax({
            url: 'includes/functions/submit_new_thought_handler.php',
            dataType: 'json',
            method: 'POST',
            crossdomain: true,
            cache: false,
            data: {
                title: new_entry.title,
                entry: new_entry.thought,
            },
            success: function(response) {
                if (response.success) {
                	console.log('this is inside the submit_thought success function');
                    recollections_call();
                    $('#thoughts').toggleClass('active');
                    $('#recollections').toggleClass('active');
                }
            }
        });
    }
}
