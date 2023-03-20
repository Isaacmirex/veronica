
function typeWriter(element, text, delay) {
    let i = 0;
    
    function typing() {
      if (i < text.length) {
        element.innerHTML += text.charAt(i);
        i++;
        setTimeout(typing, delay);
      }
    }
  
    typing();
  }
  
  const typewriterElement = document.getElementById('typewriter');
  const text = typewriterElement.textContent;
  const delay = 100; // Ajusta este valor para controlar la velocidad del efecto
  
  typewriterElement.textContent = ''; // Limpia el contenido del elemento antes de aplicar el efecto
  typeWriter(typewriterElement, text, delay);

