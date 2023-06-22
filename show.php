<?php

include 'config.php';

$sql = "SELECT * FROM tasks";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
?>

<li><p><?php echo $row['txt']; ?></p>
<button id="edit" data-id="<?php echo $row['id']; ?>">Editar</button>
<button id="delete" data-id="<?php echo $row['id']; ?>">Excluir</button></li>
<?php } } else { echo "<div style='text-align:center; 'Ops, você ainda não tem tarefas.</div>"; } ?>