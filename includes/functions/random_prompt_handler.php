<?php
//this is the handler that will look for a random prompt on the random_question table
//It will also set the $_SESSION['rq_id'] to the id of the question being used. This
//will be used to identify the question in the user_entries table when the answer is
//submitted
	session_start();
	require ('mysql_connect.php');
	$user_id = $_SESSION['user_id'];
	$output['success'] = false;
	$query = "SELECT * FROM random_questions 
		WHERE id NOT IN 
		(SELECT DISTINCT(RQ_ID) AS RQ_ID FROM user_entries WHERE user_id='$user_id')";
	$query_return = mysqli_query($conn, $query);
	$rows = mysqli_num_rows($query_return);
	if($rows > 0)
	{
		while ($row = mysqli_fetch_assoc($query_return)) {
			$temp_array [] = $row;
		}
		$random_row = rand(0, $rows-1);
		$chosen_row = $temp_array[$random_row];
		
		$output['data'] = $chosen_row;
		//$_SESSION['rq_id'] = $chosen_row['id'];
		$output['success'] = true;
	}
	else
	{
		$output['error'][] = 'Sorry, there is no question for that entry';
	}
	print json_encode($output);
// ?>