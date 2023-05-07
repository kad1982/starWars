import {
  createDivList,
  findId,
  createParagraph,
  createLink
} from './func.js'

export function render(data) {
  //console.log('я детальная страница  ', data);
  /*
	average_height:"180"
average_lifespan:"70"
classification:"amphibian"
created:"2014-12-20T10:18:58.610000Z"
designation:"sentient"
edited:"2014-12-20T21:36:42.181000Z"
eye_colors:"black"
+films:['https://swapi.dev/api/films/4/']
hair_colors:"none"
homeworld:"https://swapi.dev/api/planets/44/"
language:"Nautila"
+name:"Nautolan"
+people:['https://swapi.dev/api/people/53/']
skin_colors:"green, blue, brown, red"
+url:"https://swapi.dev/api/species/21/"

	*/
  const container = document.createElement('div');
  container.classList.add('container', 'd-flex', 'justify-content-between', 'flex-wrap');

  const speciesCard = document.createElement('div');
  speciesCard.classList.add('card', 'my-2', 'text-center');
  speciesCard.style.width = '50%';
  speciesCard.style.margin = '0 auto';
  const divHeader = document.createElement('div');
  divHeader.classList.add('card-header');
  divHeader.textContent = data.name;
  const divBody = document.createElement('div');
  divBody.classList.add('card-body');
  const divFooter = document.createElement('div');
  divFooter.classList.add('card-footer', 'text-muted');
  if (data.url != null) {
    divFooter.append(createLink('url', `?speciesId=${findId(data.url)}`));
  }
  if (data.homeworld != null) {
    divFooter.append(createLink('homeworld', `?planetsId=${findId(data.homeworld)}`));
  }
  divBody.append(createParagraph(`average_height: ${data.average_height}`));
  divBody.append(createParagraph(`average_lifespan: ${data.average_lifespan}`));
  divBody.append(createParagraph(`classification: ${data.classification}`));
  divBody.append(createParagraph(`designation: ${data.designation}`));
  divBody.append(createParagraph(`eye_colors: ${data.eye_colors}`));
  divBody.append(createParagraph(`hair_colors: ${data.hair_colors}`));
  divBody.append(createParagraph(`language: ${data.language}`));
  divBody.append(createParagraph(`skin_colors: ${data.skin_colors}`));
  speciesCard.append(divHeader);
  speciesCard.append(divBody);
  if (data.films.length != 0) {
    speciesCard.append(createDivList('films', data.films, 'filmId'));
  }
  if (data.people.length != 0) {
    speciesCard.append(createDivList('people', data.people, 'peopleId'));
  }
  speciesCard.append(divFooter);
  container.append(speciesCard);
  return container;
}
