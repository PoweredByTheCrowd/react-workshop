import constants from 'actions/constants'

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
