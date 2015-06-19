<?php
	require ('mysql_connect.php');
	 $entry_id = $_POST['id'];
	 $title = addslashes($_POST['title']);
	 $entry = addslashes($_POST['entry']);
	 $output['success'] = false;
	 if(!isset($entry_id)){
	 	echo 'Entry not found. Entry was not deleted';
	 }
	 else
	 {
	 	$query = "UPDATE `user_entries` 
	 		SET title = '$title', entry = '$entry' 
	 		WHERE id = '$entry_id'";
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