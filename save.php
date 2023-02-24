<?php
// Connect to the database
$servername = "us-cdbr-east-06.cleardb.net";
$username = "b69582e5f21d76";
$password = "d51ada97";
$dbname = "heroku_73844ce018440f3";
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection 
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$onset = $_POST["onset"];
$course = $_POST["course"];
$laterality = $_POST["laterality"];

$sql = "INSERT INTO patient_info(onset, course, laterality)
        VALUES (?,?,?)";

$stmt = mysqli_stmt_init($conn);

if( ! mysqli_stmt_prepare($stmt, $sql)) {
  die(mysqli_error($conn));
}

mysqli_stmt_bind_param($stmt, "sss", $onset, $course, $laterality);

mysqli_stmt_execute($stmt);

echo "record saved";

mysqli_close($conn);

echo '<p><a href="javascript:history.go(-1)" title="Return to previous page">« Go back</a></p>';
?>