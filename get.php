<!DOCTYPE html>
<html>
<head>
	<title>Display Data</title>
</head>
<body>
	<h1>Display Data</h1>
	<table>
		<tr>
			<th>ID</th>
			<th>ONSET</th>
			<th>COURSE</th>
            <th>Laterality</th>
		</tr>
        <?php
            // Step 1: Connect to the database
            $servername = "us-cdbr-east-06.cleardb.net";
            $username = "b69582e5f21d76";
            $password = "d51ada97";
            $dbname = "heroku_73844ce018440f3";

            $conn = mysqli_connect($servername, $username, $password, $dbname);

            // Step 2: Execute the SQL query
            $sql = "SELECT id, onset, course, laterality FROM patient_info";
            $result = mysqli_query($conn, $sql);
            // Step 3: Fetch the data from the result set
            if (mysqli_num_rows($result) > 0) {
            while($row = mysqli_fetch_assoc($result)) {
                echo "id: " . $row["id"] . " - onset: " . $row["onset"] . " - course: " . $row["course"] . " - laterality: " . $row["laterality"] . "<br>";
            }
            } else {
            echo "0 results";
            }

            // Step 4: Close the database connection
            mysqli_close($conn);

            echo '<p><a href="javascript:history.go(-1)" title="Return to previous page">« Go back</a></p>';
        ?>
    </table>
</body>
</html>