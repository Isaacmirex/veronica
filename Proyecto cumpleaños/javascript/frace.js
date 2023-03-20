const body = document.querySelector('body');

function createFrace() {
  const span = document.createElement('span');
  span.textContent = 'Adicta al oxígeno✨';
  span.classList.add('frace');
  span.style.top = Math.random() * window.innerHeight + 'px';
  span.style.left = Math.random() * window.innerWidth + 'px';
  body.appendChild(span);

  setTimeout(() => {
    body.removeChild(span);
  }, 5000);
}

setInterval(createFrace, 100);