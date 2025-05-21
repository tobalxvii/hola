// Mostrar la carta después de que la paloma llega
document.querySelector('.paloma').addEventListener('animationend', () => {
  document.querySelector('.carta').classList.add('mostrar');
});

function abrirCarta() {
  const carta = document.querySelector('.carta');
  carta.classList.toggle('abierta');
}
