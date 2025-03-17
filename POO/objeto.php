<?php
$aluno = [
    // Propiedades do objeto
    "nome" => "Pedro" ,
    "idade" => 15,

    // Método do objeto
    "estudar" => function() use (&$aluno){
        echo "{$aluno['nome']} está estudando";
    }
];

$aluno['estudar']()
?>