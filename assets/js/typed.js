async function loadSVG(url) {
  const response = await fetch(url);
  const svgContent = await response.text();
  return svgContent;
}
// Função principal para iniciar o Typed.js
async function iniciarTyped(elementSelector, svgUrl) {
  const strings = ['ARIEL MARQUES', await loadSVG(svgUrl)];

  // Definir a variável 'typed' fora do escopo da função para garantir acesso aos callbacks
  let typed;

  // Iniciar Typed.js com as strings carregadas
  typed = new Typed(elementSelector, {
    strings: strings,
    typeSpeed: 80,
    backSpeed: 130,
    loop: true,
    showCursor: true, // Exibe o cursor de texto inicialmente
    onComplete: function() {
      // Ao completar a animação, oculta o cursor de texto
      if (typed && typed.cursor) {
        typed.cursor.style.display = 'none';
        document.getElementById('svg-container').innerHTML = strings[1];
      }
    },
    onBegin: function() {
      // Ao iniciar a animação, exibe o cursor de texto
      if (typed && typed.cursor) {
        typed.cursor.style.display = 'inline-block';
      }
    }
  });
}

iniciarTyped('.txt-animado', 'https://ariel.works/assets/img/logo.svg');

iniciarTyped('.txt-animado-mobile', 'https://ariel.works/assets/img/logo.svg');
