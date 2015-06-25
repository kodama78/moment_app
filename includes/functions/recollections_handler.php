<?php
	// this is the php call that will make the sql db call that uses JOIN in mysqli to pull down all
	//previous journal entries based on the $_SESSION id that is stored.
	//The information that is created on the table is the title, entry, id and timestamp
	session_start();
	require ('mysql_connect.php');
	$user_id = $_SESSION['user_id'];
	$output['success'] = false;
	if(!isset($user_id)){
		$output['error'][] = 'Sorry, you need to login';
	}
	else
	{
		$query = "SELECT * FROM user_entries AS ue 
			JOIN users AS u ON u.id = ue.user_id 
			JOIN random_questions ON ue.rq_id = random_questions.id 
			WHERE u.id = '$user_id'";
		$rows = mysqli_query($conn, $query);
		if(mysqli_num_rows($rows) > 0)
		{
			while($row = mysqli_fetch_assoc($rows)){
				$row['entry_timestamp'] = date('M jS Y g:iA', strtotime($row['entry_timestamp']));
				$output['data'][] = $row;
			}
			$output['success'] = true;	
		}
		else
		{
			$output['error'][] = 'Sorry, there is no info for that entry';
		}
		
	}
	echo json_encode($output, true);
?>