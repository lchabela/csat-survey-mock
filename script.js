const COMPLETION_URL = 'https://docwell.app/survey/complete';
const CANCELLATION_URL = 'https://docwell.app/survey/cancel';

const params = new URLSearchParams(window.location.search);
const paramsContainer = document.getElementById('query-params');

if (params.size === 0) {
  paramsContainer.innerHTML = '<p class="empty">No query parameters received.</p>';
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
  .getElementById('complete')
  .addEventListener('click', () => {
    window.location.href = COMPLETION_URL;
  });

document
  .getElementById('cancel')
  .addEventListener('click', () => {
    window.location.href = CANCELLATION_URL;
  });
