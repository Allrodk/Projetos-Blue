// let filme = [
//   { nome: "Matrix", ano: 1999 },
//   { nome: "Forest Gump", ano: 1994 },
// ];

// // Ordena os objetos da lista na rodada atual
// filme.sort((a, b) => {
//   if (a.ano < b.ano) {
//     return -1;
//   } else {
//     return true;
//   }
// });

// for (let i = 0; i < filme.length; i++) {
//   for (let info in filme[i]) {
//     console.log(info, filme[i][info]);
//   }
// }

//const listaNumeros = [28, 1, -52, 25, 1001, 99];

// Função para ordenar numeros em lista
// function ordena(elemento) {
//   for (let i = 0; i < elemento.length; i++) {
//     for (let j = i + 1; j < elemento.length; j++) {
//       if (elemento[j] > elemento[i]) {
//         elemento.splice(i, 0, elemento[j]);
//         elemento.splice(j + 1, 1);
//       }
//     }
//   }
// }

// ordena(listaNumeros);
// console.log(listaNumeros);

const filmes = [
  { titulo: "De volta para o Futuro", ano: 1985 },
  { titulo: "Matrix", ano: 1999 },
  { titulo: "Forest Gump", ano: 1994 },
];

// Função para ordenar objetos dentro de uma lista
function ordena(objeto, prop) {
  console.log(objeto, Object.values(objeto[0])[prop]);
  for (let i = 0; i < objeto.length; i++) {
    for (let j = i + 1; j < objeto.length; j++) {
      if (Object.values(objeto[j])[prop] < Object.values(objeto[i])[prop]) {
        objeto.splice(i, 0, objeto[j]);
        objeto.splice(j + 1, 1);
      }
    }
  }
}

ordena(filmes, 1);

console.log(filmes);
