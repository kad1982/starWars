import {
  openPage
} from './main.js'
export function findId(str) {
  if (str != null) {
    const indexSlech = str.lastIndexOf('/');
    const indexSleshNext = str.lastIndexOf('/', indexSlech - 1);
    return str.substr(indexSleshNext + 1, indexSlech - indexSleshNext - 1);
  }
}
export function createDivList(nameTitle, listDiv, nameId) {
  const divList = document.createElement('div');
  divList.classList.add('card-header');
  divList.style.border = 'var(--bs-card-border-width) solid var(--bs-card-border-color)';
  const h2 = document.createElement('h2');
  h2.textContent = nameTitle;
  divList.append(h2);
  const list = document.createElement('ul');
  list.classList.add('list-group-flush', 'd-flex', 'flex-wrap');
  list.style.padding = '0';
  for (const item of listDiv) {
    const li = document.createElement('li');
    li.classList.add('list-group-item', 'py-4', 'w-25');
    const link = document.createElement('a');

    fetch(item)
      .then(response => response.json())
      .then(response => {
        if (nameTitle != 'films') {
          link.textContent = `${response['name']}`
        } else {
          link.textContent = `${response['title']}`
        }
      });
    link.href = `?${nameId}=${findId(item)}`;
    link.addEventListener('click', e => {
      e.preventDefault();
      history.pushState(null, null, `?${nameId}=${findId(item)}`);
      openPage();
    })

    li.style.width = " 18rem;";
    li.append(link);
    list.append(li);
  }
  divList.append(list);
  return divList;
}

export function createParagraph(text, type = 'p') {
  const el = document.createElement(type);
  el.classList.add('card-text');
  el.textContent = text;
  return el;
}

export function createLink(text, link) {
  if (link != null) {
    const el = document.createElement('a');
    el.textContent = text;
    el.href = link;

    el.addEventListener('click', e => {
      e.preventDefault();
      history.pushState(null, null, link);
      openPage();
    })

    el.style.marginRight = '12px';
    return el;
  }
}
