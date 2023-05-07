import {
  createDivList,
  findId,
  createParagraph,
  createLink
} from './func.js'

export function render(data) {
  //console.log('я детальная страница  ', data);
  /*
	cargo_capacity:"5"
consumables:"unknown"
cost_in_credits:"10550"
created:"2014-12-10T16:13:52.586000Z"
crew:"1"
edited:"2014-12-20T21:30:21.668000Z"
+films:['https://swapi.dev/api/films/1/']
length:"3.4 "
manufacturer:"SoroSuub Corporation"
max_atmosphering_speed:"250"
model:"X-34 landspeeder"
+name:"X-34 landspeeder"
passengers:"1"
+pilots:["https://swapi.dev/api/people/1/"]
+url:"https://swapi.dev/api/vehicles/7/"
vehicle_class:"repulsorcraft"
	*/
  const container = document.createElement('div');
  container.classList.add('container', 'd-flex', 'justify-content-between', 'flex-wrap');

  const vehiclesCard = document.createElement('div');
  vehiclesCard.classList.add('card', 'my-2', 'text-center');
  vehiclesCard.style.width = '50%';
  vehiclesCard.style.margin = '0 auto';
  const divHeader = document.createElement('div');
  divHeader.classList.add('card-header');
  divHeader.textContent = data.name;
  const divBody = document.createElement('div');
  divBody.classList.add('card-body');
  const divFooter = document.createElement('div');
  divFooter.classList.add('card-footer', 'text-muted');
  if (data.url != null) {
    divFooter.append(createLink('url', `?vehiclesId=${findId(data.url)}`));
  }
  divBody.append(createParagraph(`cargo_capacity: ${data.cargo_capacity}`));
  divBody.append(createParagraph(`consumables: ${data.consumables}`));
  divBody.append(createParagraph(`cost_in_credits: ${data.cost_in_credits}`));
  divBody.append(createParagraph(`crew: ${data.crew}`));
  divBody.append(createParagraph(`manufacturer: ${data.manufacturer}`));
  divBody.append(createParagraph(`max_atmosphering_speed: ${data.max_atmosphering_speed}`));
  divBody.append(createParagraph(`model: ${data.model}`));
  divBody.append(createParagraph(`passengers: ${data.passengers}`));
  divBody.append(createParagraph(`vehicle_class: ${data.vehicle_class}`));
  vehiclesCard.append(divHeader);
  vehiclesCard.append(divBody);
  if (data.films.length != 0) {
    vehiclesCard.append(createDivList('films', data.films, 'filmId'));
  }
  if (data.pilots.length != 0) {
    vehiclesCard.append(createDivList('Pilots', data.pilots, 'peopleId'));
  }
  vehiclesCard.append(divFooter);
  container.append(vehiclesCard);
  return container;
}
