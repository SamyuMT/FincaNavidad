document.addEventListener('DOMContentLoaded', () => {
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.querySelector('.mobile-menu');
  
    menuToggle.addEventListener('click', () => {
      mobileMenu.style.display = mobileMenu.style.display === 'flex' ? 'none' : 'flex';
    });
  });

// Función para ir a la sección de Horarios
function showSchedule() {
  document.getElementById('agenda').scrollIntoView({
      behavior: 'smooth', // Desplazamiento suave
      block: 'start' // Alinea la sección al inicio de la vista
  });
}

// Función para ir a la sección de Más Información
function moreInfo() {
  document.getElementById('sobre-el-evento').scrollIntoView({
      behavior: 'smooth', // Desplazamiento suave
      block: 'start' // Alinea la sección al inicio de la vista
  });
}
// Fecha de evento (ajústala a tu fecha objetivo)
const targetDate = new Date("2024-11-29T00:00:00").getTime();

// Actualiza el contador cada segundo
const interval = setInterval(function() {
  const now = new Date().getTime();
  const distance = targetDate - now;

  // Cálculos para días, horas, minutos y segundos
  const days = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);
  const days1 = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours1 = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes1 = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds1 = Math.floor((distance % (1000 * 60)) / 1000);
  // Mostrar resultados
  document.getElementById("days").innerHTML = days;
  document.getElementById("hours").innerHTML = hours;
  document.getElementById("minutes").innerHTML = minutes;
  document.getElementById("seconds").innerHTML = seconds;
  document.getElementById("days1").innerHTML = days1;
  document.getElementById("hours1").innerHTML = hours1;
  document.getElementById("minutes1").innerHTML = minutes1;
  document.getElementById("seconds1").innerHTML = seconds1;

  // Si el contador llega a cero
  if (distance < 0) {
    clearInterval(interval);
    document.querySelector(".CompraEntradas").innerHTML = "¡El evento ha comenzado!";
  }
}, 1000);
