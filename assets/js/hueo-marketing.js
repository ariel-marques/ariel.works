(() => {
  const languageStorageKey = 'hueo-language';
  const portuguese = {
    skip: 'Pular para o conteúdo principal',
    navigation: 'Navegação principal',
    home: 'Início do HUEO',
    language: 'Escolher idioma',
    editing: 'Conheça o HUEO',
    betaNav: 'Beta',
    platforms: 'Editor de fotos para iPhone e iPad',
    heroStart: 'Toda foto',
    heroEnd: 'tem um sentimento.',
    heroBody: 'Comece com um Look inspirado em filme e ajuste a luz e a cor para trazer à tona o que você sentiu ao tirar a foto.',
    joinBeta: 'Participar do beta',
    downloadApp: 'Baixar na App Store',
    appStoreBadge: 'assets/img/AppStore-badge-black-pt-br.svg',
    appStoreBadgeAlt: 'Baixar HUEO na App Store',
    heroAlt: 'HUEO no iPhone com uma foto do pôr do sol e o painel de Looks aberto.',
    editingTitle: 'Encontre suas cores.',
    editingBody: '32 Looks inspirados em filme, em oito coleções, com ferramentas precisas para ajustar cada foto.',
    looksAlt: 'Prévia dos Looks das coleções do HUEO em uma foto de um parque.',
    looksTitle: 'Deixe o Look com a sua cara.',
    looksBody: 'Escolha um Look, ajuste sua intensidade, tom e cor e salve nos Favoritos os que você mais usa.',
    colorAlt: 'Controles HSL para os tons de azul em uma foto tirada no mar.',
    colorTitle: 'Cada tom, do seu jeito.',
    colorBody: 'Refine cada faixa de cor com os controles HSL e aplique tonalidades diferentes às sombras e às altas luzes com Split Tone.',
    lightAlt: 'Controle de exposição abaixo de uma foto de luz entrando por uma janela.',
    lightTitle: 'A luz muda tudo.',
    lightBody: 'Equilibre exposição, contraste, altas luzes e sombras para destacar o que importa na foto.',
    toolsTitle: 'Cada ferramenta. Cada detalhe.',
    toolsBody: 'Realce a textura, suavize as áreas claras com Bloom ou Halation e ajuste a granulação com controles de intensidade, tamanho e cor.',
    'tools-light': 'Luz',
    'tool-exposure': 'Exposição',
    'tool-contrast': 'Contraste',
    'tool-highlights': 'Altas luzes',
    'tool-shadows': 'Sombras',
    'tool-whites': 'Brancos',
    'tool-blacks': 'Pretos',
    'tools-color': 'Cor',
    'tool-temperature': 'Temperatura',
    'tool-tint': 'Matiz',
    'tool-saturation': 'Saturação',
    'tool-vibrance': 'Vibração',
    'tools-detail': 'Detalhe',
    'tool-texture': 'Textura',
    'tool-clarity': 'Claridade',
    'tool-sharpness': 'Nitidez',
    'tool-dehaze': 'Remover névoa',
    'tools-effects': 'Efeitos',
    'tool-grain': 'Granulação',
    'tool-vignette': 'Vinheta',
    'tool-fade': 'Desbotamento',
    grainAlt: 'Controles de granulação abaixo de uma foto de arcos brancos contra um céu azul.',
    finishTitle: 'Seu olhar. Sua edição.',
    finishBody: 'Mantenha os originais e volte à edição sempre que quiser. No app Fotos, use a extensão do HUEO para aplicar um Look favorito ou ajustar a granulação.',
    finishAlt: 'Retrato de rua aberto no editor do HUEO, com prévias de Looks abaixo da imagem.',
    credit: 'Um app de',
    privacy: 'Política de Privacidade'
  };
  const title = document.querySelector('title');
  const socialTitle = document.querySelector('[property="og:title"]');
  const descriptions = document.querySelectorAll('[name="description"], [property="og:description"]');
  const englishMetadata = { title: title.textContent, description: descriptions[0].content };
  const portugueseMetadata = {
    title: 'HUEO — Editor de fotos',
    description: 'HUEO é um editor de fotos para iPhone e iPad com 32 Looks inspirados em filme e ferramentas precisas de luz e cor.'
  };
  const buttons = document.querySelectorAll('[data-language]');
  const attributes = { 'data-copy': null, 'data-copy-alt': 'alt', 'data-copy-label': 'aria-label', 'data-copy-src': 'src' };
  const copy = Object.entries(attributes).flatMap(([marker, attribute]) =>
    [...document.querySelectorAll(`[${marker}]`)].map((element) => ({
      element,
      attribute,
      english: attribute ? element.getAttribute(attribute) : element.textContent,
      portuguese: portuguese[element.getAttribute(marker)]
    }))
  );

  function applyLanguage(language) {
    const usePortuguese = language === 'pt-BR';
    document.documentElement.lang = usePortuguese ? 'pt-BR' : 'en';

    for (const item of copy) {
      const value = usePortuguese ? item.portuguese : item.english;
      if (item.attribute) item.element.setAttribute(item.attribute, value);
      else item.element.textContent = value;
    }

    const metadata = usePortuguese ? portugueseMetadata : englishMetadata;
    title.textContent = metadata.title;
    socialTitle.content = metadata.title;
    descriptions.forEach((description) => { description.content = metadata.description; });

    for (const button of buttons) {
      const active = button.dataset.language === document.documentElement.lang;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
    }
  }

  function enableScrollReveals() {
    if (!('IntersectionObserver' in window) || window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

    const targets = [...document.querySelectorAll('[data-scroll-reveal]')]
      .filter((element) => element.getBoundingClientRect().top >= window.innerHeight);

    const observer = new IntersectionObserver((entries) => {
      for (const { target, isIntersecting } of entries) {
        if (!isIntersecting) continue;
        target.classList.replace('scroll-reveal-pending', 'scroll-reveal-entering');
        observer.unobserve(target);
      }
    });

    for (const target of targets) {
      target.classList.add('scroll-reveal-pending');
      observer.observe(target);
    }
  }

  let savedLanguage;
  try { savedLanguage = localStorage.getItem(languageStorageKey); } catch { /* Use English without storage. */ }
  applyLanguage(savedLanguage);
  document.querySelector('.language-switcher').hidden = false;
  enableScrollReveals();

  for (const button of buttons) {
    button.addEventListener('click', () => {
      const language = button.dataset.language;
      applyLanguage(language);
      try { localStorage.setItem(languageStorageKey, language); } catch { /* Keep the selection for this page. */ }
    });
  }
})();
