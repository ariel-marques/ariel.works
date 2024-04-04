async function loadSVG(url) {
  const response = await fetch(url);
  const svgContent = await response.text();
  return svgContent;
}

async function iniciarTyped(elementSelector, svgUrl) {
  const strings = ['ARIEL MARQUES', await loadSVG(svgUrl)];

  const typed = new Typed(elementSelector, {
    strings: strings,
    showCursor: false,
    typeSpeed: 80,
    backSpeed: 130,
    loop: true,
    onComplete: function () {
      document.getElementById('svg-container').innerHTML = strings[1];
    }
  });
}

iniciarTyped('.txt-animado', 'https://ariel.works/assets/img/logo.svg');

iniciarTyped('.txt-animado-mobile', 'https://ariel.works/assets/img/logo.svg');
