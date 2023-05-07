export function openPage() {
  const cssPromices = {};

  function loadResource(src) {
    if (src.endsWith('.js')) {
      return import(src);
    }
    if (src.endsWith('.css')) {
      if (!cssPromices[src]) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = src;
        cssPromices[src] = new Promise(resolve => {
          link.addEventListener('load', () => {
            resolve();
          })
        });
        document.head.append(link);
      }
      return cssPromices[src];
    }
    return fetch(src).then(res => res.json());
  }

  const appConteiner = document.getElementById('app');
  const searchParams = new URLSearchParams(window.location.search);

  const filmId = searchParams.get('filmId');
  const charactersId = searchParams.get('charactersId');
  const planetsId = searchParams.get('planetsId');
  const starshipsId = searchParams.get('starshipsId');
  const peopleId = searchParams.get('peopleId');
  const vehiclesId = searchParams.get('vehiclesId');
  const speciesId = searchParams.get('speciesId');

  function renderPage(moduleName, apiUrl, css) {
    Promise.all(
      [
        moduleName,
        apiUrl,
        css
      ].map(src => loadResource(src))).then(([pageModule, data, css]) => {
      appConteiner.innerHTML = '';
      appConteiner.append(pageModule.render(data))
    })
  }

  if (filmId) {
    renderPage(
      './stars-detail.js',
      `https://swapi.dev/api/films/${filmId}`,
      'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css')
  } else if (charactersId) {
    renderPage(
      './characters-detail.js',
      `https://swapi.dev/api/people/${charactersId}`,
      'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css')
  } else if (planetsId) {
    renderPage(
      './planets-detail.js',
      `https://swapi.dev/api/planets/${planetsId}`,
      'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css')
  } else if (starshipsId) {
    renderPage(
      './starships-detail.js',
      `https://swapi.dev/api/starships/${starshipsId}`,
      'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css')
  } else if (peopleId) {
    renderPage(
      './people-detail.js',
      `https://swapi.dev/api/people/${peopleId}`,
      'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css')
  } else if (vehiclesId) {
    renderPage(
      './vehicles-detail.js',
      `https://swapi.dev/api/vehicles/${vehiclesId}`,
      'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css')
  } else if (speciesId) {
    renderPage(
      './species-detail.js',
      `https://swapi.dev/api/species/${speciesId}`,
      'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css')
  } else {
    renderPage(
      './stars-list.js',
      'https://swapi.dev/api/films/',
      'https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css')
  }
}
openPage();

window.addEventListener('popstate', function (e) {
  openPage();
});
