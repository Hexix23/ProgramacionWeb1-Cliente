//Declaracion funcion tradicional
function suma(){
    console.log(2 + 2);
}

suma();

//Declaracion funcion con parametros
function sumaParametros(sum1, sum2){
    return sum1+sum2;
}

let resultado = sumaParametros(4,5);
console.log(resultado);

//valores por defecto
function saludo(name = 'Helix'){
    console.log('Hello ' + name);
}
saludo();
saludo('Que pasa Guarros');

//Funciones anonimas
var resSaludo = function(name = 'Helix'){
    return 'Hello ' + name;
}
console.log(resSaludo());
console.log(resSaludo('Javi'));

//Funciones arrow
var resArrowSaludo = (name) => `Hello ${name}`
var resArrowDespedida = (name) => {
    return 'Bye ' + name;
}
console.log(resArrowSaludo('Helix'));
console.log(resArrowDespedida('Boyan'));

//Condicional tradicional vs ternario
const budget = 100;
if(budget >= 200){
    console.log('Me pillo un cripto Punk');
}else{
    console.log('No me lo compro');
}

let result = budget <= 200
    ? console.log('Me pillo el cripto Punk') //si esto se cumple {me lo compro}
    : console.log('No me lo compro'); //alternativa
