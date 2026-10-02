const COMPLETION_URL = 'https://docwell.app/survey/complete';
const CANCELLATION_URL = 'https://docwell.app/survey/cancel';

const params = new URLSearchParams(window.location.search);

// Apply the requested theme. Default to light.
const requestedTheme = params.get('theme')?.toLowerCase();
const theme = requestedTheme === 'dark' ? 'dark' : 'light';

document.documentElement.dataset.theme = theme;

const paramsContainer = document.getElementById('query-params');

if (params.size === 0) {
  const empty = document.createElement('p');
  empty.className = 'empty';
  empty.textContent = 'No query parameters received.';
  paramsContainer.appendChild(empty);
} else {
  for (const [key, value] of params.entries()) {
    const row = document.createElement('div');
    row.className = 'param-row';

    const keyElement = document.createElement('code');
    keyElement.textContent = key;

    const valueElement = document.createElement('code');
    valueElement.textContent = value;

    row.append(keyElement, valueElement);
    paramsContainer.appendChild(row);
  }
}

document
  .getElementById('survey')
  .addEventListener('submit', event => {
    event.preventDefault();
    window.location.href = COMPLETION_URL;
  });

document
  .getElementById('cancel')
  .addEventListener('click', () => {
    window.location.href = CANCELLATION_URL;
  });
