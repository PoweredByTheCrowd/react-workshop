import config from '../config'

function fetchWithOptions(resource, ...params) {
  const url = `${config.api_endpoint}/${resource}?${params.join('&')}`
  return fetch(url, {
    method: 'GET',
  })
  .then(response => response.json());
}

function fetchById(resource, id) {
  const url = `${config.api_endpoint}/${resource}/${id}`
  return fetch(url, {
    method: 'GET',
  })
  .then(response => response.json());
}

export function searchCharacter(params) {
  return fetchWithOptions('people', params);
}

export function getPerson(id) {
  return fetchById('people', id);
}

export function getFilm(id) {
  return fetchById('films', id);
}

