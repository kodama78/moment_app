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
        new_entry.rq_id = $('#rq_id').val();
        new_entry.new_entry_reminder = $("#datepicker").datepicker("getDate");
        $.ajax({
            url: 'includes/functions/submit_new_thought_handler.php',
            dataType: 'json',
            method: 'POST',
            crossdomain: true,
            cache: false,
            data: {
                title: new_entry.title,
                entry: new_entry.thought,
                rq_id: new_entry.rq_id,
                reminder: new_entry.new_entry_reminder,
            },
            success: function(response) {
                if (response.success) {
                    recollections_call();
                    $('#thoughts').toggleClass('active');
                    $('#recollections').toggleClass('active');
                }
            }
        });
    }
}
