let numeroUm = 1;
let stringUm = '1';
let numeroTrinta = 30;
let stringTrinta = '30';
let numeroDez = 10;
let stringDez = '10';

console.log('numeroUm = ' + numeroUm);
console.log('stringUm = ' + stringUm);
console.log('numeroDez = ' + numeroDez);
console.log('stringDez = ' + stringDez);
console.log('numeroTrinta = ' + numeroTrinta);
console.log('stringTrinta = ' + stringTrinta);

function um(numeroUm, stringUm)
{
    if ((numeroUm == stringUm) && (numeroUm !== stringUm)) {
        console.log('As variáveis numeroUm e stringUm tem o mesmo valor, mas tipos diferentes')
    } 
    else if (numeroUm === stringUm) {
        console.log('As variáveis numeroUm e stringUm tem o mesmo valor e mesmo tipo')
    }
        else if (typeof numeroUm == typeof stringUm) {
            console.log('As variáveis numeroUm e stringUm não tem o mesmo valor, mas o mesmo tipo')
        }
        else {
            console.log('As variáveis numeroUm e stringUm não tem o mesmo valor, nem o mesmo tipo')
        }
}

function trinta(numeroTrinta, stringTrinta)
{
    if (numeroTrinta === stringTrinta) {
        console.log('As variáveis numeroTrinta e stringTrinta tem o mesmo valor e mesmo tipo')
    }
    else {
        console.log('As variáveis numeroTrinta e stringTrinta não tem o mesmo tipo')
    }
}

function dez(numeroDez, stringDez)
{
    if ((numeroDez == stringDez) && (numeroDez !== stringDez)) {
        console.log('As variáveis numeroDez e stringDez tem o mesmo valor, mas tipos diferentes')
    } 
    else {
        console.log('As variáveis numeroDez e stringDez não tem o mesmo valor')
    }
}
