import config from '../config'

function makeOptions(resource, ...params) {
  const url = `${config.api_endpoint}/${resource}?${params.join('&')}`
  return fetch(url, {
    method: 'GET',
  })
  .then(response => response.json());
}

export function searchCharacter(params) {
  return makeOptions('people', params);
}

