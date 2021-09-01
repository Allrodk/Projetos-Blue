// Projeto 03 - Dice Game

// Crie um programa onde jogadores joguem um dado e tenham resultados aleatórios.
// O programa tem que:

// • Perguntar quantas rodadas você quer fazer; (1,0 ponto)
// • Perguntar quantos jogadores vão jogar; (1,5 pontos)
// • Criar um objeto pra cada jogador com nome e número tirado; (1,5 pontos)
// • Guarda todos os objetos em uma lista; (2,0 pontos)
// • Ordenar esses objetos, sabendo que o vencedor tirou o maior número
// no dado. (2,0 pontos)
// • Mostrar no final qual jogador ganhou mais rodadas e foi o grande
// campeão. (2,0 pontos)
const prompt = require("prompt-sync")({ sigint: true });

console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$");
console.log("$$$$$$$$$ DICE GAME $$$$$$$$$");
console.log("$$$$$$$$$$$$$$$$$$$$$$$$$$$$$\n");

let qtdeRodadas = prompt("Deseja jogar quantas rodadas?");
let qtdeJogadores = prompt("Quantidade de Jogadores: 2, 3, 4 ou 5?");
let placar = [];

let h;
for (h = 0; h < qtdeRodadas; h++) {
  placar.push([]);
  for (let i = 0; i < qtdeJogadores; i++) {
    let jogador = "Jogador" + (i + 1);
    let nunSorteado = Math.floor(Math.random() * 6) + 1;

    placar[h].push({
      rodada: h + 1,
      nome: jogador,
      numero: nunSorteado,
    });
  }
}
console.log(placar);

placar.sort(function (x, y) {
  if (x.rodada < y.rodada) {
    if (x.numero > y.numero) {
      return -1;
    }
  } else {
    if (x.numero < y.numero) {
      return true;
    }
  }
});

console.log(placar);
