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
            $servername = "localhost:3307";
            $username = "root";
            $password = "";
            $dbname = "uveitis";

            $conn = mysqli_connect($servername, $username, $password, $dbname);

            // Step 2: Execute the SQL query
            $sql = "SELECT id, onset, course, laterality FROM patient_info";
            $result = mysqli_query($conn, $sql);
            var_dump (mysqli_fetch_assoc($result));
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
        ?>
    </table>
</body>
</html>