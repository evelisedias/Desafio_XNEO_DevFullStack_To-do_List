//Mostrando as tarefas
//Mostrando as tarefas
function showData(){
    $.ajax({
        url: 'show.php',
        type: 'post',
        success: function(result){
            $("#list").html(result);
        }
    });
}
showData();

//Contador de tarefas
function totalTask(){
    $.ajax({
        url: 'task.php',
        type: 'post',
        success: function(result){
            $("#total_task").html(result)
        }
    });
}
totalTask();

//Criando a tarefa e inserindo no db
function Criar(){
    var nome_tarefa = document.getElementById("taskName").value;
    var data = document.getElementById("date").value;

    var tarefa = nome_tarefa + " " + data;
    console.log(tarefa);

    $.ajax({
        url: 'insert.php',
        type: 'post',
        data: {txt: tarefa},
        success: function(result){
            if (result == 1){
                tarefa = nome_tarefa + " " + data;
                showData();
                totalTask();
            } else {
                console.log(result);
            }
        }
    })
}


$(document).on("click", "#delete", function(event){
    event.preventDefault(); // Evita o comportamento padrão do link
    id = $(this).data("id");
    element = $(this);

    $.ajax({
        url: 'delete.php',
        type: 'post',
        data: {id: id},
        success: function(result) {
            if (result == 1) {
                $(element).closest("li").fadeOut();
                showData();
                totalTask();
            } else {
                console.log(result);
            }
        }
    });
});


$(document).on("click", "#clear", function(event){
    event.preventDefault(); // Evita o comportamento padrão do link

    $.ajax({
        url: 'clear.php',
        type: 'post',
        success: function(result) {
            console.log(result);
            if (result == 1) {
                showData();
                totalTask();
            }
        }
    });
});


$(document).on("click", ".edit", function(event){
    event.preventDefault(); // Evita o comportamento padrão do link

    var taskid = $(this).data("id");
    var taskTextElement = $(this).siblings("p");
    var taskText = taskTextElement.text().trim();

    var newTaskText = prompt("Digite o novo texto da tarefa:", taskText);
    if(newTaskText !== null){
        $.ajax({
            url: 'edit.php',
            type: 'post',
            data: {id: taskid, txt: newTaskText},
            success: function(result){
                console.log(result); // Adicione esta linha para depurar
                if (result === 'success'){
                    taskTextElement.text(newTaskText);
                    showData(); // Atualiza a lista de tarefas
                    totalTask();
                } else {
                    alert('Erro ao atualizar a tarefa');
                    }
                },
                error: function(xhr, status, error){
                    console.log('Erro na requisição ajax: ' + error);
                }
            });
        }
    });

