const estudo = ['Front-End','Back-End'];
let area = prompt('Olá meu gafanhoto! Bem-vindo ao mundo da programação. Para continuar pode escolher uma area: Insira \n 1 = ' + estudo[0] + '\n 2 = ' + estudo[1]);
let tecnologia = [];

if (area == 1)
{
    tecnologia.push(estudo[0]);
    lang = prompt('Bem-vindo a Front-End! \nChegou o momento esperado! Chegou a hora de escolher o que você quer aprender. \n1 = React \n2 = Vue.');
    if (lang == 1)
        tecnologia.push('React');
    else
        tecnologia.push('Vue');
}
else
{
    tecnologia.push(estudo[1]);
    lang = prompt('Benvindo a Back-End! \nChegou o momento esperado! Chegou a hora de escolher o que você quer aprender. \n1 = C# \n2 = Java.');
    if (lang == 1)
        tecnologia.push('C#');
    else
        tecnologia.push('Java');
}

area = prompt('Quer continuar em ' + (tecnologia[0] ==  estudo[0] ? estudo[0] : estudo[1]) + ' ou quer mudar para ' + (tecnologia[0] ==  estudo[0] ? estudo[1] : estudo[0]) + ' e virar Full-Stack? \n1 = Continuar \n2 = Mudar');

if (area == 2){
    if (tecnologia[0] == estudo[0])
        tecnologia.push(estudo[1]);
    else
    tecnologia.push(estudo[0]);
}

let continuar = 1;

while (continuar == 1)
{
    if (((area == 1) && (tecnologia[0] == estudo[0])) || ((area == 2) && (tecnologia[0] == estudo[1])))
    {
        tecnologia.push(prompt('Qual das novas tecnologias do Front-End você quer aprender? '));
    }
    else
    {
        tecnologia.push(prompt('Qual das novas tecnologias do Back-End você quer aprender? '));
    }
    continuar = prompt('Quer continuar estudando?\n1 = SIM\n2 = NÃO')
}

let message = ('Parabens gafanhoto! Você tem boas metas: Voce quer aprender:\n')
for (const item of tecnologia){
    if ((item == estudo[0]) || (item == estudo[1]))
        message += '* ' + item + '.\n';
    else
        message += '- ' + item + '.\n';
}
message += '\nBons estudos e não desista, o limite é a sua imaginação.';
alert(message);
