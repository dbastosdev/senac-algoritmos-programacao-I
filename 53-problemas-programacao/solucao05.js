/*
5 Problema da conjectura de Goldbach
A conjectura de Goldbach (ainda não provada) diz que qualquer número par maior ou igual a 4 é a soma de dois números primos.

Faça um programa que, recebendo um número P par (2<=P<=4294967294), seja capaz de retornar dois número inteiros correspondentes aos dois números primos cuja soma seja igual ao número par P.

Considere que:
• Os valores de saída devem ser ordenados em ordem crescente.
• Existindo mais de uma combinação possível, retorna-se aquela cujo primeiro valor seja o menor.
• Não existindo valores (parabéns! você foi o primeiro no mundo que provou que a conjectura é falsa!) retorne -1.

Lembre-se: número primo é todo número inteiro maior que 1 que somente é divisível por si próprio e pela unidade
*/

// Avaliação da entrada de dados: 
let sair = false
let p
do{
  p = parseInt(prompt("Digite um número entre 2 e 4294967294: "))
  if(p>=2 && p<= 4294967294){ // avalia range
    if(p%2 == 0 && p > 4){ // avalia se número é par e maior que 4
      sair = true
    }
  }
}while(!sair)

// Determinação dos números de 2 a p
let n = []
for(let i = 2; i < p; i++){
  n.push(i)
}

console.log(`Números menores que p: ${n}`)

// Filtrando os números primos
let primos = []
for(let i = 0; i < p -1; i++){
  if(n[i] == 2){
    primos.push(n[i])
  }
  if(n[i]%1 == 0 && n[i]%n[i] == 0 && !(n[i]%2 == 0)){ // Avalia se número é primo
    primos.push(n[i])
  }
}

console.log(`Números primos menores que p: ${primos}`)

// Algoritmo de soma dos numeros primos anteriores ao número p
let somaLinear = 0
let somaNumero = 0
let somaTotal = 0
let n1 = 0
let n2 = 0
let flag = false

for(let i = 0; i < primos.length; i++){
  soma = n[i] + n[i+1]
  somaNumero = primos[i]*2
  if(soma == p){
    n1 = primos[i]
    n2 = primos[i+1]
    console.log(`Os numeros primos da soma de p = ${p} = ${n1} + ${n2}`)
    break
  } else if(somaNumero == p){
      n1 = primos[i]
      console.log(`Os numeros primos da soma de p = ${p} = ${n1} x 2`)
      break
    } else {
      for(let j=0; j < primos.length; j++){
        somaTotal = primos[i] + primos[j]
        if(somaTotal == p){
          n1 = primos[i]
          n2 = primos[j]
          console.log(`Os numeros primos da soma de p = ${p} = ${n1} + ${n2}`)
          flag = true
          break
        }
      }
      if(flag){
        break
      }
    }
}
