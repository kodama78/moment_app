<?php
//This inserts the submitted user entry from the thoughts page into the database. Accesses the user entries table and
//echoes a output boolean in the success key and the id of the entry in new entry id
session_start();
	require('mysql_connect.php');
	$user_id = $_SESSION['user_id'];
	$title = addslashes($_POST['title']);
	$entry = addslashes($_POST['entry']);
	$output['success'] = false;
	if(!isset($user_id)){
		$output['message'] = 'you need to log in';
	}
	else
	{	
		$query = "INSERT INTO `user_entries` (`title`, `entry`, `user_id`) VALUES ('$title', '$entry', '$user_id')";
		$result = mysqli_query($conn, $query);
		if(mysqli_affected_rows($conn) > 0){
			$new_id = mysqli_insert_id($conn);
			$output['new_entry_id'] = $new_id;
			$output['success'] = true;
		}
		else
		{
			$output['error'][] = 'Entry not saved';
		}
	}
	echo json_encode($output);
?>