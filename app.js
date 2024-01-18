alert('Boas vindas ao nosso site!');
let numeroDeVendas = 50;
let saldoDisponivel = 1000;
alert('Erro! Preencha todos os campos');
let mensagemDeErro = "Erro! Preencha tudo certo";
alert(mensagemDeErro)

let nome = prompt("Coloque seu nome aqui");
let idade = prompt("escreva aqui sua idade");
if(idade >= 18) {
    alert(nome + ", Pode tirara habilitação");
}
if(idade <= 17) {
    alert(nome + ", Volte quando ficar adulto")
}