<?php
	// this is the php call that will make the sql db call that uses JOIN in mysqli to pull down all
	//previous journal entries based on the $_SESSION id that is stored
	session_start();
	require ('mysql_connect.php');
	$user_id = $_SESSION['user_id'];
	$output['success'] = false;
	if(!isset($user_id)){
		$output['error'][] = 'Sorry, you need to login';
	}
	else
	{
		$query = "SELECT ue.title, ue.entry 
			FROM user_entries AS ue 
			JOIN users AS u ON u.id = ue.user_id 
			WHERE u.id = '$user_id'"; 
		$rows = mysqli_query($conn, $query);
		if(mysqli_num_rows($rows) > 0)
		{
			while($row = mysqli_fetch_assoc($rows)){
				$output['data'][] = $row;
			}
			$output['success'] = true;
			// foreach ($rows as $key => $value) {
			// 	$output[] = $value;
			// 	$output['success'] = true;
			// }	
		}
		else
		{
			$output['error'][] = 'Sorry, there is no info for that entry';
		}
		
	}
	echo json_encode($output, true);
?>