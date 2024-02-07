let nome = prompt('Olá! Insira o seu nome para continuar');
let idade = prompt('Por favor Insira a sua idade');
let lang1 = prompt('Qual a linguagem de programação que você esta estudando?');

alert ('Bem-vindo '+ nome + ' você tem ' + idade + ' anos e esta estudando ' + lang1);

let opcao = prompt('Está gostando de estudar ' + lang1 + '? Responda 1 para SIM ou 2 para NÃO');
if (opcao == 1) 
{
    alert ('Muito bom ' + nome + '! Continue estudando e você terá muito sucesso.');
}
else 
{
    opcao = prompt('Já tentou aprender uma outa linguagem? Responda 1 para SIM ou 2 para NÃO');
    if (opcao == 1){
        lang2 = prompt('Qual?');
        alert('Muito bom! Boa sorte em seus estudos de ' + lang1 + ' e ' + lang2);
    }
    else
        alert('Show ' + nome + '! Boa sorte em seus estudos de ' + lang1);
}
