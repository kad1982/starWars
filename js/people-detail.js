import {
  createDivList,
  findId,
  createParagraph,
  createLink
} from './func.js'

export function render(data) {
  //console.log('я детальная страница  ', data);
  /*
birth_year:"unknown"
created:"2014-12-20T19:49:35.583000Z"
edited:"2014-12-20T21:17:50.493000Z"
eye_color:"brown"
+films:(2) ['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/6/']
gender:"male"
hair_color:"brown"
height:"188"
+homeworld:"https://swapi.dev/api/planets/2/"
mass:"79"
name:"Raymus Antilles"
skin_color:"light"
+species:[]
+starships:[]
+url:"https://swapi.dev/api/people/81/"
+vehicles:[]
	*/
  const container = document.createElement('div');
  container.classList.add('container', 'd-flex', 'justify-content-between', 'flex-wrap');
  const peopleCard = document.createElement('div');
  peopleCard.classList.add('card', 'my-2', 'text-center');
  peopleCard.style.width = '50%';
  peopleCard.style.margin = '0 auto';
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
  peopleCard.append(divHeader);
  peopleCard.append(divBody);
  if (data.films.length != 0) {
    peopleCard.append(createDivList('films', data.films, 'filmId'));
  }
  if (data.species.length != 0) {
    peopleCard.append(createDivList('Species', data.species, 'speciesId'));
  }
  if (data.starships.length != 0) {
    peopleCard.append(createDivList('Starships', data.starships, 'starshipsId'));
  }
  if (data.vehicles.length != 0) {
    peopleCard.append(createDivList('Vehicles', data.vehicles, 'vehiclesId'));
  }
  peopleCard.append(divFooter);
  container.append(peopleCard);
  return container;

}
