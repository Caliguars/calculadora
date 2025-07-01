var numero;
var numeroantigo;
var escolha, resultado;
function adicionarNaTela(numero){
    document.getElementById("tela").value += numero;
}
function limpartela(){
    document.getElementById("tela").value = "";
}
function operacao(opc){
    escolha = opc;
    if(opc == 1){
        numeroantigo = parseFloat(document.getElementById("tela").value);
        limpartela()
        //document.getElementById("tela").value += numero;

    }
    if(opc == 2){
        numeroantigo = parseFloat(document.getElementById("tela").value);
        limpartela()
        //document.getElementById("tela").value += numero;

    }
    if(opc == 3){
        numeroantigo = parseFloat(document.getElementById("tela").value);
        limpartela()
        //document.getElementById("tela").value += numero;

    }
    if(opc == 4){
        numeroantigo = parseFloat(document.getElementById("tela").value);
        limpartela()
        //document.getElementById("tela").value += numero;

    }
}
function limpa(){
    limpartela();
    numero = null;
    numeroantigo = null;
    escolha = null;
    resultado = null;
    opc = null;
}
function igual(){
    if(escolha == 1){
        numero = parseFloat(document.getElementById("tela").value);
        limpartela()
        document.getElementById("tela").value = numeroantigo + numero;
    }
    if(escolha == 2){
        numero = parseFloat(document.getElementById("tela").value);
        limpartela()
        document.getElementById("tela").value = numeroantigo - numero;
    }
    if(escolha == 3){
        numero = parseFloat(document.getElementById("tela").value);
        limpartela()
        document.getElementById("tela").value = numeroantigo * numero;
    }
    if(escolha == 4){
        numero = parseFloat(document.getElementById("tela").value);
        limpartela()
        document.getElementById("tela").value = numeroantigo / numero;
    }

}
