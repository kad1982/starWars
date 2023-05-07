import {
  createDivList,
  findId,
  createParagraph,
  createLink
} from './func.js'

export function render(data) {
  //console.log('я детальная страница  ', data);
  /*climate:"temperate, tropical"
created:"2014-12-10T11:37:19.144000Z"
+diameter:"10200"
edited:"2014-12-20T20:58:18.421000Z"
+films:['https://swapi.dev/api/films/1/']
+gravity:"1 standard"
+name:"Yavin IV"
+orbital_period:"4818"
+population:"1000"
+residents:[]
+rotation_period:"24"
+surface_water:"8"
+terrain:"jungle, rainforests"
url:"https://swapi.dev/api/planets/3/"*/

  const container = document.createElement('div');
  container.classList.add('container', 'd-flex', 'justify-content-between', 'flex-wrap');
  const planetsCard = document.createElement('div');
  planetsCard.classList.add('card', 'my-2', 'text-center');
  planetsCard.style.width = '50%';
  planetsCard.style.margin = '0 auto';
  const divHeader = document.createElement('div');
  divHeader.classList.add('card-header');
  divHeader.textContent = data.name;
  const divBody = document.createElement('div');
  divBody.classList.add('card-body');
  const divFooter = document.createElement('div');
  divFooter.classList.add('card-footer', 'text-muted');
  if (data.url != null) {
    divFooter.append(createLink('url', `?planetsId=${findId(data.url)}`));
  }
  divBody.append(createParagraph(`diameter: ${data.diameter}`));
  divBody.append(createParagraph(`gravity: ${data.gravity}`));
  divBody.append(createParagraph(`orbital_period: ${data.orbital_period}`));
  divBody.append(createParagraph(`population: ${data.population}`));
  divBody.append(createParagraph(`rotation_period: ${data.rotation_period}`));
  divBody.append(createParagraph(`surface_water: ${data.surface_water}`));
  divBody.append(createParagraph(`terrain: ${data.terrain}`));
  planetsCard.append(divHeader);
  planetsCard.append(divBody);
  if (data.films.length != 0) {
    planetsCard.append(createDivList('films', data.films, 'filmId'));
  }
  if (data.residents.length != 0) {
    planetsCard.append(createDivList('residents', data.residents, 'peopleId'));
  }
  planetsCard.append(divFooter);
  container.append(planetsCard);
  return container;
}
