/*
2 Problema da média
Faça um programa capaz de solicitar um número inteiro N (1<N<1000) do usuário e ler N
números inteiros. Ao final da leitura do último número, o programa deverá informar, com
uma casa decimal, a média aritmética entre os N números que estejam contidos no
intervalo fechado entre -1000 e 1000.
Assuma que todos os números fornecidos pelo usuário serão inteiros válidos e que a
soma de todos os N nunca será superior a um número inteiro de 32 bits.  
*/


// declaração de variáveis: 
let numero
let auxiliar = 0
let contador = 0
let arrayNumeros = []

// Entrada de dados: 
do{
   numero = parseInt(prompt(`Digite um número N, sendo N um número entre 1 e 1000: `));
} while (numero < 1 || numero > 1000)

// Números para manipulação
for(let i = 0; i < numero; i++){
  auxiliar = parseInt(prompt(`Digite um número: `))
  if(!(auxiliar > 1000 || auxiliar < -1000)){
    arrayNumeros.push(auxiliar)
    contador++
  }
  
}

// Soma  
auxiliar = 0
for(let i = 0; i < arrayNumeros.length; i++){
  auxiliar += arrayNumeros[i] 
}

let media = (auxiliar / contador).toFixed(1)
console.log(media)