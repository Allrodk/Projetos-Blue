const prompt = require("prompt-sync")({ sigint: true });
const opcoes = ["Pedra", "", "Tesoura", "", "", "Papel"];

console.clear();
let repetir = true;
while (repetir === true) {
  console.log("################################");
  console.log("########### JOKEMPÔ ############");
  console.log("################################");
  console.log("#### PEDRA ganha da TESOURA ####");
  console.log("#### TESOURA ganha do PAPEL ####");
  console.log("##### PAPEL ganha da PEDRA #####");
  console.log("################################\n");

  let rodadas;
  for (let i = 0; i < 1; i++) {
    rodadas = prompt("Escolha quantas rodadas deseja jogar: ");
    if (+rodadas !== parseInt(rodadas)) {
      i--;
    }
  }
  console.clear();

  let placar = [0, 0];
  for (let i = 1; i <= rodadas; i++) {
    console.log(`\nRodada ${i} de ${rodadas}.`);
    let usuario;
    for (let i = 0; i < 1; i++) {
      usuario = parseInt(prompt("Escolha Pedra(0), Papel(5) ou Tesoura(2): "));
      if (usuario !== 0 && usuario !== 2 && usuario !== 5) {
        i--;
      }
    }
    let computador = aleatorio(3);
    let resultado = jokempo(usuario, computador);
    if (resultado === 0) {
      console.log(
        `Derrota! ${opcoes[computador]} ganha de ${opcoes[usuario]}.`
      );
      placar[1]++;
    } else if (resultado == 1) {
      console.log(
        `Vitória! ${opcoes[usuario]} ganha de ${opcoes[computador]}.`
      );
      placar[0]++;
    } else {
      console.log(`Empate! ${opcoes[computador]} e ${opcoes[usuario]}.`);
    }
    console.log(`Você:       ${opcoes[usuario]}`);
    console.log(`Computador: ${opcoes[computador]}`);
  }
  console.log("\n################################");
  if (placar[0] === placar[1]) {
    console.log("Empate, não houve CAMPEÃO!");
  } else if (placar[0] > placar[1]) {
    console.log("Você é o grande CAMPEÃO!");
  } else {
    console.log("O computador é o grande CAMPEÃO!");
  }
  console.log("################################");
  console.log("\nPLACAR__________________________");
  console.log(`Você:        ${placar[0]}`);
  console.log(`Computador:  ${placar[1]}\n`);

  let denovo;
  for (let i = 0; i < 1; i++) {
    denovo = prompt("Deseja jogar novamente [S/N]?");
    if (denovo.toUpperCase() !== "S" && denovo.toUpperCase() !== "N") {
      i--;
    }
  }
  if (denovo.toUpperCase() === "N") {
    repetir = false;
  }
  console.clear();
}

function aleatorio(contador) {
  let escolha = Math.floor(Math.random() * contador);
  if (escolha === 0) {
    return 0;
  } else if (escolha === 1) {
    return 2;
  } else if (escolha === 2) {
    return 5;
  }
}

function jokempo(usuario, computador) {
  if (usuario === computador) {
    return "Empatou";
  } else if (usuario < computador) {
    if (usuario === 0 && computador === 5) {
      return 0;
    } else {
      return 1;
    }
  } else {
    if (usuario === 5 && computador === 0) {
      return 1;
    } else {
      return 0;
    }
  }
}
