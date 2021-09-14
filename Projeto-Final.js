// Escopo do projeto
// Crie um jogo de ficção interativa que simule a rotina diária de um personagem. Você pode escolher entre rotinas matinais, rotinas de trabalho, rotinas de estudos, entre outras. A ideia do jogo é que o jogador faça as escolhas para o seu personagem e o conduza durante o seu dia.
// Cada escolha irá gerar uma consequência diferente para o seu personagem. O jogo acaba quando o dia do seu personagem acabar. Você será responsável por determinar o inicio e término do dia do seu personagem, além de avançar o tempo a cada escolha.
// É obrigatório o uso de orientação a objetos e herança, funções, laços (while/for) e condicionais (if, elif, else), ou seja todo o conteúdo visto durante o módulo.
// Use toda sua criatividade para desenvolver uma história interessante e seja bem específico com relação as escolhas que precisam ser feitas, para que seu jogo seja divertido!
// Os codelabs 19 (09/09) e 22 (14/09) serão destinados para desenvolvimento do projeto.
// O jogo deverá ser entregue no dia 15/09/2021 até as 18:59, ou seja, antes do inicio da aula.

const prompt = require("prompt-sync")({ sigint: true });

class Personagem {
  constructor(nome, idade, profissao) {
    this.nome = nome;
    this.idade = idade;
    this.profissao = profissao;
  }
  acordar() {
    console.log("Thomas acorda com o som do despertador...");
  }
  desligarDespertador() {
    return "Desligou o despertador";
  }
  levantar() {
    return "Levantou";
  }
  soneca() {
    return "Dormiu mais 30 minutos";
  }
  advertencia() {
    return "Sr. Thomas, você tem um sério problema com horários. Vou dar-lhe 2 opções, ou o Sr. começa a entrar no horário daqui pra frente, ou é melhor procurar outra Companhia.";
  }
  trabalhar() {
    return "Foi para sua mesa trabalhar";
  }
  telefonema() {
    return "Recebeu um telefonema de Morpheu";
  }
  subirAndaime() {
    return "Concordou em subir pelo andaime";
  }
  escapar() {
    return "Conseguiu subir o andaime rapidamente ao andar superior e escapou pela escada de incêndio";
  }
  morrer() {
    "Foi baleado pela polícia, despencou do andaime e morreu";
  }
  render() {
    "Não subiu o andaime e foi detido pelos agentes";
  }
}

class Cenario {
  constructor(ambiente) {
    this.ambiente = ambiente;
  }
}

let reiniciar = true;
while (reiniciar == true) {
  // Instanciando caasa
  const casa = new Cenario("");

  // Instanciando thomas
  const thomas = new Personagem("Thomas", 37, "programador");
  console.log(thomas);

  // Instanciando Chefe
  const chefe = new Personagem("Chefe", 45, "Coordenador");
  console.log(chefe);

  thomas.acordar();

  // Pergunta 1
  let pergunta;
  pergunta = prompt(
    "Hey Thomas, está na hora de ir pra o trabalho, porém ainda parece cansado. Prefere dormir mais um pouquinho [S/N]?"
  ).toUpperCase();
  if (pergunta == "N") {
    console.log(
      `${thomas.desligarDespertador()} e ${thomas.levantar().toLowerCase()}.`
    );
  } else {
    console.log(
      `${thomas.desligarDespertador()} e ${thomas.soneca().toLowerCase()}.`
    );
  }

  // Chegando ao trabalho
  if (pergunta == "S") {
    console.log(`${chefe.advertencia()}.`);
  }

  // Pergunta 2
  pergunta = prompt(
    "Hey Thomas, está na hora de ir pra o trabalho, porém ainda parece cansado. Prefere dormir mais um pouquinho [S/N]?"
  ).toUpperCase();
  if (pergunta == "N") {
    console.log(
      `${thomas.desligarDespertador()} e ${thomas.levantar().toLowerCase()}.`
    );
  } else {
    console.log(
      `${thomas.desligarDespertador()} e ${thomas.soneca().toLowerCase()}.`
    );
  }

  // Pergunta para reiniciar o jogo
  pergunta = prompt(
    "O jogo acabou, deseja jogar novamente [S/N]?"
  ).toUpperCase();
  if (pergunta == "N") {
    reiniciar = false;
  }
}
