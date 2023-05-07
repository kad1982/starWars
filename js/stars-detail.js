import {
  createParagraph,
  createDivList,
  createLink
} from './func.js'

export function render(data) {
  //console.log('я детальная страница поста ', data);
  /*
  <div class="card text-center">
    <div class="card-header">
      Featured
    </div>
    <div class="card-body">
      <h5 class="card-title">Special title treatment</h5>
      <p class="card-text">With supporting text below as a natural lead-in to additional content.</p>
      <a href="#" class="btn btn-primary">Go somewhere</a>
    </div>
    <div class="card-footer text-muted">
      2 days ago
    </div>
  </div>
  */
  /*
  +characters:(18) ['https://swapi.dev/api/people/1/', 'https://swapi.dev/api/people/2/', 'https://swapi.dev/api/people/3/', 'https://swapi.dev/api/people/4/', 'https://swapi.dev/api/people/5/', 'https://swapi.dev/api/people/6/', 'https://swapi.dev/api/people/7/', 'https://swapi.dev/api/people/8/', 'https://swapi.dev/api/people/9/', 'https://swapi.dev/api/people/10/', 'https://swapi.dev/api/people/12/', 'https://swapi.dev/api/people/13/', 'https://swapi.dev/api/people/14/', 'https://swapi.dev/api/people/15/', 'https://swapi.dev/api/people/16/', 'https://swapi.dev/api/people/18/', 'https://swapi.dev/api/people/19/', 'https://swapi.dev/api/people/81/']

  created:"2014-12-10T14:23:31.880000Z"
  +director:"George Lucas"
  edited:"2014-12-20T19:49:45.256000Z"
  +episode_id:4
  +opening_crawl:"It is a period of civil war.\r\nRebel spaceships, striking\r\nfrom a hidden base, have won\r\ntheir first victory against\r\nthe evil Galactic Empire.\r\n\r\nDuring the battle, Rebel\r\nspies managed to steal secret\r\nplans to the Empire's\r\nultimate weapon, the DEATH\r\nSTAR, an armored space\r\nstation with enough power\r\nto destroy an entire planet.\r\n\r\nPursued by the Empire's\r\nsinister agents, Princess\r\nLeia races home aboard her\r\nstarship, custodian of the\r\nstolen plans that can save her\r\npeople and restore\r\nfreedom to the galaxy...."

  +planets:(3) ['https://swapi.dev/api/planets/1/', 'https://swapi.dev/api/planets/2/', 'https://swapi.dev/api/planets/3/']

  +producer:"Gary Kurtz, Rick McCallum"
  +release_date"1977-05-25"

  +species:(5) ['https://swapi.dev/api/species/1/', 'https://swapi.dev/api/species/2/', 'https://swapi.dev/api/species/3/', 'https://swapi.dev/api/species/4/', 'https://swapi.dev/api/species/5/']
  +starships:(8) ['https://swapi.dev/api/starships/2/', 'https://swapi.dev/api/starships/3/', 'https://swapi.dev/api/starships/5/', 'https://swapi.dev/api/starships/9/', 'https://swapi.dev/api/starships/10/', 'https://swapi.dev/api/starships/11/', 'https://swapi.dev/api/starships/12/', 'https://swapi.dev/api/starships/13/']

  +title:"A New Hope"
  +url:"https://swapi.dev/api/films/1/"
  +vehicles:(4) ['https://swapi.dev/api/vehicles/4/', 'https://swapi.dev/api/vehicles/6/', 'https://swapi.dev/api/vehicles/7/', 'https://swapi.dev/api/vehicles/8/']

  <div class="card" style="width: 18rem;">
    <div class="card-header">
      Featured
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">An item</li>
      <li class="list-group-item">A second item</li>
      <li class="list-group-item">A third item</li>
    </ul>
  </div>

  */
  const container = document.createElement('div');
  container.classList.add('container', 'd-flex', 'justify-content-between', 'flex-wrap');
  const filmCard = document.createElement('div');
  filmCard.classList.add('card', 'my-2', 'text-center');
  const divHeader = document.createElement('div');
  divHeader.classList.add('card-header');
  divHeader.textContent = `episode ${data.episode_id}`;
  const divBody = document.createElement('div');
  divBody.classList.add('card-body');
  const divFooter = document.createElement('div');
  divFooter.classList.add('card-footer', 'text-muted');
  divFooter.textContent = `release_date: ${data.release_date}`;
  divBody.append(createParagraph(`title: ${data.title}`, 'h1'));
  divBody.append(createParagraph(`director: ${data.director}`));
  divBody.append(createParagraph(`producer: ${data.producer}`));
  divBody.append(`descr: ${data.opening_crawl}`);
  filmCard.append(divHeader);
  filmCard.append(divBody);

  if (data.characters.length != 0) {
    filmCard.append(createDivList('Characters', data.characters, 'charactersId'));
  }
  if (data.planets.length != 0) {
    filmCard.append(createDivList('Planets', data.planets, 'planetsId'));
  }
  if (data.species.length != 0) {
    filmCard.append(createDivList('Species', data.species, 'speciesId'));
  }
  if (data.starships.length != 0) {
    filmCard.append(createDivList('Starships', data.starships, 'starshipsId'));
  }
  if (data.vehicles.length != 0) {
    filmCard.append(createDivList('Vehicles', data.vehicles, 'vehiclesId'));
  }
  filmCard.append(divFooter);
  container.append(filmCard);
  const btn = createLink('Back to episodes', `index.html`);
  btn.classList.add('btn');
  btn.classList.add('btn-primary');
  container.append(btn);

  return container;
}
