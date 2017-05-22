import constants from 'actions/constants'

export default function reducer (state = {}, action = {}) {
  switch (action.type) {
    case constants.FILM_GET_LOADING:
      return {
        ...state,
        isLoading: action.isLoading,
        films: [],
        error: null
      };
    case constants.FILM_GET_SUCCESS:
      return {
        ...state,
        isLoading: false,
        films: action.films
      };
    case constants.FILM_GET_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.error
      }
    default:
      return state;
  }
}
