/*Projeto 03 - Dice Game

Crie um programa onde jogadores joguem um dado e tenham resultados aleatórios.
O programa tem que:

• Perguntar quantas rodadas você quer fazer; (1,0 ponto)
• Perguntar quantos jogadores vão jogar; (1,5 pontos)
• Criar um objeto pra cada jogador com nome e número tirado; (1,5 pontos)
• Guarda todos os objetos em uma lista; (2,0 pontos)
• Ordenar esses objetos, sabendo que o vencedor tirou o maior número
no dado. (2,0 pontos)
• Mostrar no final qual jogador ganhou mais rodadas e foi o grande
campeão. (2,0 pontos)*/

const prompt = require("prompt-sync")({ sigint: true });

console.log(`#############################`);
console.log("######### DICE GAME #########");
console.log("#############################\n");
let placar = [];
let vencedores = [];

let qtdeRodadas;
for (let i = 0; i < 1; i++) {
  qtdeRodadas = parseInt(prompt("Deseja jogar quantas rodadas? "));
  if (+qtdeRodadas !== parseInt(qtdeRodadas) || qtdeRodadas < 1) {
    i--;
  }
}

let qtdeJogadores;
for (let i = 0; i < 1; i++) {
  qtdeJogadores = parseInt(prompt("Quantidade de Jogadores: "));
  if (+qtdeJogadores !== parseInt(qtdeJogadores) || qtdeJogadores < 1) {
    i--;
  }
}

// Função para gerar número aleatório
function numAleatorio(max) {
  return Math.floor(Math.random() * max) + 1;
}

for (let h = 0; h < qtdeRodadas; h++) {
  for (let i = 0; i < qtdeJogadores; i++) {
    let jogador = "Jogador" + (i + 1);
    let nunSorteado = numAleatorio(6);
    placar.push({
      rodada: h + 1,
      nome: jogador,
      numero: nunSorteado,
    });
  }

  // Ordena os objetos da lista na rodada atual
  placar.sort((a, b) => {
    if (a.numero > b.numero) {
      return -1;
    } else {
      return true;
    }
  });

  // Seleciona o vencedor e adiciona na lista de vencedores
  let cont = 0;
  for (let i = 0; i < qtdeJogadores; i++) {
    // Verifica se houve empate
    if (placar[0].numero === placar[i].numero) {
      //Verifica se já existe na lista vencedores
      let existe = -1;
      for (let j = 0; j < vencedores.length; j++) {
        if (Object.values(vencedores[j]).includes(placar[i].nome)) {
          existe = j;
          break;
        }
      }
      // Inclui jogador na lista vencedores, caso não exista
      if (existe === -1) {
        vencedores.push({
          vencedor: placar[i].nome,
          vitorias: 1,
        });
      } else {
        vencedores[existe].vitorias++;
      }
      cont++;
    }
  }

  console.log();
  console.log(`\nPlacar da Rodada ${h + 1}:`);
  for (let i in placar) {
    console.log(`${placar[i].nome}:  ${placar[i].numero}`);
  }

  if (cont > 1) {
    console.log(`\nTemos ${cont} vencedores que tiraram ${placar[0].numero}: `);
    for (let i = 0; i < cont; i++) {
      console.log(`${placar[i].nome}`);
    }
  } else {
    console.log(
      `\nTemos ${cont} vencedor que tirou ${placar[0].numero}:\n${placar[0].nome}`
    );
  }

  if (h + 1 < qtdeRodadas) {
    prompt("\nPressione ENTER para próxima Rodada. ");
  } else {
    prompt("\nPressione ENTER para ver o placar Geral. ");
  }

  // Limpa a lista de placar a cada rodada
  placar = [];
}

// Ordena os vencedores por número de vitórias
vencedores.sort((a, b) => {
  if (a.vitorias > b.vitorias) {
    return -1;
  } else {
    return true;
  }
});

// Verifica se existe empate entre os vencedores
cont = 0;
for (let i = 0; i < vencedores.length; i++) {
  if (vencedores[0].vitorias === vencedores[i].vitorias) {
    cont++;
  }
}

console.log(`\n\n#############################`);
console.log(`####### Placar Geral ########`);
console.log(`#############################`);
for (let i in vencedores) {
  console.log(`${vencedores[i].vencedor}:  ${vencedores[i].vitorias} vitórias`);
}

console.log();
if (cont > 1) {
  console.log(`Temos ${cont} Grandes Campeões!!! `);
  for (let i = 0; i < cont; i++) {
    console.log(`${vencedores[i].vencedor}`);
  }
} else {
  console.log(`O grande Campeão é ${vencedores[0].vencedor}!!!`);
}
