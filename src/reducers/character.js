import constants from 'actions/constants'

//A reducer takes the current state and an action.
//We check to action type to see what we have to do. Then we return the next state. We do not alter the state directly.
//For this we use the spread operator (three dots) it makes a copy of our state object and we provide the new/altered
// data.
export default function reducer (state = {}, action = {}) {
  switch (action.type) {
    case constants.CHARACTER_SEARCH_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
        characters: [],
        error: null
      };
    case constants.CHARACTER_SEARCH_SUCCESS:
      return {
        ...state,
        isLoading: false,
        characters: action.characters
      };
    case constants.CHARACTER_SEARCH_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    default:
      return state;
  }
}
