<?php
//This is the php handler for the edited entry.js file. It collects the 
// info from the $_POST variable and uses and UPDATE in the $query to
//find the ID of the entry and update it's contents
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