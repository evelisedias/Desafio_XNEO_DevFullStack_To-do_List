<?php
include 'config.php';

$sql = "SELECT * FROM tasks";
$result = mysqli_query($conn, $sql);

if (mysqli_num_rows($result) > 0) {
    while ($row = mysqli_fetch_assoc($result)) {
        $taskId = $row['id'];
        $taskText = $row['txt'];
?>
        <li>
            <p contenteditable="true" onkeypress="saveTask(event, <?php echo $taskId; ?>)">
                <?php echo $taskText; ?>
            </p>
            <button id="edit" class="edit" data-id="<?php echo $taskId; ?>">Editar</button>
            <button id="delete" class="delete" data-id="<?php echo $taskId; ?>">Excluir</button>
        </li>
<?php
    }
} else {
    echo "<div style='text-align:center;'>Ops, você ainda não tem tarefas.</div>";
}
?>

<script>
    function saveTask(event, taskId) {
        var taskTextElement = document.getElementById('task_' + taskId);
        var taskText = taskTextElement.innerText.trim();

        if (event.which === 13) {
            event.preventDefault();

            $.ajax({
                url: 'edit.php',
                type: 'POST',
                data: { id: taskId, txt: taskText },
                success: function(result) {
                    if (result === 'success') {
                        console.log('Tarefa atualizada com sucesso!');
                    } else {
                        console.log('Erro ao atualizar a tarefa');
                    }
                },
                error: function(xhr, status, error) {
                    console.log('Erro na requisição Ajax: ' + error);
                }
            });
        }
    }
</script>
