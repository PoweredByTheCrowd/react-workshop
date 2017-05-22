import request from 'request-promise-native'
import config from '../config'

function makeOptions(resource, ...params) {
  const url = `${config.api_endpoint}/${resource}?${params.join('&')}`
  return {
    method: 'GET',
    uri: url,
    json: true // Automatically stringifies the body to JSON
  };
}

export function searchCharacter(params) {
  return request(makeOptions('people', params));
}



