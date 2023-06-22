<?php
include 'config.php';

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $taskId = $_POST['id'];
    $taskText = $_POST['txt'];

    $sql = "UPDATE tasks SET txt = '$taskText' WHERE id = $taskId";
    $result = mysqli_query($conn, $sql);

    if ($result) {
        echo 'success';
        
    } else {
        echo 'error';
    }
}
?>
