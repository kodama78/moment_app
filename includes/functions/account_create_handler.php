<?php 
	require('mysql_connect.php');

	$username = $_POST['username'];
	$password = sha1($_POST['password']);
	$email = $_POST['email'];
	$firstname = $_POST['first_name'];
	$lastname = $_POST['last_name'];
	$output['success'] = false;
	$check_user_exist = "SELECT id FROM `users` WHERE username = '$username'";
	$user_result = mysqli_query($conn, $check_user_exist);
	
	if(mysqli_num_rows($user_result) > 0)
	{
		$output['message'] = 'Sorry, that username is taken';
		echo json_encode($output);
	}
	else
	{
		$check_user_email = "SELECT id FROM `users` WHERE email = '$email'";
		$email_result = mysqli_query($conn, $check_user_email);
		if(mysqli_num_rows($email_result) > 0){
			$output['message'] = 'Sorry, an account for that email already exists.';
			echo json_encode($output);
		}
		// else
		// {
		// 	// $input_new_user = 
		// }
	}
?>