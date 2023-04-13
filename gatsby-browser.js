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
const initialTheme = getInitialTheme();

document.documentElement.className = initialTheme;
// console.log(document.documentElement);