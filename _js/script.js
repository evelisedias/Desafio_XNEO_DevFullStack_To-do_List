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

    var tarefa = nome_tarefa + data;
    console.log(tarefa);

    $.ajax({
        url: 'insert.php',
        type: 'post',
        data: {txt: tarefa},
        success: function(result){
            if (result == 1){
                tarefa = nome_tarefa + " Dia: (" + data + ")";

                alert("Tarefa Adicionada com sucesso!")
                showData();
                totalTask();
            } else {
                console.log(result);
            }
        }
    })

    $(document).on("click", "#delete", function(){
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
            }
          }
        });
      });
    

    $(document).on("click", "#clear", function(){
        $.ajax({
            url: 'clear.php',
            type: 'post',
            success: function(result){
                if(result == 1){
                    showData();
                    totalTask();  
                }
            }
        })
    })
    

  }
