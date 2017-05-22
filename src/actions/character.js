import constants from './constants'
import {} from 'client/starwarsClient'

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

export function seachCharacterFailed(error) {
  return {
    type: constants.CHARACTER_SEARCH_FAILURE,
    error
  };
}

export function searchCharacter(name) {
  return (dispatch) => {
    dispatch(searchCharacterLoading(true));

  };
}
