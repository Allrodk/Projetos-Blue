// Escopo do projeto
// Crie um jogo de ficção interativa que simule a rotina diária de um personagem. Você pode escolher entre rotinas matinais, rotinas de trabalho, rotinas de estudos, entre outras. A ideia do jogo é que o jogador faça as escolhas para o seu personagem e o conduza durante o seu dia.
// Cada escolha irá gerar uma consequência diferente para o seu personagem. O jogo acaba quando o dia do seu personagem acabar. Você será responsável por determinar o inicio e término do dia do seu personagem, além de avançar o tempo a cada escolha.
// É obrigatório o uso de orientação a objetos e herança, funções, laços (while/for) e condicionais (if, elif, else), ou seja todo o conteúdo visto durante o módulo.
// Use toda sua criatividade para desenvolver uma história interessante e seja bem específico com relação as escolhas que precisam ser feitas, para que seu jogo seja divertido!
// Os codelabs 19 (09/09) e 22 (14/09) serão destinados para desenvolvimento do projeto.
// O jogo deverá ser entregue no dia 15/09/2021 até as 18:59, ou seja, antes do inicio da aula.

const prompt = require("prompt-sync")({ sigint: true });

class Personagem {
  constructor(nome) {
    this.nome = nome;
  }
}

class Agente extends Personagem {
  constructor(nome, funcao, versao) {
    super(nome);
    this.funcao = funcao;
    this.versao = versao;
  }
}

class Humano extends Personagem {
  constructor(nome, idade, profissao) {
    super(nome);
    this.idade = idade;
    this.profissao = profissao;
  }
  acordar() {
    return "Thomas acorda com o som do despertador...";
  }
  desligarDespertador() {
    return "Deixa eu desligar esse despertador";
  }
  levantar() {
    return "Levantar";
  }
  soneca() {
    return "Outra, estou tão cansado, vou dormir mais uns 30 minutos";
  }
  advertencia() {
    return "Sr. Anderson, você tem um sério problema com horários. Vou dar-lhe 2 opções, ou o Sr. começa a entrar no horário daqui em diante, ou é melhor procurar outra Companhia.";
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
    return "Conseguiu subir o andaime rapidamente ao andar superior e escapou pela escada de incêndio do outro lado do prédio";
  }
  morrer() {
    return "Foi alvejado por uma das balas, então se desequilibrou, despencou do andaime e caiu na calçada.";
  }
  render() {
    return "Não subiu o andaime e foi detido pelos agentes";
  }
  cooperar() {
    return "Concordou em cooperar com os agentes para no dia seguinte emboscarem Morpheo";
  }
  recusar() {
    return "Recusou-se a cooperar";
  }
  seguirCoelho() {
    return "Foi até a Casa Noturna seguindo o Coelho Branco. teve uma breve conversa com Trinity, voltou pra casa e foi dormir";
  }
  dormir() {
    return "Decidiu ficar em casa e dormir";
  }
}

// Dicionário de perguntas
const pergunta = {
  dormir:
    "Hey Thomas, está na hora de ir pra o trabalho, porém ainda parece cansado. Prefere dormir mais um pouquinho [S/N]?",
  andaime:
    "Se subir pelo andaime, você tem a chance de sair do prédio sem algemas. Deseja subir pelo andaime [S/N]?",
  cooperacao: "Deseja cooperar com os Agentes [S/N]?",
  coelho: "Vai atrás do coelho branco [S/N]?",
};

// Função para fazer perguntas
function geraPergunta(p) {
  return prompt(p).toUpperCase();
}

// Instanciando thomas
const thomas = new Humano("Thomas Anderson", 37, "programador");

// Instanciando Chefe
const chefe = new Humano("Chefe", 45, "Coordenador");

let reiniciar = true;
while (reiniciar == true) {
  console.clear();
  console.log(
    `Era de manhã e o Sr. ${
      thomas.nome
    } sonhava enquanto dormia. Às 8:00, como de costume, o despertador começa a executar a sua função primordial... ${thomas.acordar()}\n`
  );
  // Pergunta 1: Dormir mais?
  let resposta = geraPergunta(pergunta.dormir);
  if (resposta == "N") {
    console.log(
      `${thomas.desligarDespertador()} e ${thomas.levantar().toLowerCase()}.`
    );
  } else {
    console.log(
      `${thomas.desligarDespertador()}, e ${thomas.soneca().toLowerCase()}.`
    );
  }

  console.clear();
  // Chegando no trabalho
  if (resposta == "S") {
    console.log(
      `${thomas.nome} chega muito atrasado à Companhia na qual trabalha como ${thomas.profissao}. Seu ${chefe.profissao} pede para que ele dirija-se para uma sala, onde terâo uma conversa. Ao final da conversa, seu ${chefe.nome}o adverte:`
    );
    console.log(`-${chefe.nome}: ${chefe.advertencia()}.`);
    console.log(
      `-${thomas.nome}: Entendi perfeitamente Senhor. Não irá se repetir.`
    );
  } else {
    console.log(
      `Uma hora depois de acordar e tomar seu café matinal, ${thomas.nome} chega à Companhia na qual trabalha como ${thomas.profissao}.`
    );
  }

  console.log(
    `${thomas.nome} dirige-se então para a sua mesa. Após algumas horas de trabalho, recebe uma encomenda. Era um aparelho celular. O celular tocou imediatamente após tirá-lo do envelope. Durante a consersa com o estranho do outro lado da linha, percebeu que era Morpheo. Morpheo o alertou de que os Agentes estavam atrás dele e o guiou até uma sala onde havia uma grande janela. Do lado de fora, um andaime. Então Morpheo pede para que ${thomas.nome} suba pelo andaime.\n`
  );

  // Pergunta 2: Subir o andaime?
  let resposta2 = geraPergunta(pergunta.andaime);
  console.clear();
  if (resposta2 == "S") {
    console.log(`${thomas.nome} ${thomas.subirAndaime().toLowerCase()}.`);
    console.log(
      `Enquanto ${thomas.nome}, subia o andaime, os Agentes chegaram à janela e começaram a disparar seus revolovers contra ele.`
    );
  } else {
    console.log(`${thomas.render()}.`);

    // Pergunta 3: cooperar com os agentes?
    resposta = geraPergunta(pergunta.cooperacao);
    console.clear();
    if (resposta == "N") {
      console.log(
        `${thomas.recusar()} e os agentes colocaram um rastreador em sua barriga. Em seguida, os Agentes o doparam, levaram pra casa e o colocaram em sua cama. ${
          thomas.nome
        } dormiu profundamente.`
      );
    } else {
      console.log(`${thomas.cooperar()}.`);
    }
  }

  //Chance de escapar 66%, de morrer 33%
  if (resposta2 == "S") {
    const chance = Math.floor(Math.random() * 3);
    if (chance == 0) {
      console.log(`${thomas.morrer()}. ${thomas.nome} está morto.`);
    } else {
      console.log(`${thomas.escapar()}.`);

      // Pergunta 4: seguir o coelho branco?
      resposta = geraPergunta(pergunta.coelho);
      console.clear();
      if (resposta == "N") {
        console.log(`${thomas.dormir()}.`);
      } else {
        console.log(`${thomas.seguirCoelho()}.`);
      }
    }
  }

  // Pergunta para reiniciar o jogo
  repeticao = prompt(
    "\nO dia acabou, deseja voltar no tempo e reiniciar o dia [S/N]?"
  ).toUpperCase();
  console.clear();
  if (repeticao == "N") {
    reiniciar = false;
  }
}
