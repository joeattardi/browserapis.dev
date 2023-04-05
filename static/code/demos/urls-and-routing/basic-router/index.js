const content = document.querySelector('#router-content');
const app = document.querySelector('#app');

function createRouter() {
  const router = {

    // Associates known URL patterns with templates.
    routes: [
      { template: document.querySelector('#template-home'), path: '/demos/urls-and-routing/basic-router/' },
      { template: document.querySelector('#template-about'), path: '/demos/urls-and-routing/basic-router/about/' },
    ],

    /**
     * Renders the content associated with a URL by looking up the associated route.
     *
     * @param the desired URL path
     * @param pushState whether or not to fire a pushState call
     */
    navigate(path, pushState = true) {
      const route = this.routes.find((route) => route.path === path);
      if (route) {
        content.replaceChildren(route.template.content.cloneNode(true));
      }

      // Toggle some CSS classes to indicate the active route
      app.querySelector('.active')?.classList.remove('active');
      app.querySelector(`[href="${path}"`)?.classList.add('active');

      if (pushState) {
        window.history.pushState({}, '', path);
      }
    },
  };

  function renderCurrentUrlContent() {
    const url = window.location.pathname;
    router.navigate(url, false);
  }

  // The `popstate` event fires when the Back or Forward buttons are clicked.
  // We check the new current URL and render the appropriate template.
  window.addEventListener('popstate', () => {
    renderCurrentUrlContent();
  });

  if (window.location.href.endsWith('/full/')) {
    app.querySelectorAll('a').forEach(link => link.href = `${link.getAttribute('href')}full/`);
    router.routes.forEach(route => route.path += 'full/');
  }
  
  // On initial load, look at the URL and figure out what template we should display.
  renderCurrentUrlContent();

  return router;
}

const router = createRouter();

const links = app.querySelectorAll('a');
links.forEach(link => {
  link.addEventListener('click', event => {
    // Prevent the browser from actually navigating.
    event.preventDefault();

    // Perform a client-side only routing action.
    router.navigate(event.target.getAttribute('href'));
  });
});
