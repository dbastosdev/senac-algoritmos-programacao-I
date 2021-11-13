/*
4 Problema da sequência de Fibonacci
A sequência de Fibonacci é construída de forma que cada termo é obtido pela soma dos
dois termos anteriores. Por exemplo: 0, 1, 1, 2, 3, 5, 8, 13.
Faça um programa capaz de solicitar um número inteiro N (1<=N<=40) e informar os N
primeiros elementos (um elemento por linha) da sequência de Fibonacci a partir do zero e
com o segundo elemento 1. 
*/

// declaração de variáveis: 
let n0 = 0
let n1 = 1
let saida = 0
let quantidade = 0

// entrada do usuário
do {
quantidade = parseInt(prompt("Digite um valor entre 1 e 40"))
} while(quantidade > 40 || quantidade < 1)


if(quantidade == 1){
  console.log(saida);
}else{
  for(let i=0; i < quantidade; i++){
    if(i == 0){
      console.log(n0)
    } else if(i == 1){
      console.log(n1)
    } else {
      saida = n0 + n1
      console.log(saida)
      n0 = n1
      n1 = saida
    }
  }
}