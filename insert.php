<?php
//incluindo db

include 'config.php';

$txt = $_POST ['txt'];

$sql = "INSERT INTO tasks (txt) VALUES ('$txt')";
$result = mysqli_query($conn, $sql);

if ($result) {
    echo 1;
} else {
    echo "Erro: {$sql}" . mysqli_error($conn);

}
?>