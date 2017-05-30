import constants from './constants'
import {getFilm} from 'client/starwarsClient'
import {setIdToResource} from 'helpers/resourceHelper'


export function getFilmIsLoading(loading) {
  return {
    type: constants.FILM_GET_LOADING,
    isLoading: loading
  };
}

export function getFilmSuccess(films) {
  return {
    type: constants.FILM_GET_SUCCESS,
    films
  };
}

export function getFilmsError(error) {
  return {
    type: constants.FILM_GET_FAILURE,
    error
  };
}

export function getFilmsByIdAsync(filmIds) {
  return (dispatch) => {
    dispatch(getFilmIsLoading(true));
    const promises = filmIds.map(getFilm)
    Promise.all(promises)
      .then(films => {
        const filmsWithId = films.map(setIdToResource)
        dispatch(getFilmSuccess(filmsWithId))
        return Promise.resolve()
      })
      .catch(error => dispatch(getFilmsError(error)))
  };
}