<?php
	require('mysql_connect.php');
	$query = "SELECT ue.*, u.id, u.email 
		FROM user_entries 
		AS ue JOIN users AS u 
		ON u.id = ue.user_id";
	$result = mysqli_query($conn, $query);
	print_r($result);
	if(mysqli_num_rows($result) > 0)
		{
			while($row = mysqli_fetch_assoc($result)){
				print_r($row);
				// if()
				// $entry_time = date('Y-m-d H:iA', strtotime($row['entry_timestamp']));
				// $current_date = date('Y-m-d H:iA');
				// print_r($current_date);
			}
		}
?>