import constants from 'actions/constants'

export default function reducer (state = {}, action = {}) {
  switch (action.type) {
    case constants.CHARACTER_SET_CURRENT:
      return {
        ...state,
        character: action.character,
      }
    case constants.CHARACTER_SEARCH_LOADING:
      return {
        ...state,
        isSearchLoading: action.isLoading,
        characters: [],
        searchError: null
      };
    case constants.CHARACTER_SEARCH_SUCCESS:
      return {
        ...state,
        isSearchLoading: false,
        characters: action.characters
      };
    case constants.CHARACTER_SEARCH_FAILURE:
      return {
        ...state,
        isSearchLoading: false,
        searchError: action.error
      };
    case constants.CHARACTER_GET_LOADING:
      return {
        ...state,
        isGetLoading: action.isLoading,
        character: null,
        getError: null
      };
    case constants.CHARACTER_GET_SUCCESS:
      return {
        ...state,
        isGetLoading: false,
        character: action.character
      };
    case constants.CHARACTER_GET_FAILURE:
      return {
        ...state,
        isGetLoading: false,
        getError: action.error
      };
    default:
      return state;
  }
}
