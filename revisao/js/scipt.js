//revisão Prof Alex
// loop
  for(let i = 0; i < 10; i++){
    console.log('Iteração atual: ' + i);
    if(i==5){
        break;
    }
  }
  console.log('--- Segunda iteração break ---');
//segunda iteração usando break
  for(let i = 0; i < 10;){
    if(i==5){
        break;
    }
    console.log('Iteração atual: ' + i);
    i++;
  }
  console.log('--- Terceira iteração continue ---');
// terceira iteração usando continue
for(let i = 0; i < 10; i++){
    if(i==5){
        continue;
    }
    console.log('Iteração atual: ' + i);
  }
  console.log('--- Comparação == ---');
//operadores de comparação
let valor1 = 123; //tipo int
let valor2 = '123'; //tipo string
  
//comparando valor da variavel 
if(valor1 == valor2){
    console.log('Valor1 é igual Valor2');
}
console.log('--- Estritamente igual === ---');
//comparação estritamente igual === mesmo valor e tipo de dado
if(valor1 === valor2){
    console.log('Valor1 é estritamente igual Valor2?');
}

//explicação
console.log('Tipo Valor1: ' + typeof valor1);
console.log('Tipo Valor2: ' + typeof valor2);

//framework jQuery
//fica pra proxima
console.log('--- Função anonima ---');
//função anonima
//variavel add recebe funcao
 let add = function (a,b){
    return a + b;
 };

 let valor = add(4,5);
 console.log('O valor final é: ' + valor);

//tipo da variavel add
console.log('Tipo variavel add: ' + typeof add);
console.log('Conteudo da variavel add: ' + add);

console.log('--- Função anonima com .map ---');

let vet = [1,2,3,4,5,6];
console.log('--- vet original ---');
console.log(vet);
let vetDobrado = vet.map(function(x){
    return x * 2;
});
console.log('--- vet dobrado ---');
console.log(vetDobrado);


console.log('--- ArrowFunction ---');
//arrow function

let sum = (x, y) => x +y;

console.log(sum(10,15));
console.log('--- Ex: ArrowFunction ---');
let vet2 = [2,3,5,4,2,6,5];
//como função anonima
console.log('vet2 valores no array: ' + vet2);
let result1 = vet2.map(function (x){
    return x * 2;
});
console.log('result1 vet2 vs 2: ' + result1);
//como arroeFunction
let result2 = vet2.map( x => x * 3);
console.log('result2 vet2 vs 3: ' + result2);


//modules
/*export para exportar um modulo import para receber 
export do arquivo export.js
import {sum1} from './export.js';

let valorSoma = sum1(5,5);

console.log('Valor da sma: ' + valorSoma);*/
