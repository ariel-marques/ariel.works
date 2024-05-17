async function loadSVG(url) {
  const response = await fetch(url);
  const svgContent = await response.text();
  return svgContent;
}

async function iniciarTyped(elementSelector, svgUrl) {
  const svgContent = await loadSVG(svgUrl);
  const element = document.querySelector(elementSelector);

  const typed = new Typed(elementSelector, {
    strings: ['ARIEL MARQUES'],
    typeSpeed: 80,
    backSpeed: 130,
    backDelay: 1000,  // Pequeno atraso antes de iniciar o backspace
    startDelay: 500,
    loop: false,
    showCursor: true,
    onComplete: function() {
      // Quando o texto estiver completamente digitado, iniciar o backspace
      setTimeout(() => {
        typed.stop();  // Parar Typed.js
        simulateBackspace(element, 'ARIEL MARQUES', () => {
          element.innerHTML = `<div class="svg-container">${svgContent}</div>`;
          setTimeout(() => {
            document.querySelector('.svg-container').classList.add('fade-in');
            // Parar o cursor de piscar
            if (typed.cursor) {
              typed.cursor.style.display = 'none';
            }
          }, 50); // Pequeno atraso para garantir que o SVG foi inserido antes de aplicar o fade-in
        });
      }, 1000); // Iniciar o backspace após 1 segundo
    },
    preStringTyped: function(arrayPos) {
      // Exibir o cursor antes de digitar a string
      if (typed && typed.cursor) {
        typed.cursor.style.display = 'inline-block';
      }
    }
  });
}

function simulateBackspace(element, text, callback) {
  let currentText = text;
  const interval = setInterval(() => {
    if (currentText.length > 0) {
      currentText = currentText.slice(0, -1);
      element.innerHTML = currentText;
    } else {
      clearInterval(interval);
      callback();
    }
  }, 130); // Velocidade do backspace
}

// Iniciar Typed.js para os dois seletores
iniciarTyped('.txt-animado', 'https://ariel.works/assets/img/logo.svg');
iniciarTyped('.txt-animado-mobile', 'https://ariel.works/assets/img/logo.svg');
