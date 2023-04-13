const React = require('react');

// Apply the correct theme before rendering to avoid a flash of the wrong theme.
exports.onRenderBody = ({ setPreBodyComponents }) => {
  setPreBodyComponents([
    <script
      key="style"
      dangerouslySetInnerHTML={{
        __html: `
  (function() {
    const darkQuery = window.matchMedia('(prefers-color-scheme: dark)');
    const cachedTheme = sessionStorage.getItem('theme');
    if (cachedTheme != null) {
      document.documentElement.className = cachedTheme;
    } else {
      document.documentElement.className = darkQuery.matches ? 'dark' : 'light';
    }
  })();
  `,
      }}
    />,
  ]);
};
