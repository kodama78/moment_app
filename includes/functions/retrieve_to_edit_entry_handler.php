
<?php
//This handles the retrieving of the information from the ajax call
//in retrieve_entry.js and sends the row that was retrieved
	session_start();
	require ('mysql_connect.php');
	$entry_id = $_POST['id'];
	$_SESSION['entry_id'] = $_POST['id'];
	$output['success'] = false;
	if(!isset($entry_id)){
	 	echo 'Entry not found. Entry was not deleted';
	 }
	 else
	 {
	 	$query = "SELECT * FROM `user_entries` WHERE id ='$entry_id'";
	 	$rows = mysqli_query($conn, $query);
	 	if($row = mysqli_num_rows($rows) > 0){
	 		while($row = mysqli_fetch_assoc($rows)){
				$output['entry_info'] = $row;
			}
			$output['success'] = true;
		}
		else
		{
			$output['error'][] = 'Entry not saved';
		}
	 }
	 echo json_encode($output);
?>