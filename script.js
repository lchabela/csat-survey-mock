const COMPLETION_URL =
  'https://docwell.test/survey/complete';

const CANCELLATION_URL =
  'https://docwell.test/survey/cancel';

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
