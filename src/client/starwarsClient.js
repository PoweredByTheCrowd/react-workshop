import config from '../config'

function makeOptions(resource, ...params) {
  const url = `${config.api_endpoint}/${resource}?${params.join('&')}`
  return fetch(url, {
    method: 'GET',
  })
  .then(response => response.json());
}

function makeGetOptions(resource, id) {
  const url = `${config.api_endpoint}/${resource}/${id}`
  return fetch(url, {
    method: 'GET',
  })
  .then(response => response.json());
}

export function searchCharacter(params) {
  return makeOptions('people', params);
}

export function getPerson(id) {
  return request(makeGetOptions('people', id));
}

export function getFilm(id) {
  return request(makeGetOptions('films', id));
}

