import constants from 'actions/constants'

//This function is your reducer for films. Take a look at the character file for inspiration

export default function reducer (state = {}, action = {}) {
  switch (action.type) {
    case constants.FILM_GET_LOADING:
      //Write your first handler here
    default:
      return state;
  }
}

