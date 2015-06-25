<?php
	require('mysql_connect.php');
	require('mail_withmailer.php');
	$query = "SELECT ue.title, ue.entry, ue.rq_id, ue.sent, ue.entry_timestamp,
			ue.entry_return_date, u.id, u.email, u.firstname, u.lastname 
			FROM user_entries AS ue 
			JOIN users AS u 
			ON u.id = ue.user_id
			WHERE entry_return_date < NOW()";
	$result = mysqli_query($conn, $query);
	if(mysqli_num_rows($result) > 0)
	{	
		$array=[];
		while($row = mysqli_fetch_assoc($result)){
			$array[]=$row;
		}
		foreach($array as $value)
		{
			print("this row: ".print_r($value,true));
			$subject = $value['firstname']. ' your memory reminder - '.$value['title'];
			$message = $value['entry'];
			$mail_result = mailer($value['email'], $subject, $message);
		}
	}
?>