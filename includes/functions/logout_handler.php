<?php
	session_start();
	$_SESSION['user_id'] = '';
	$user_id = $_SESSION['user_id'];
	$output['success'] = false;
	if($user_id == ''){
		$output['success'] = true;
		$output['message'] = 'You have been successfully logged out';
	}
	else
	{
		$output['message'] = 'You have not been logged out yet';
	}
	
	echo json_encode($output);
?>