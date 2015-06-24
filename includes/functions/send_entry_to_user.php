<?php
	require('mysql_connect.php');
	$query = "SELECT ue.*, u.id, u.email 
		FROM user_entries 
		AS ue JOIN users AS u 
		ON u.id = ue.user_id
		WHERE entry_return_date < NOW()";
	$result = mysqli_query($conn, $query);
	if(mysqli_num_rows($result) > 0)
	{	
		$current_date = date('Y-m-d H:i:s');
		while($row = mysqli_fetch_assoc($result)){
			$array['each row'][] = $row;
			print_r($array); 
		}
	}
?>