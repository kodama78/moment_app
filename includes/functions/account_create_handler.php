<?php 
	require('mysql_connect.php');

	$username = $_POST['username'];
	$password = sha1($_POST['password']);
	$email = $_POST['email'];
	$firstname = $_POST['firstname'];
	$lastname = $_POST['lastname'];
	$query = "SELECT id FROM `users` WHERE username = '$username' AND password='$password'";
	$result = mysqli_query($conn, $query);
	// if(mysqli_num_rows($result) > 0){
	// 	while($inner_result = mysqli_fetch_assoc($result)){
			
	// 	}	
	// }
?>