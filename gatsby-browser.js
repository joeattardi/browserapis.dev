import './src/styles/global.css';

function getInitialTheme() {
  if (typeof window === 'undefined') {
    return 'light';
  }

  if (window.sessionStorage?.getItem('theme')) {
    return sessionStorage.getItem('theme');
  }

  return window.matchMedia?.('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function showTheme() {
  document.documentElement.className = getInitialTheme();
}

function showContent() {
  document.body.style.visibility = 'visible';
  document.body.style.opacity = 1;
}

window.addEventListener('DOMContentLoaded', function () {
  showTheme();
  showContent();
});
