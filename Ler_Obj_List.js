let filme = [
  { nome: "Matrix", ano: 1999 },
  { nome: "Forest Gump", ano: 1994 },
];

// Ordena os objetos da lista na rodada atual
filme.sort((a, b) => {
  if (a.ano < b.ano) {
    return -1;
  } else {
    return true;
  }
});

for (let i = 0; i < filme.length; i++) {
  for (let info in filme[i]) {
    console.log(info, filme[i][info]);
  }
}
