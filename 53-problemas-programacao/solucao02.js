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