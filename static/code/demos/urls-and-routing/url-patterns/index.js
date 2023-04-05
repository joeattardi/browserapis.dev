const form = document.querySelector('form');
const resultsContainer = document.querySelector('#results');

form.addEventListener('submit', event => {
  event.preventDefault();

  const data = new FormData(event.target);

  const patterns = {};
  if (data.get('hostname')) {
    patterns.hostname = data.get('hostname');
  }

  if (data.get('pathname')) {
    patterns.pathname = data.get('pathname');
  }

  const pattern = new window.URLPattern(patterns);

  const matcher = pattern.exec(data.get('url'));

  if (!matcher) {
    const results = document.querySelector('#result-template-noMatch').content.cloneNode(true).firstElementChild;
    results.querySelector('.url').textContent = data.get('url');
    resultsContainer.replaceChildren(results);
  } else {
    console.log('URL matches pattern!');
    console.log('Matcher data:', matcher);

    const results = document.querySelector('#result-template-match').content.cloneNode(true).firstElementChild;
    results.querySelector('.url').textContent = data.get('url');

    const details = results.querySelector('.details');

    details.appendChild(createElement('div', '<strong>Match details:</strong>'));
    details.appendChild(renderMatchGroup(matcher, 'hostname'));
    details.appendChild(renderMatchGroup(matcher, 'pathname'));

    resultsContainer.replaceChildren(results);
  }
});

function renderMatchGroup(matcher, key) {
  const groupList = createElement('ul');
  groupList.appendChild(createElement('li', `<strong>${key}</strong>: ${matcher[key].input}`));

  const matchGroups = createElement('ul');
  groupList.appendChild(matchGroups);

  for (const groupKey of Object.keys(matcher[key].groups)) {
    if (groupKey === '0') {
      continue;
    }

    matchGroups.appendChild(createElement('li', `<strong>${groupKey}</strong>: ${matcher[key].groups[groupKey]}`));
  }

  return groupList;
}

function createElement(tagName, content = '') {
  const el = document.createElement(tagName);
  el.innerHTML = content;
  return el;
}