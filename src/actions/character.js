import constants from './constants'
import {searchCharacter} from 'client/starwarsClient'
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

export function searchCharacterAsync(name) {
  return (dispatch) => {
    dispatch(searchCharacterLoading(true));
    searchCharacter(name)
      .then(response => {
          const characters = response.results.map(character => setIdToResource(character))
          dispatch(searchCharacterSucceeded(characters))
      })
      .catch(error => dispatch(searchCharacterFailed(error)))
  };
}
