import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export function configureStore(history, initialState) {

  const reducer = combineReducers({
    routing: routerReducer
  })

  const store = createStore(
    reducer,
    initialState,
    composeEnhancers(
      applyMiddleware(
        thunkMiddleware,
        routerMiddleware(history)
      ),
    )
  )
  return store;
}