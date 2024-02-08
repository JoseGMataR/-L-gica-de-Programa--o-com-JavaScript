const numero = Math.floor(Math.random() * 10);
let opcao = 0;
for (i = 0; i < 3; i++)
{
    if (i == 0)
    {
        do {
            opcao = prompt('Adivinhe um numero entre 0 e 10, você conta com 3 tentativas. ' + (i+1) + '/3');
        } while (!/^(\d+)$/.test(opcao) || parseInt(opcao) >= 11 );
    }
    else
    {
        do {
            opcao = prompt('Você errou, ainda tem ' + (3-i)  + ( (3-i) ==  1 ? ' tentativa. ' : ' tentativas. ') + (i+1) + '/3');
        } while (!/^(\d+)$/.test(opcao) || parseInt(opcao) >= 11 );
    }

    if (opcao == numero)
    {
        do{
            opcao = prompt('Parabens! Você acertou, o numero é ' + numero + '. Quer jogar de novo?\n1 = SIM\n2 = NÃO');
        } while (!/^(\d+)$/.test(opcao) || parseInt(opcao) >= 3 || parseInt(opcao) == 0);
        break;  
    }
    else if (i == 2)
    {
        do{
            opcao = prompt('Sinto muito, o numero é ' + numero + '. Quer jogar de novo?\n1 = SIM\n2 = NÃO');
        } while (!/^(\d+)$/.test(opcao) || parseInt(opcao) >= 3 || parseInt(opcao) == 0);
        break;
    }       
}

if (opcao == 1)
    location.reload();
