import constants from './constants'
import {searchCharacter, getPerson} from 'client/starwarsClient'
import {setIdToResource} from 'helpers/resourceHelper'

export function setCurrentCharacter(character) {
  return {
    type: constants.CHARACTER_SET_CURRENT,
    character: character
  };
}

//This file contains the actions that can be dispatched to the reducers.

//When we call the API we should tell the Redux state that we are in loading state.
export function searchCharacterLoading(loading) {
  return {
    type: constants.CHARACTER_SEARCH_LOADING,
    isLoading: loading
  };
}

//When the API call is successful we can set the result (characters) on the state. Then we can use it in our components.
export function searchCharacterSucceeded(characters) {
  return {
    type: constants.CHARACTER_SEARCH_SUCCESS,
    characters
  };
}

//If something went wrong we should we set the error on the state. In the reducer we will take care of that.
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

//This function does not return an action. It returns a function! Because we are using thunk middleware we can also
// return a function. Thunk will pick up the function and execute it. Now we can call the API and set the result on
// the state asynchronously.
//Note that a function is returned that takes dispatch as an argument. Thunk passes dispatch to this function so we can
// dispatch actions!
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