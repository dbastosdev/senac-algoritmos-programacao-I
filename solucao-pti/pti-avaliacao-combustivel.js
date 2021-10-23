// Função que avalia combustível:
function calculadora(precoAlcool, precoGasolina){
    let razaoCombustivel = (precoAlcool / precoGasolina).toFixed(2);
    if(razaoCombustivel < 0.7){
        return console.log(`\nA relação entre álcool e gasolina é de ${razaoCombustivel}. Economize abastecendo com álcool.\n`);
    } else if(razaoCombustivel == 0.7){
            return console.log(`\nA relação entre álcool e gasolina é de ${razaoCombustivel}. É indiferente o combustível utilizado.\n`);
    }else {
        return console.log(`\nA relação entre álcool e gasolina é de ${razaoCombustivel}. Economize abastecendo com gasolina.\n`);
    }
}

// Variável global:
let sair = false;

// Início da aplicação e loop: 
console.log(`Seja bem vindo ao programa de avaliação do custo do combustível.\n\n `);

while(sair == false){
  let custoAlcool = parseFloat(prompt(`Digite o preço do litro do álcool: `));
  let custoGasolina = parseFloat(prompt(`Digite o preço do litro da gasolina:`));
  calculadora(custoAlcool, custoGasolina);

  opcao = prompt(`Deseja realizar um novo cálculo? [1] Novo Cálculo e [2] Encerrar programa \n`);
  (opcao == '2')? sair = true : console.log(`Realize um novo cálculo \n`);
        
}

console.log(`Obrigado por utilizar essa aplicação`);