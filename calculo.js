//as funções servem para executar tarefas que são chamadas por algum gatilho, nesse caso é chamada quando clica no botão que está no html
//tudo que ta dentro da função é o que vai acontecer quando o botão que chama ela for clicado
function InscreverEstudante(){
    //armazena em uma variavel o valor que o usuário digitar na janela de prompt que aparece quando clica no botão

    let idadeDoEstudante  = prompt("Qual a idade do estudante?");
    let estudantesA = 0;
    let estudantesB = 0;
    
    if (14 == idadeDoEstudante == 15) {
        document.getElementById("idade do estudante").textContent = "Seu estudante é do time B";    
    }

    if (16 == idadeDoEstudante  == 17 ) {
        document.getElementById("idade do estudante").textContent = "Seu estudante é do time A";
    }

    else{
        document.getElementById("interessados").textContent = "o estudante é do time";     
    }
    parseInt()
}