// declaração de variáveis: 
let numeroHex

// Entrada de dados e conversão de base 
numeroHex = prompt(`Digite um número em hexadecimal: `)
numeroDec = parseInt(numeroHex, 16)
numeroDec = numeroDec.toString()

// Avaliando número: 
let matrizBase = []
let matrizComparacao = []

for(let i = 0; i < numeroDec.length; i++){
  matrizBase[i] = numeroDec[i]
}

console.log(`Leitura normal: ${matrizBase}`)

let j = 0
for(let i = numeroDec.length - 1; i >= 0; i--){
  matrizComparacao[j] = numeroDec[i]
  ++j
}

console.log(`Leitura trás para frente: ${matrizComparacao}`)
let flag = 0
// Comparação entre números
for(let i = 0; i < matrizBase.length; i++){
  if(matrizBase[i] != matrizComparacao[i]){
    flag = 1
    break
  }
}

if(flag == 0){
  console.log(`número em decimal é lido exatamente da mesma forma seja de frente para trás ou de trás para frente.`)
} else {
  console.log(`Número é lido de formas diferentes de frente para trás ou de trás para frente`)
}