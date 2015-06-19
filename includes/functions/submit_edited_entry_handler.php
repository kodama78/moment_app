<?php
	session_start();
	require ('mysql_connect.php');
	$entry_id = $_SESSION['entry_id'];
	$title = addslashes($_POST['title']);
	$entry = addslashes($_POST['entry']);
	$output['success'] = false;

	 if(empty($entry_id)){
	 	echo "Entry wasn't definied. Entry was not edited";
	 }
	 else
	 {
	 	$query = "UPDATE `user_entries` 
	 		SET title = '$title', entry = '$entry' 
	 		WHERE id = '$entry_id'";
	 		print($query);
	 	$rows = mysqli_query($conn, $query);
	 	if(mysqli_affected_rows($conn) > 0){
			$output['success'] = true;
		}
		else
		{
			$output['error'][] = 'Entry not saved';
		}
	 }
	 echo json_encode($output);
?>