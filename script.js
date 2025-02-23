/*=================
    INICIO SLIDE  
  =================*/

  let currentSlide = 0;
  const slides = document.querySelectorAll('.slide');
  const totalSlides = slides.length;
  
  function showSlide(index) {
      slides.forEach((slide, i) => {
          slide.style.display = (i === index) ? 'block' : 'none'; // Exibe o slide atual e esconde os outros
      });
  }
  
  // Função para avançar automaticamente os slides
  function autoSlide() {
      currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : 0; // Avança para o próximo slide
      showSlide(currentSlide);
  }
  
  // Configura um intervalo para mudar o slide a cada 3 segundos (3000 milissegundos)
  setInterval(autoSlide, 10000);
  
  document.getElementById('prevBtn').addEventListener('click', () => {
      currentSlide = (currentSlide > 0) ? currentSlide - 1 : totalSlides - 1; // Volta para o slide anterior
      showSlide(currentSlide);
  });
  
  document.getElementById('nextBtn').addEventListener('click', () => {
      currentSlide = (currentSlide < totalSlides - 1) ? currentSlide + 1 : 0; // Avança para o próximo slide
      showSlide(currentSlide);
  });
  
  // Mostra o primeiro slide ao carregar
  document.addEventListener('DOMContentLoaded', (event) => {
      showSlide(currentSlide);
  });
  
  /*=================
      FIM SLIDE  
    =================*/
  