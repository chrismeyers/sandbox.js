// Config
const defaults = {
  'en-US': {
    hour12: true,
  },
  'en-GB': {
    hour12: false,
  },
};
let locale = localStorage.getItem('locale') || 'en-US';
let options = JSON.parse(localStorage.getItem('options')) || {
  ...defaults[locale],
};

// DOM elements
const time = document.getElementById('time');
const localeOptions = document.getElementById('locale');
const mode = document.getElementById('mode');

// Functions
const clock = () => {
  time.innerText = new Date().toLocaleString(locale, options);
};
const toggleMode = () => {
  mode.checked = !options.hour12;
};
const changeLocale = () => {
  localeOptions.value = locale;
};
const saveLocale = () => localStorage.setItem('locale', locale);
const saveOptions = () =>
  localStorage.setItem('options', JSON.stringify(options));

// Initialization
clock();
toggleMode();
changeLocale();
setInterval(clock, 1000);

// Event listeners
localeOptions.addEventListener('change', (e) => {
  locale = e.target.value;
  options = { ...defaults[locale] };
  saveLocale();
  saveOptions();
  toggleMode();
  clock();
});

mode.addEventListener('change', () => {
  options.hour12 = !mode.checked;
  saveOptions();
  clock();
});
