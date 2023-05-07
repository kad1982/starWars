import {
  createDivList,
  findId,
  createParagraph,
  createLink
} from './func.js'

export function render(data) {
  //console.log('я детальная страница  ', data);

  /*
	+birth_year: "19BBY"
created:"2014-12-09T13:50:51.644000Z"
edited:"2014-12-20T21:17:56.891000Z"
+eye_color:"blue"
+films:(4) ['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/2/', 'https://swapi.dev/api/films/3/', 'https://swapi.dev/api/films/6/']
+gender:"male"
+hair_color:"blond"
+height:"172"
+homeworld:"https://swapi.dev/api/planets/1/"
+mass:"77"
+name:"Luke Skywalker"
+skin_color:"fair"
+species:[]
+starships:(2) ['https://swapi.dev/api/starships/12/', 'https://swapi.dev/api/starships/22/']
url:"https://swapi.dev/api/people/1/"
+vehicles:(2) ['https://swapi.dev/api/vehicles/14/', 'https://swapi.dev/api/vehicles/30/']
*/
  const container = document.createElement('div');
  container.classList.add('container', 'd-flex', 'justify-content-between', 'flex-wrap');
  const charactersCard = document.createElement('div');
  charactersCard.classList.add('card', 'my-2', 'text-center');
  charactersCard.style.width = '50%';
  charactersCard.style.margin = '0 auto';
  const divHeader = document.createElement('div');
  divHeader.classList.add('card-header');
  divHeader.textContent = data.name;
  const divBody = document.createElement('div');
  divBody.classList.add('card-body');
  const divFooter = document.createElement('div');
  divFooter.classList.add('card-footer', 'text-muted');
  if (data.homeworld != null) {
    divFooter.append(createLink('homeworld', `?planetsId=${findId(data.homeworld)}`));
  }
  if (data.url != null) {
    divFooter.append(createLink('url', `?peopleId=${findId(data.url)}`));
  }
  divBody.append(createParagraph(`birth_year: ${data.birth_year}`));
  divBody.append(createParagraph(`eye_color: ${data.eye_color}`));
  divBody.append(createParagraph(`gender: ${data.gender}`));
  divBody.append(createParagraph(`hair_color: ${data.hair_color}`));
  divBody.append(createParagraph(`height: ${data.height}`));
  divBody.append(createParagraph(`mass: ${data.mass}`));
  divBody.append(createParagraph(`skin_color: ${data.skin_color}`));
  charactersCard.append(divHeader);
  charactersCard.append(divBody);
  if (data.films.length != 0) {
    charactersCard.append(createDivList('films', data.films, 'filmId'));
  }
  if (data.species.length != 0) {
    charactersCard.append(createDivList('Species', data.species, 'speciesId'));
  }
  if (data.starships.length != 0) {
    charactersCard.append(createDivList('Starships', data.starships, 'starshipsId'));
  }
  if (data.vehicles.length != 0) {
    charactersCard.append(createDivList('Vehicles', data.vehicles, 'vehiclesId'));
  }
  charactersCard.append(divFooter);
  container.append(charactersCard);
  return container;
}
