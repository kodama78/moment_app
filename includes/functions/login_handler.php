<?php 
	require('mysql_connect.php');
	$username = $_POST['username'];
	$password = sha1($_POST['password']);
	$output['success'] = false;
	if(!isset($username)){
		echo 'Login failed';
	}
	else
	{
		if (!isset($password))
		{
			echo 'Login failed';
		}
		else
		{
			$output['success']= true;
		}
	}
	
	$query = "SELECT id FROM `users` WHERE username = '$username' AND password='$password'";
	$result = mysqli_query($conn, $query);
	

	if(mysqli_num_rows($result) > 0){
		while($inner_result = mysqli_fetch_assoc($result)){
			$output['row'] = $inner_result;

		}
		$output['success'] = true;	
	}
	echo json_encode($output);
?>