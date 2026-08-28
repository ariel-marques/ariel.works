(() => {
  // Add the public values from Supabase: Project Settings > API.
  // The publishable key is intended for browser use. Never put a secret or service_role key here.
  const SUPABASE_URL = 'https://ijypormhtkleprzwntgm.supabase.co';
  const SUPABASE_PUBLISHABLE_KEY = 'sb_publishable_7DNm8NhJRh605O1j71UbRQ_0p4yaMBi';
  const LANGUAGE_STORAGE_KEY = 'hueo-language';

  const translations = {
    en: {
      pageTitle: 'HUEO — Private iOS Beta', metaDescription: 'Join the private iOS beta for HUEO, a focused photo editor for color, film-inspired looks, and grain.', ogDescription: 'Help shape the first version of HUEO.',
      skipLink: 'Skip to main content', primaryNavigation: 'Primary navigation', hueoHome: 'HUEO home', portfolioLabel: 'Visit Ariel Marques portfolio', languagePicker: 'Choose language', englishLabel: 'Switch to English', portugueseLabel: 'Switch to Brazilian Portuguese',
      navHow: 'How it works', eyebrow: 'Private Beta <span aria-hidden="true">·</span> iOS', heroTitle: 'Help shape the first version of <em>HUEO.</em>', intro: 'HUEO is a photo editing app built around color, film-inspired looks, tactile grain, and a simple creative workflow that keeps the image at the center.', betaNote: 'A small group of early testers will receive TestFlight access before the public release.', joinLink: 'Join the beta <span aria-hidden="true">↓</span>',
      earlyAccess: '01 / EARLY ACCESS', formTitle: 'Join the private beta.', firstName: 'First name', email: 'Email', iphoneModel: 'iPhone model', iphonePlaceholder: 'e.g. iPhone 15 Pro', profile: 'User profile', selectOne: 'Select one', photographer: 'Photographer', designer: 'Designer', contentCreator: 'Content creator', casualUser: 'Casual user', other: 'Other', frequency: 'Photo editing frequency', daily: 'Daily', weekly: 'Weekly', occasionally: 'Occasionally', rarely: 'Rarely', consent: 'I agree to receive emails specifically related to the HUEO beta and TestFlight access.', submit: 'Join the beta', loading: 'Joining…', privacy: 'Your email will only be used for HUEO beta communication. No noise, no sharing.',
      received: 'SIGNUP RECEIVED', successTitle: 'You’re on the list.', successThanks: 'Thanks for signing up for the HUEO beta.', successInvite: 'TestFlight invitations will be sent in small batches. Keep an eye on your inbox.', submitAnother: 'Submit another response',
      processNumber: '02 / THE PROCESS', processTitle: 'How it works.', step1Title: 'Sign up', step1Text: 'Tell us a little about how you edit.', step2Title: 'Get invited', step2Text: 'Selected testers receive a TestFlight link.', step3Title: 'Test HUEO', step3Text: 'Use the app in your real editing workflow.', step4Title: 'Send feedback', step4Text: 'Share what feels right—and what doesn’t.',
      insideBeta: '03 / INSIDE THE BETA', testTitle: 'What you’ll test.', featurePresets: 'Film-inspired presets', featureGrain: 'Grain', featureHsl: 'HSL editing', featureColor: 'Color tools', featureWorkflow: 'Editing workflow', footer: 'An independent iOS app by <a href="/">Ariel Marques</a>.',
      firstNameRequired: 'Enter your first name.', emailRequired: 'Enter your email address.', emailInvalid: 'Enter a valid email address.', iphoneRequired: 'Enter your iPhone model.', profileRequired: 'Select a user profile.', frequencyRequired: 'Select how often you edit photos.', consentRequired: 'Please agree to receive HUEO beta emails.', duplicate: 'You’re already on the HUEO beta list.', genericError: 'Something went wrong while joining the beta. Please try again.'
    },
    'pt-BR': {
      pageTitle: 'HUEO — Beta privado para iOS', metaDescription: 'Participe do beta privado do HUEO para iOS, um editor de fotos focado em cor, visuais inspirados em filme e granulação.', ogDescription: 'Ajude a construir a primeira versão do HUEO.',
      skipLink: 'Pular para o conteúdo principal', primaryNavigation: 'Navegação principal', hueoHome: 'Início do HUEO', portfolioLabel: 'Visitar o portfólio de Ariel Marques', languagePicker: 'Escolher idioma', englishLabel: 'Mudar para inglês', portugueseLabel: 'Mudar para português do Brasil',
      navHow: 'Como funciona', eyebrow: 'Beta privado <span aria-hidden="true">·</span> iOS', heroTitle: 'Ajude a construir a primeira versão do <em>HUEO.</em>', intro: 'HUEO é um app de edição de fotos criado em torno da cor, de visuais inspirados em filme, da granulação tátil e de um fluxo criativo simples que mantém a imagem no centro de tudo.', betaNote: 'Um pequeno grupo de participantes receberá acesso pelo TestFlight antes do lançamento público.', joinLink: 'Quero participar <span aria-hidden="true">↓</span>',
      earlyAccess: '01 / ACESSO ANTECIPADO', formTitle: 'Participe do beta privado.', firstName: 'Nome', email: 'E-mail', iphoneModel: 'Modelo do iPhone', iphonePlaceholder: 'ex.: iPhone 15 Pro', profile: 'Perfil de uso', selectOne: 'Selecione uma opção', photographer: 'Fotógrafo(a)', designer: 'Designer', contentCreator: 'Criador(a) de conteúdo', casualUser: 'Usuário(a) casual', other: 'Outro', frequency: 'Frequência de edição de fotos', daily: 'Todos os dias', weekly: 'Toda semana', occasionally: 'Às vezes', rarely: 'Raramente', consent: 'Concordo em receber e-mails especificamente relacionados ao beta do HUEO e ao acesso pelo TestFlight.', submit: 'Quero participar', loading: 'Enviando…', privacy: 'Seu e-mail será usado apenas para comunicações sobre o beta do HUEO. Sem spam e sem compartilhamento.',
      received: 'INSCRIÇÃO RECEBIDA', successTitle: 'Você está na lista.', successThanks: 'Obrigado por se inscrever no beta do HUEO.', successInvite: 'Os convites do TestFlight serão enviados em pequenos grupos. Fique de olho no seu e-mail.', submitAnother: 'Enviar outra resposta',
      processNumber: '02 / O PROCESSO', processTitle: 'Como funciona.', step1Title: 'Inscreva-se', step1Text: 'Conte um pouco sobre como você edita suas fotos.', step2Title: 'Receba o convite', step2Text: 'As pessoas selecionadas recebem um link do TestFlight.', step3Title: 'Teste o HUEO', step3Text: 'Use o app no seu fluxo real de edição.', step4Title: 'Envie seu feedback', step4Text: 'Conte o que funciona bem — e o que pode melhorar.',
      insideBeta: '03 / DENTRO DO BETA', testTitle: 'O que você vai testar.', featurePresets: 'Presets inspirados em filme', featureGrain: 'Granulação', featureHsl: 'Edição HSL', featureColor: 'Ferramentas de cor', featureWorkflow: 'Fluxo de edição', footer: 'Um app independente para iOS criado por <a href="/">Ariel Marques</a>.',
      firstNameRequired: 'Digite seu nome.', emailRequired: 'Digite seu e-mail.', emailInvalid: 'Digite um e-mail válido.', iphoneRequired: 'Digite o modelo do seu iPhone.', profileRequired: 'Selecione um perfil de uso.', frequencyRequired: 'Selecione com que frequência você edita fotos.', consentRequired: 'Concorde em receber e-mails sobre o beta do HUEO.', duplicate: 'Você já está na lista do beta do HUEO.', genericError: 'Não foi possível concluir sua inscrição. Tente novamente.'
    }
  };

  const form = document.querySelector('#beta-form');
  const success = document.querySelector('#form-success');
  const resetButton = document.querySelector('#reset-form');
  const submitButton = form.querySelector('button[type="submit"]');
  const buttonLabel = submitButton.querySelector('.button-label');
  const formStatus = document.querySelector('#form-status');
  const languageButtons = document.querySelectorAll('[data-language]');
  const fieldMessageKeys = { 'first-name': 'firstNameRequired', email: 'emailRequired', 'iphone-model': 'iphoneRequired', profile: 'profileRequired', frequency: 'frequencyRequired', consent: 'consentRequired' };
  let currentLanguage = 'en';
  let isLoading = false;
  let statusKey = '';

  const getSavedLanguage = () => {
    try { return localStorage.getItem(LANGUAGE_STORAGE_KEY); } catch (error) { return null; }
  };

  const saveLanguage = (language) => {
    try { localStorage.setItem(LANGUAGE_STORAGE_KEY, language); } catch (error) { /* Storage may be unavailable. */ }
  };

  const setFieldError = (field, message = '', messageKey = '') => {
    field.setAttribute('aria-invalid', message ? 'true' : 'false');
    const error = document.querySelector(`#${field.id}-error`);
    error.textContent = message;
    error.dataset.messageKey = messageKey;
  };

  const applyLanguage = (language, persist = true) => {
    currentLanguage = translations[language] ? language : 'en';
    const copy = translations[currentLanguage];
    document.documentElement.lang = currentLanguage;
    document.title = copy.pageTitle;
    document.querySelector('meta[name="description"]').content = copy.metaDescription;
    document.querySelector('meta[property="og:title"]').content = copy.pageTitle;
    document.querySelector('meta[property="og:description"]').content = copy.ogDescription;
    document.querySelectorAll('[data-i18n]').forEach((element) => { element.innerHTML = copy[element.dataset.i18n]; });
    document.querySelectorAll('[data-i18n-placeholder]').forEach((element) => { element.placeholder = copy[element.dataset.i18nPlaceholder]; });
    document.querySelectorAll('[data-i18n-aria-label]').forEach((element) => { element.setAttribute('aria-label', copy[element.dataset.i18nAriaLabel]); });
    languageButtons.forEach((button) => {
      const active = button.dataset.language === currentLanguage;
      button.classList.toggle('is-active', active);
      button.setAttribute('aria-pressed', String(active));
      button.setAttribute('aria-label', copy[button.dataset.language === 'en' ? 'englishLabel' : 'portugueseLabel']);
    });
    document.querySelectorAll('.field-error[data-message-key]').forEach((error) => {
      if (error.dataset.messageKey) error.textContent = copy[error.dataset.messageKey];
    });
    formStatus.textContent = statusKey ? copy[statusKey] : '';
    buttonLabel.textContent = copy[isLoading ? 'loading' : 'submit'];
    if (persist) saveLanguage(currentLanguage);
  };

  const validateForm = (focusFirst = true) => {
    let firstInvalidField = null;
    Object.entries(fieldMessageKeys).forEach(([id, requiredKey]) => {
      const field = document.querySelector(`#${id}`);
      const isBlankText = field.tagName === 'INPUT' && field.type !== 'checkbox' && !field.value.trim();
      let messageKey = field.validity.valueMissing || isBlankText ? requiredKey : '';
      if (id === 'email' && field.validity.typeMismatch) messageKey = 'emailInvalid';
      setFieldError(field, messageKey ? translations[currentLanguage][messageKey] : '', messageKey);
      if (messageKey && !firstInvalidField) firstInvalidField = field;
    });
    if (firstInvalidField && focusFirst) firstInvalidField.focus();
    return !firstInvalidField;
  };

  const setLoading = (loading) => {
    isLoading = loading;
    submitButton.disabled = loading;
    submitButton.setAttribute('aria-busy', String(loading));
    buttonLabel.textContent = translations[currentLanguage][loading ? 'loading' : 'submit'];
  };

  document.querySelector('#year').textContent = new Date().getFullYear();
  applyLanguage(getSavedLanguage() === 'pt-BR' ? 'pt-BR' : 'en', false);

  languageButtons.forEach((button) => button.addEventListener('click', () => applyLanguage(button.dataset.language)));

  Object.keys(fieldMessageKeys).forEach((id) => {
    const field = document.querySelector(`#${id}`);
    const eventName = field.type === 'checkbox' || field.tagName === 'SELECT' ? 'change' : 'input';
    field.addEventListener(eventName, () => {
      if (field.getAttribute('aria-invalid') === 'true') validateForm(false);
    });
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    statusKey = '';
    formStatus.textContent = '';
    if (!validateForm()) return;

    const payload = {
      first_name: document.querySelector('#first-name').value.trim(),
      email: document.querySelector('#email').value.trim().toLowerCase(),
      iphone_model: document.querySelector('#iphone-model').value.trim(),
      user_profile: document.querySelector('#profile').value,
      edit_frequency: document.querySelector('#frequency').value,
      consent: document.querySelector('#consent').checked,
      source: 'ariel.works/hueo'
    };

    setLoading(true);
    try {
      const endpoint = `${SUPABASE_URL.replace(/\/$/, '')}/rest/v1/hueo_beta_signups`;
      const response = await fetch(endpoint, { method: 'POST', headers: { apikey: SUPABASE_PUBLISHABLE_KEY, 'Content-Type': 'application/json', Prefer: 'return=minimal' }, body: JSON.stringify(payload) });
      if (!response.ok) {
        const details = await response.json().catch(() => ({}));
        console.error('HUEO beta signup failed', { status: response.status, details });
        statusKey = response.status === 409 || details.code === '23505' ? 'duplicate' : 'genericError';
        formStatus.textContent = translations[currentLanguage][statusKey];
        return;
      }
      form.reset();
      form.hidden = true;
      success.hidden = false;
      success.focus();
    } catch (error) {
      console.error('HUEO beta signup request failed', error);
      statusKey = 'genericError';
      formStatus.textContent = translations[currentLanguage][statusKey];
    } finally { setLoading(false); }
  });

  resetButton.addEventListener('click', () => {
    form.reset();
    statusKey = '';
    formStatus.textContent = '';
    Object.keys(fieldMessageKeys).forEach((id) => setFieldError(document.querySelector(`#${id}`)));
    success.hidden = true;
    form.hidden = false;
    document.querySelector('#first-name').focus();
  });
})();
