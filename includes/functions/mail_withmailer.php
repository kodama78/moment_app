<?php
require_once('emailconfig.php');
require_once('phpmailer/PHPMailer/PHPMailerAutoload.php');
	function mailer($email_to, $email_subject, $email_message){

		$mail = new PHPMailer;
		$mail->SMTPDebug = 0;                               // Enable verbose debug output

		$mail->isSMTP();                                      // Set mailer to use SMTP
		$mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
		$mail->SMTPAuth = true;                               // Enable SMTP authentication


		$mail->Username = EMAIL_USER;                 // SMTP username
		$mail->Password = EMAIL_PASS;                 // SMTP password
		$mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
		$mail->Port = 587;                                    // TCP port to connect to
		$options = array(
		    'ssl' => array(
		        'verify_peer' => false,
		        'verify_peer_name' => false,
		        'allow_self_signed' => true
		    )
		);
		$mail->smtpConnect($options);
		$mail->From = EMAIL_USER;
		$mail->FromName = EMAIL_USERNAME;
		$mail->addAddress($email_to, $email_to);     // Add a recipient
		//$mail->addAddress('ellen@example.com');               // Name is optional
		$mail->addReplyTo(EMAIL_USER, EMAIL_USERNAME);
		//$mail->addCC('cc@example.com');
		//$mail->addBCC('bcc@example.com');

		//$mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
		//$mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name
		$mail->isHTML(true);                                  // Set email format to HTML

		$mail->Subject = $email_subject;
		$mail->Body    = $email_message;
		$mail->AltBody = htmlentities($email_message);

		if(!$mail->send()) {
		    error_log(date('Y-m-d H:i:s') .' - Mailer Error: ' . $mail->ErrorInfo);
		    return false;
		} else {
		    return true;
		}
	}
?>
