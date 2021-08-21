/*
Projeto 01 – Projeto Detetive
Faça um programa que faça 5 perguntas para uma pessoa sobre um crime. As perguntas são:

"Telefonou para a vítima?"
"Esteve no local do crime?"
"Mora perto da vítima?"
"Devia para a vítima?"
"Já trabalhou com a vítima?" 

O programa deve no final emitir uma classificação sobre a participação da pessoa no crime. 
Se a pessoa responder positivamente a 2 questões ela deve ser classificada como "Suspeita", entre 3 e 4 como "Cúmplice" e 5 como "Assassino". Caso contrário, ele será classificado como "Inocente".
*/
let qtdeSim = 0;
let respostas = [];
const perguntas = ['1 - Telefonou para a vítima? Sim(1) ou Não(0)?',
                   '2 - Esteve no local do crime? Sim(1) ou Não(0)?',
                   '3 - Mora perto da vítima? Sim(1) ou Não(0)?',
                   '4 - Devia para a vítima? Sim(1) ou Não(0)?',
                   '5 - Já trabalhou com a vítima? Sim(1) ou Não(0)?'
                  ];

console.log('Atenção, responda 1 para SIM e 0 para NÃO.\n');                 
for (let i = 0; i <= perguntas.length-1; i++){  
  respostas[i] = prompt(perguntas[i]);
  if (respostas[i] != 1 && respostas[i] != 0){
    console.log('\nResponda apenas 1 ou 0.');
    i--
  }else{
    if (respostas[i] == 1){
      qtdeSim++;
    }
  }
}
if (qtdeSim == 2){
  resultado = 'Suspeito';
} else if (qtdeSim == 3 || qtdeSim == 4){
  resultado = 'Cúmplice';
} else if (qtdeSim == 5){
  resultado = 'Assassino';
}else{
  resultado = 'Inocente';
}
console.log(`\nResultado da investigação: O interrogado é ${resultado}.`);
              