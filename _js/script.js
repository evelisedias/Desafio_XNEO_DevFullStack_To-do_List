
//pegando informações da tarefa
function Criar(){
    var nome_tarefa = document.getElementById("taskName").value;
    var data = document.getElementById("date").value;

    var tarefa = nome_tarefa + " " + data;

    $.ajax({
        url: 'insert.php',
        type: 'post',
        data: {txt: tarefa},
        success: function(result){
            if (result == 1){
                tarefa = nome_tarefa + " " + data;

                alert("Tarefa Adicionada com sucesso!")
            } else {
                console.log(result);
            }
        }
    })

  }
  
    