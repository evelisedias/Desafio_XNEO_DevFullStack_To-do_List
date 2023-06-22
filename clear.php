<?php

include 'config.php';

$sql = "DELETE FROM tasks";
$result = mysqli_query($conn, $sql);

if ($result && mysqli_affected_rows($conn) > 0) {
    echo 1;
} else {
    echo "Erro ao excluir as tarefas: " . mysqli_error($conn);
}
?>
