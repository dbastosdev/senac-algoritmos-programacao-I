// Tabela da grade de notas - [Nome, média e situação]
let gradeNotas = [['Disciplina', 'Média', 'Situação']];
let posicaoGrade = 1;


// Atualiza grade de notas: 
function atualizaGradeNotas(){
    let html = '';
    for(let i = 0; i < gradeNotas.length; i++){
        html += `<tr>`;
        for(let j = 0; j < gradeNotas[i].length; j++){
            if(i == 0){
                html += `<td class="titulo">${gradeNotas[i][j]}</td>`;
            }else{
                html += `<td>${gradeNotas[i][j]}</td>`;
            }
        }
        html += `</tr>`;
    }
    document.querySelector('#tabela').innerHTML = html;
    
}

// Cria disciplina:
function criaDisciplina(edicao = 0){
    let arrayDisciplina = [];
    let nomeDisciplina = prompt("Digite os dados de uma nova disciplina: ");
    let campo = 0;
    let quantidadeNotas = parseInt(prompt("Digite a quantidade de notas que que serão lançadas: "));
    let nota = 0;
    let peso = 0;
    let media = 0;
    let totalPeso = 0;
    arrayDisciplina[0] = nomeDisciplina;
    for(let i = 1; i <= quantidadeNotas; i++){
        nota = parseFloat(prompt(`Digite a ${i}º nota`));
        peso = parseInt(prompt(`Digite o peso da ${i}º nota`));
        totalPeso += peso;
        media += peso * nota;
    }
    media = (media / totalPeso).toFixed(2);
    arrayDisciplina[1] = media;
    if(media >= 7){
        arrayDisciplina[2] = 'APROVADO';
    }else{
        arrayDisciplina[2] = 'REPROVADO';
    }
    gradeNotas[posicaoGrade] = arrayDisciplina;
    posicaoGrade++;
}


// Atualiza disciplina:
function atualizarDisciplina(){
    //deletarDisciplina();
    //criaDisciplina();
    let disciplina = prompt("Digite o nome da disciplina a ser editada: ");
    for (let i = 0; i < gradeNotas.length; i++){
        if(gradeNotas[i][0] == disciplina){
            let quantidadeNotas = parseInt(prompt("Digite a quantidade de notas que que serão lançadas: "));
            let nota = 0;
            let peso = 0;
            let media = 0;
            let totalPeso = 0;
            for(let i = 1; i <= quantidadeNotas; i++){
                nota = parseFloat(prompt(`Digite a ${i}º nota`));
                peso = parseInt(prompt(`Digite o peso da ${i}º nota`));
                totalPeso += peso;
                media += peso * nota;
            }
            media = (media / totalPeso).toFixed(2);
            gradeNotas[i][1] = media;
            if(media >= 7){
                gradeNotas[i][2] = 'APROVADO';
            }else{
                gradeNotas[i][2] = 'REPROVADO';
            }
            break;
        }
    }
}

// Deleta disciplina:
function deletarDisciplina(editar = 0){
    let disciplina = prompt("Digite o nome da disciplina a ser excluída / editada");
    for (let i = 0; i < gradeNotas.length; i++){
        if(gradeNotas[i][0] == disciplina){
            //gradeNotas.splice(i, 1);
            gradeNotas[i] = "";
            console.log(gradeNotas);
            break;
        }
    }
}

// Botões
const botaoGrade = document.querySelector('#atualizar');
botaoGrade.addEventListener('click',atualizaGradeNotas);

const botaoCriar = document.querySelector('#criar');
botaoCriar.addEventListener('click',criaDisciplina);

const botaoEditar = document.querySelector('#editar');
botaoEditar.addEventListener('click',atualizarDisciplina);

const botaoDeletar = document.querySelector('#deletar');
botaoDeletar.addEventListener('click',deletarDisciplina);