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
let resposta, qtdeSim = 0;
const perguntas = ['1 - Telefonou para a vítima [S/N]? ',
                   '2 - Esteve no local do crime [S/N])?',
                   '3 - Mora perto da vítima [S/N]?',
                   '4 - Devia para a vítima [S/N]',
                   '5 - Já trabalhou com a vítima [S/N]?'
                  ];

console.log('Interrogatório, responda apenas [S/N].\n');                 
for (let i = 0; i <= perguntas.length-1; i++){  
  resposta = prompt(perguntas[i]);
  if (resposta.toUpperCase() != 'S' && resposta.toUpperCase() != 'N'){
    console.log('\nResponda apenas [S/N].');
    i--
  }else{
    if (resposta.toUpperCase() == 'S'){
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
              