// Espera a página carregar completamente
document.addEventListener("DOMContentLoaded", () => {

  // Data do início do namoro
  const dataNamoro = new Date("2026-01-12T00:00:00");

  // Elemento do contador
  const contador = document.getElementById("contador");

  function atualizarContador() {

    const agora = new Date();

    // Diferença em milissegundos
    const diferenca = agora - dataNamoro;

    // Conversões
    const segundos = Math.floor(diferenca / 1000);
    const minutos = Math.floor(segundos / 60);
    const horas = Math.floor(minutos / 60);
    const dias = Math.floor(horas / 24);

    // Atualiza na tela
    contador.innerHTML = `
      ${dias} dias ❤️
    `;
  }

  // Atualiza imediatamente
  atualizarContador();

  // Atualiza automaticamente
  setInterval(atualizarContador, 1000);

});