/*
These are used to create the menu links that are located in the header.
Creating this dynamically in case menu needs to be changed at a later date.
*/
var login_menu_links = {
	'login':{
		text: 'login',
		file: 'login.html',
		default: true,
	},
	'new user':{
		text: 'new user',
		file: 'new_user.html',
	},
}

var logged_in_menu_links = {
	'logout':{
		text: 'logout',
		file: 'logout.html',
	},
	'moment':{
		text: 'moment',
		file: 'moment.html',
	},
	'past moments':{
		text: 'past moments',
		file: 'past_moments.html',
	}
}
/*
This function is used to create the list items for the links above. 
Created in list format for bootstrap.
*/
function attach_links(menu_links){
	for (key in menu_links){
		var li = $('<li>');
		var a = $('<a>',{
			text:menu_links[key].text,
			class: 'nav_bar_link_style ' + menu_links[key].text,
		}).click(function(){
			load_page(menu_links, $(this).text());
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
function load_page(menu_links, page){
	target_url = menu_links[page].file;
	console.log(target_url);
	$.ajax({
		url: 'includes/functions/'+target_url,
		dataType: 'html',
		cache: false,
		success: function(response){
			$('.main_body').html('');
			$('.main_body').append(response);
			if(target_url == 'moment.html'){
				calendar();
			}
		}
	});		
}
$(document).ready(function(){
	//creates links from the function above
    attach_links(login_menu_links);
});