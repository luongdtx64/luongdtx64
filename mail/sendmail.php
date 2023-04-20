<?php
include  'C:\xampp\htdocs\webbanhang\mail\PHPMailer\src\PHPMailer.php';
include  'C:\xampp\htdocs\webbanhang\mail\PHPMailer\src\Exception.php';
include  'C:\xampp\htdocs\webbanhang\mail\PHPMailer\src\OAuth.php';
include  'C:\xampp\htdocs\webbanhang\mail\PHPMailer\src\POP3.php';
include  'C:\xampp\htdocs\webbanhang\mail\PHPMailer\src\SMTP.php';
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;  
// print_r($mail);
$mail = new PHPMailer(true);  
// print_r($mail);
try {
    $password = generateRandomPassword();
    //Server settings
    $mail->SMTPDebug = 0;                                 // Enable verbose debug output
    $mail->isSMTP();                                      // Set mailer to use SMTP
    $mail->Host = 'smtp.gmail.com';  // Specify main and backup SMTP servers
    $mail->SMTPAuth = true;                               // Enable SMTP authentication
    $mail->Username = 'luongdtx64@gmail.com';                 // SMTP username
    $mail->Password = 'bazlooseiaxtnkwp';                           // SMTP password
    $mail->SMTPSecure = 'tls';                            // Enable TLS encryption, `ssl` also accepted
    $mail->Port = 587;                                    // TCP port to connect to

    //Recipients
    $mail->setFrom('luongdtx64@gmail.com', 'ETO');
    $mail->addAddress('aechicot2003@gmail.com', 'Test');     // Add a recipient
    // $mail->addAddress('ellen@example.com');               // Name is optional
    // $mail->addReplyTo('info@example.com', 'Information');
    // $mail->addCC('cc@example.com');
    // $mail->addBCC('bcc@example.com');

    //Attachments
    // $mail->addAttachment('/var/tmp/file.tar.gz');         // Add attachments
    // $mail->addAttachment('/tmp/image.jpg', 'new.jpg');    // Optional name

    //Content
    $mail->isHTML(true);                                  // Set email format to HTML
    $mail->Subject = 'Reset password!';
    $mail->Body    = "Mật khẩu mới của bạn là : ".$password."\nMọi chi tiết liên hệ luongdtx64@gmail.com";
    // $mail->AltBody = 'Mọi chi tiết liên hệ luongdtx64@gmail.com';

    $mail->send();
    echo 'Message has been sent';
} catch (Exception $e) {
    echo 'Message could not be sent. Mailer Error: ', $mail->ErrorInfo;
}
function generateRandomPassword() {
    // Cài đặt các ký tự được phép trong mật khẩu
    $characters = '0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ';
    $length = 8; // Độ dài của mật khẩu
    $password = '';

    // Tạo mật khẩu ngẫu nhiên
    for ($i = 0; $i < $length; $i++) {
        $index = rand(0, strlen($characters));
        $password .= $characters[$index];
    }
    return $password;
}
?>