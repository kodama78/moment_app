<?php
	 require ('mysql_connect.php');
	 $entry_id = $_POST['id'];
	 $output['success'] = false;
	 if(!isset($entry_id)){
	 	echo 'Entry not found. Entry was not deleted';
	 }
	 else
	 {
	 	$query = "DELETE FROM `time_capsule`.`user_entries` WHERE `user_entries`.`id` = $entry_id";
	 	$rows = mysqli_query($conn, $query);
	 	if($row = mysqli_affected_rows($conn) > 0){
			$output['success'] = true;
		}
		else
		{
			$output['error'][] = 'Entry not saved';
		}
	 }
	 echo json_encode($output);
?>