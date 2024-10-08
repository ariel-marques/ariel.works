async function loadSVG(url) {
  const response = await fetch(url);
  if (!response.ok) {
    throw new Error(`Failed to load SVG: ${response.statusText}`);
  }
  return await response.text();
}

async function iniciarTyped(elementSelector, svgUrl, fadeIn = false) {
  const svgContent = await loadSVG(svgUrl);
  const element = document.querySelector(elementSelector);

  const typed = new Typed(elementSelector, {
    strings: ['ARIEL MARQUES'],
    typeSpeed: 80,
    backSpeed: 130,
    backDelay: 1000,
    startDelay: 500,
    loop: true,
    showCursor: true,
    onComplete: function() {
      setTimeout(() => {
        typed.stop();
        simulateBackspace(element, 'ARIEL MARQUES', () => {
          element.innerHTML = `<div class="svg-container">${svgContent}</div>`;
          const svgElement = document.querySelector(`${elementSelector} .svg-container`);
          if (fadeIn) {
            setTimeout(() => {
              svgElement.classList.add('fade-in');
              // Parar o cursor de piscar
              if (typed.cursor) {
                typed.cursor.style.display = 'none';
              }
            }, 50);
          } else {
            // Sem fade-in para versão mobile
            svgElement.style.opacity = '1';
            // Parar o cursor de piscar
            if (typed.cursor) {
              typed.cursor.style.display = 'none';
            }
          }
        });
      }, 1000);
    },
    preStringTyped: function(arrayPos) {
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
  }, 130);
}

document.addEventListener('DOMContentLoaded', async () => {
  try {
    await iniciarTyped('.txt-animado', 'https://ariel.works/assets/img/logo.svg', true); // Com fade-in
    await iniciarTyped('.txt-animado-mobile', 'https://ariel.works/assets/img/logo.svg'); // Sem fade-in
  } catch (error) {
    console.error(error);
    document.querySelector('.txt-animado').textContent = 'Failed to load SVG';
    document.querySelector('.txt-animado-mobile').textContent = 'Failed to load SVG';
  }
});
