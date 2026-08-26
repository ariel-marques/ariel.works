(() => {
  // Add the public values from Supabase: Project Settings > API.
  // The publishable key is intended for browser use. Never put a secret or service_role key here.
  const SUPABASE_URL = 'YOUR_SUPABASE_PROJECT_URL';
  const SUPABASE_PUBLISHABLE_KEY = 'YOUR_SUPABASE_PUBLISHABLE_KEY';

  const form = document.querySelector('#beta-form');
  const success = document.querySelector('#form-success');
  const resetButton = document.querySelector('#reset-form');
  const year = document.querySelector('#year');
  const submitButton = form.querySelector('button[type="submit"]');
  const buttonLabel = submitButton.querySelector('.button-label');
  const formStatus = document.querySelector('#form-status');
  const fields = {
    'first-name': 'Enter your first name.',
    email: 'Enter your email address.',
    'iphone-model': 'Enter your iPhone model.',
    profile: 'Select a user profile.',
    frequency: 'Select how often you edit photos.',
    consent: 'Please agree to receive HUEO beta emails.'
  };

  year.textContent = new Date().getFullYear();

  const setFieldError = (field, message = '') => {
    field.setAttribute('aria-invalid', message ? 'true' : 'false');
    document.querySelector(`#${field.id}-error`).textContent = message;
  };

  const validateForm = () => {
    let firstInvalidField = null;

    Object.entries(fields).forEach(([id, requiredMessage]) => {
      const field = document.querySelector(`#${id}`);
      let message = '';

      const isBlankText = field.tagName === 'INPUT' && field.type !== 'checkbox' && !field.value.trim();
      if (field.validity.valueMissing || isBlankText) message = requiredMessage;
      if (id === 'email' && field.validity.typeMismatch) message = 'Enter a valid email address.';
      setFieldError(field, message);
      if (message && !firstInvalidField) firstInvalidField = field;
    });

    if (firstInvalidField) firstInvalidField.focus();
    return !firstInvalidField;
  };

  const setLoading = (isLoading) => {
    submitButton.disabled = isLoading;
    submitButton.setAttribute('aria-busy', String(isLoading));
    buttonLabel.textContent = isLoading ? 'Joining…' : 'Join the beta';
  };

  Object.keys(fields).forEach((id) => {
    const field = document.querySelector(`#${id}`);
    const eventName = field.type === 'checkbox' || field.tagName === 'SELECT' ? 'change' : 'input';
    field.addEventListener(eventName, () => {
      if (field.getAttribute('aria-invalid') === 'true') validateForm();
    });
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
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
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: {
          apikey: SUPABASE_PUBLISHABLE_KEY,
          'Content-Type': 'application/json',
          Prefer: 'return=minimal'
        },
        body: JSON.stringify(payload)
      });

      if (!response.ok) {
        const details = await response.json().catch(() => ({}));
        console.error('HUEO beta signup failed', { status: response.status, details });
        formStatus.textContent = response.status === 409 || details.code === '23505'
          ? 'You’re already on the HUEO beta list.'
          : 'Something went wrong while joining the beta. Please try again.';
        return;
      }

      form.reset();
      form.hidden = true;
      success.hidden = false;
      success.focus();
    } catch (error) {
      console.error('HUEO beta signup request failed', error);
      formStatus.textContent = 'Something went wrong while joining the beta. Please try again.';
    } finally {
      setLoading(false);
    }
  });

  resetButton.addEventListener('click', () => {
    form.reset();
    formStatus.textContent = '';
    Object.keys(fields).forEach((id) => setFieldError(document.querySelector(`#${id}`)));
    success.hidden = true;
    form.hidden = false;
    document.querySelector('#first-name').focus();
  });
})();
