<?php

//Conectando com o banco de dados
$host = 'localhost'; 
$username = 'dias'; 
$password = 'O$ucessoetreinavel@01'; 
$database = 'todo_list'; 

// Estabelece a conexão
$conn = mysqli_connect($host, $username, $password, $database);

// Verifica se ocorreu algum erro na conexão
if (!$conn) {
    die('Erro na conexão com o banco de dados: ' . mysqli_connect_error());
}


?>
