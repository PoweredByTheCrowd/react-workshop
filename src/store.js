import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import thunk from 'redux-thunk'
import character from 'reducers/character'
import film from 'reducers/film'


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore(history, initialState) {

  const reducer = combineReducers({
    character: character,
    film: film,
    routing: routerReducer
  })

  return createStore(
    reducer,
    initialState,
    composeEnhancers(
      applyMiddleware(
        thunk,
        routerMiddleware(history)
      )
    )
  )
}