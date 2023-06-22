<?php

include 'config.php';

$sql = "DELETE FROM task";
$result = mysqli_query($conn, $sql);

if ($result) {
    echo 1;

}else{
    echo "Error: {$sql}" . mysqli_error($conn);
}
?>