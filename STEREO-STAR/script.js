// STEREO STAR - Sistema de favoritos

console.log("Bem-vindo ao STEREO STAR!");

function favoritar(botao) {
  if (botao.classList.contains("favoritado")) {
    botao.classList.remove("favoritado");
    botao.innerHTML = "♡ FAVORITAR";
  } else {
    botao.classList.add("favoritado");
    botao.innerHTML = "♥ FAVORITADO";
  }
}
