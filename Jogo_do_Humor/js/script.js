let emoji = "";
let texto = "";
function proxima() {
  emoji = document.querySelector("#h2").innerText;
  if (emoji == "Com Medo") {
    texto = "Com Dúvida";
    emoji = "image1";
  } else if (emoji == "Com Dúvida") {
    texto = "Simpático";
    emoji = "image2";
  } else if (emoji == "Simpático") {
    texto = "Triste";
    emoji = "image3";
  } else if (emoji == "Triste") {
    texto = "Com Medo";
    emoji = "image4";
  }
  document.querySelector("#imagem").src = "./image/" + emoji + ".png";
  document.querySelector("#h2").innerText = texto;
  document.querySelector("#button").innerText = texto;
}
