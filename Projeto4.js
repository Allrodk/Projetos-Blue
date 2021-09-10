/*Criar um programa que simule uma votação com todo o conteúdo visto no módulo até este momento.

O programa tem que:

Receber votos até que o usuário diga que não tem mais ninguém para votar; (1,0 ponto)
Ter uma função chamada autorizaVoto(anoNascimento) retornando: "Negado`, "Opcional"  ou "Obrigatório"; (2,0 pontos)
Ter uma função chamada votacao(autorizacao, voto) que valida  e contabiliza o voto (número entre 1 e 5) ou retorna a mensagem: "Você não pode votar", caso o voto não possa ser contabilizado; (2,0 pontos) 
Contabilizar os votos de acordo com os significados (3,0 pontos):
1 = Candidato 1
2 = Candidato 2
3 = Candidato 3
4 = Voto Nulo`
5 = Voto em Branco
Ter uma função chamada exibirResultados() que deve mostrar: (2,0 pontos)
 - O total de votos para cada candidato 
 - O total de votos nulos
 - O total de votos em branco
 - Qual candidato venceu a votação
*/
const prompt = require("prompt-sync")({ sigint: true });
const anoAtual = new Date().getFullYear();

// Função que define, obrigatoriedade ou não, do voto
function autorizaVoto(anoNascimento) {
  const idade = anoAtual - anoNascimento;
  if (idade >= 18 && idade <= 70) {
    return "Obrigatório";
  } else if ((idade >= 16 && idade < 18) || idade > 70) {
    return "Opcional";
  } else {
    return "Negado";
  }
}

// Função que valida e contabiliza o voto
function votacao(autorizacao, voto) {
  if (autorizacao != "Negado") {
    for (let i = 1; i <= regVoto.length; i++) {
      if (voto === i) {
        regVoto[i - 1].qtdVotos++;
      }
    }
  } else {
    return "Você não pode votar";
  }
}

// Função para exibir o resultado da votação
function exibirResultados() {
  console.log(`\n\n--- Resultado da Votação ---\n`);
  for (let i in regVoto) {
    console.log(`   ${regVoto[i].nome}: ${regVoto[i].qtdVotos}`);
  }
  ordena(regVoto, 1);
  // Verifica se houve empate
  let empate = 0;
  for (let i = 0; i < regVoto.length - 2; i++) {
    if (regVoto[0].qtdVotos === regVoto[i].qtdVotos) {
      empate++;
    }
  }
  if (empate === 1) {
    return `\nO ${regVoto[0].nome.trim()} venceu a eleição.`;
  } else {
    let empatados = "";
    for (let i = 0; i < empate; i++) {
      empatados += `${regVoto[i].nome.trim()}\n   `;
    }
    return `\nOs candidatos abaixo empataram a Eleição:\n   ${empatados}`;
  }
}

// Função com as opções de candidatos
function candidatos() {
  console.log(`  
--- Opções de Voto ---

    1 = ${regVoto[0].nome}
    2 = ${regVoto[1].nome}
    3 = ${regVoto[2].nome}
    4 = ${regVoto[3].nome}
    5 = ${regVoto[4].nome}
    `);
}

// Função para ordenar os objetos dentro de uma lista (excluindo os 2 últimos)
function ordena(objeto, prop) {
  for (let i = 0; i < objeto.length - 2; i++) {
    for (let j = i + 1; j < objeto.length - 2; j++) {
      if (Object.values(objeto[j])[prop] > Object.values(objeto[i])[prop]) {
        objeto.splice(i, 0, objeto[j]);
        objeto.splice(j + 1, 1);
      }
    }
  }
}

// Objeto para armazenar a contagem de votos
const regVoto = [
  { nome: "Candidato1    ", qtdVotos: 0 },
  { nome: "Candidato2    ", qtdVotos: 0 },
  { nome: "Candidato3    ", qtdVotos: 0 },
  { nome: "Voto Nulo     ", qtdVotos: 0 },
  { nome: "Voto em Branco", qtdVotos: 0 },
];

// Laço de repetição até que não haja ninguém mais para votar
let repete = true;
while (repete == true) {
  console.clear();

  // Recebe o ano de nascimento se idade == número e idade < 150 anos
  let anoNascimento = parseInt(anoAtual);
  for (let i = 0; i < 1; i++) {
    anoNascimento = parseInt(prompt("Digite o ano do seu nascimento: "));
    if (
      +anoNascimento !== parseInt(anoNascimento) ||
      anoNascimento >= anoAtual ||
      anoAtual - anoNascimento > 150
    ) {
      console.log("Ano de nascimento inválido");
      i--;
    } else {
      console.log(`\nVoto: ${autorizaVoto(anoNascimento)}`);
    }
  }

  // Verifica se o eleitor está autorizado a votar
  let voto = 0;
  if (autorizaVoto(anoNascimento) != "Negado") {
    candidatos();
    for (let i = 0; i < 1; i++) {
      voto = parseInt(prompt("Escolha sua opção: "));
      if (+voto !== parseInt(voto) || voto < 1 || voto > 5) {
        console.log("Opção inválida.");
        i--;
      }
    }
  }

  // Chama a função votacao() e exibe a mensagem caso retorne alguma informação
  let valida = votacao(autorizaVoto(anoNascimento), voto);
  if (valida) {
    console.log(`\n${valida}`);
  }

  // Verifica se tem alguém mais para votar apenas com [S/N]
  let proximoVoto;
  for (let i = 0; i < 1; i++) {
    proximoVoto = prompt(
      "\nVoto concluído, tem mais alguém para votar [S/N]? "
    );
    if (
      proximoVoto.toLocaleUpperCase() != "N" &&
      proximoVoto.toLocaleUpperCase() != "S"
    ) {
      i--;
    }
  }

  if (proximoVoto.toLocaleUpperCase() == "N") {
    repete = false;
  }
}

console.log(exibirResultados());
