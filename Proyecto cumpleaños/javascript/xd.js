const body = document.querySelector('body');

function createXD() {
  const span = document.createElement('span');
  span.textContent = 'XD';
  span.classList.add('xd');
  span.style.top = Math.random() * window.innerHeight + 'px';
  span.style.left = Math.random() * window.innerWidth + 'px';
  body.appendChild(span);

  setTimeout(() => {
    body.removeChild(span);
  }, 5000);
}

setInterval(createXD, 10);