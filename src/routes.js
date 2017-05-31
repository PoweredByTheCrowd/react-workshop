import React from 'react'
import { Route, IndexRoute } from 'react-router'
import HomePage from 'containers/HomePage'
import StarWarsPage from 'containers/StarWarsPage'
import CharacterPage from 'containers/CharacterPage'
import ES6Page from 'containers/ES6Page'
import App from 'containers/App'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="starwars" component={StarWarsPage}/>
    <Route path="characters/:id" component={CharacterPage}/>
    <Route path="es6" component={ES6Page} />
  </Route>
)

export default routes