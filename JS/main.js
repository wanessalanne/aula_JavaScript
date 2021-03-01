//Variáveis
var boasVindas = "Bem vindo"
var frase = "ao meu primeiro curso de programação com Javascript."
var frase2 = "Me chamo Wanessa Lanne e isso é um teste ;D"
var nome = prompt("Olá, Qual o seu nome? =>.<=")
var d = new Date();
alert(boasVindas + " ao " + "meu primeiro Js!");
//Console
console.log(boasVindas.toUpperCase());
console.log(frase);
console.log(frase2);
console.log(d);
//função
function clicou(){
    document.getElementById("agradecimento").innerHTML = "Você é FODA!";
    console.log(document.getElementById("agradecimento"));
    alert("Obrigado por clicar!");
}
