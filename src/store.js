import { createStore, combineReducers, compose, applyMiddleware } from 'redux'
import { routerReducer, routerMiddleware } from 'react-router-redux'
import thunkMiddleware from 'redux-thunk'
// we don't need DevTools for now
import DevTools from 'containers/DevTools'
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
      // DevTools.instrument()
    )
  )

  // if (module.hot) {
  //   module.hot.accept('./reducers', () =>
  //     store.replaceReducer(require('./reducers')/*.default if you use Babel 6+ */)
  //   );
  // }

  return store;
}