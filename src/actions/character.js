import constants from './constants'
import {searchCharacter, getPerson} from 'client/starwarsClient'
import {setIdToResource} from 'helpers/resourceHelper'

export function searchCharacterLoading(loading) {
  return {
    type: constants.CHARACTER_SEARCH_LOADING,
    isLoading: loading
  };
}

export function searchCharacterSucceeded(characters) {
  return {
    type: constants.CHARACTER_SEARCH_SUCCESS,
    characters
  };
}

export function searchCharacterFailed(error) {
  return {
    type: constants.CHARACTER_SEARCH_FAILURE,
    error
  };
}

export function getCharacterLoading(loading) {
  return {
    type: constants.CHARACTER_GET_LOADING,
    isLoading: loading
  };
}

export function getCharacterSucceeded(character) {
  return {
    type: constants.CHARACTER_GET_SUCCESS,
    character
  };
}

export function getCharacterFailed(error) {
  return {
    type: constants.CHARACTER_GET_FAILURE,
    error
  };
}

export function searchCharacterAsync(name) {
  return (dispatch) => {
    dispatch(searchCharacterLoading(true));
    searchCharacter(name)
      .then(response => {
          const characters = response.results.map(character => setIdToResource(character))
          dispatch(searchCharacterSucceeded(characters))
          return Promise.resolve()
      })
      .catch(error => dispatch(searchCharacterFailed(error)))
  };
}

export function getCharacterAsync(id) {
  return (dispatch) => {
    dispatch(getCharacterLoading(true));
    getPerson(id)
      .then(character => {
        const characterWithId = setIdToResource(character)
        dispatch(getCharacterSucceeded(characterWithId))
        return Promise.resolve()
      })
      .catch(error => dispatch(getCharacterFailed(error)))
  };
}

