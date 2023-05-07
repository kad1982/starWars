import {
  createDivList,
  findId,
  createParagraph,
  createLink
} from './func.js'

export function render(data) {
  //console.log('я детальная страница  ', data);
  /*
+MGLT:"60"
+cargo_capacity:"36000000"
+consumables:"2 years"
+cost_in_credits:"150000000"
created:"2014-12-10T15:08:19.848000Z"
+crew:"47,060"
edited:"2014-12-20T21:23:49.870000Z"
+films:(3) ['https://swapi.dev/api/films/1/', 'https://swapi.dev/api/films/2/', 'https://swapi.dev/api/films/3/']
+hyperdrive_rating:"2.0"
+length:"1,600"
manufacturer:"Kuat Drive Yards"
max_atmosphering_speed:"975"
model:"Imperial I-class Star Destroyer"
+name:"Star Destroyer"
passengers:"n/a"
+pilots:["https://swapi.dev/api/people/13/"]
starship_class:"Star Destroyer"
url:"https://swapi.dev/api/starships/3/"
	*/
  const container = document.createElement('div');
  container.classList.add('container', 'd-flex', 'justify-content-between', 'flex-wrap');
  const starShipsCard = document.createElement('div');
  starShipsCard.classList.add('card', 'my-2', 'text-center');
  starShipsCard.style.width = '50%';
  starShipsCard.style.margin = '0 auto';
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
  divBody.append(createParagraph(`MGLT: ${data.MGLT}`));
  divBody.append(createParagraph(`cargo_capacity: ${data.cargo_capacity}`));
  divBody.append(createParagraph(`consumables: ${data.consumables}`));
  divBody.append(createParagraph(`cost_in_credits: ${data.cost_in_credits}`));
  divBody.append(createParagraph(`crew: ${data.crew}`));
  divBody.append(createParagraph(`hyperdrive_rating: ${data.hyperdrive_rating}`));
  divBody.append(createParagraph(`length: ${data.length}`));
  divBody.append(createParagraph(`manufacturer: ${data.manufacturer}`));
  divBody.append(createParagraph(`max_atmosphering_speed: ${data.max_atmosphering_speed}`));
  divBody.append(createParagraph(`model: ${data.model}`));
  divBody.append(createParagraph(`passengers: ${data.passengers}`));
  divBody.append(createParagraph(`starship_class: ${data.starship_class}`));
  starShipsCard.append(divHeader);
  starShipsCard.append(divBody);
  if (data.films.length != 0) {
    starShipsCard.append(createDivList('films', data.films, 'filmId'));
  }
  if (data.pilots.length != 0) {
    starShipsCard.append(createDivList('pilots', data.pilots, 'peopleId'));
  }
  starShipsCard.append(divFooter);
  container.append(starShipsCard);
  return container;
}
