/*
1 Problema da soma
Faça um programa capaz de solicitar um número N (1<N<1000) do usuário e ler N
números inteiros. Após a leitura do último número deve-se informar:
• Na primeira linha a soma dos N números em decimal.
• Na segunda linha a soma em hexadecimal dos números pares informados.
• Na terceira linha a soma em octal dos números impares informados.
Assuma que todos os números fornecidos pelo usuário serão inteiros válidos e que as
somas nunca serão superiores a um número inteiro de 32 bits.
*/

// declaração de variáveis: 
let numero
let arrayNumeros = []
let auxiliar

// Entrada de dados: 
do{
   numero = parseInt(prompt(`Digite um número N, sendo N um número entre 1 e 1000: `));
} while (numero < 1 || numero > 1000)

// Números para manipulação
for(let i = 0; i < numero; i++){
  auxiliar = parseInt(prompt(`Digite um número: `))
  arrayNumeros[i] = (auxiliar)
}

// Saída 1: Soma dos números em decimal: 
auxiliar = 0
for(let i = 0; i < arrayNumeros.length; i++){
  auxiliar += arrayNumeros[i] 
}

console.log(`A soma dos números em decimal é: ${auxiliar}`)

// Saída 2: Soma dos números em Hexadecimal
// Soma dos números pares: 
auxiliar = 0
for(let i = 0; i < arrayNumeros.length; i++){
  if(arrayNumeros[i] % 2 == 0){
    auxiliar += arrayNumeros[i]
  }
}

console.log(`A soma dos números em Hexadecimal é: ${auxiliar.toString(16)}`)

// Saída 3: Soma dos números em Octal
// Soma dos números impares: 
auxiliar = 0
for(let i = 0; i < arrayNumeros.length; i++){
  if(arrayNumeros[i] % 2 != 0){
    auxiliar += arrayNumeros[i]
  }
}

console.log(`A soma dos números em Octal é: ${auxiliar.toString(8)}`)

