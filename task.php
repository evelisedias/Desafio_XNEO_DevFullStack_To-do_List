<?php
    include 'config.php';

    $sql = "SELECT * FROM tasks";
    $result = mysqli_query($conn, $sql);

    $count = mysqli_num_rows($result);
?>

Total de Tarefas <span><?php echo $count;?></span>