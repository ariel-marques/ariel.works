(() => {
  const form = document.querySelector('#beta-form');
  const success = document.querySelector('#form-success');
  const resetButton = document.querySelector('#reset-form');
  const year = document.querySelector('#year');

  year.textContent = new Date().getFullYear();

  form.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!form.checkValidity()) {
      form.reportValidity();
      return;
    }

    // UI-only prototype: replace this transition with the beta signup API call.
    form.hidden = true;
    success.hidden = false;
    success.focus();
  });

  resetButton.addEventListener('click', () => {
    form.reset();
    success.hidden = true;
    form.hidden = false;
    document.querySelector('#first-name').focus();
  });
})();
