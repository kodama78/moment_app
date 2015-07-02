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
		print json_encode($output);
	}
	else
	{
		$check_user_email = "SELECT id FROM `users` WHERE email = '$email'";
		$email_result = mysqli_query($conn, $check_user_email);
		if(mysqli_num_rows($email_result) > 0){
			$output['message'] = 'Sorry, an account for that email already exists.';
			print json_encode($output);
		}
		else
		{
			$insert_new_user = "INSERT INTO `users` (`username`, `email`, `password`, `firstname`, `lastname`) 
											VALUES ('$username', '$email', '$password', '$firstname', '$lastname')";
			$insert_user_result = mysqli_query($conn, $insert_new_user);
			if(mysqli_affected_rows($conn) > 0){
				$output['success'] = true;
				$output['message'] = "User created! Let's start our first Moment...";
				print json_encode($output);
			}
			else{
				$output['message'] = "Database error, user not added";
				print json_encode($output);
			}
			
		}
	}
?>