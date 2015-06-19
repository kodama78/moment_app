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
			class: 'nav_bar_link_style ' + menu_links[key].text,
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
$(document).ready(function(){
	//creates links from the function above
    attach_links();
});