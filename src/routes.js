import React from 'react'
import { Route, IndexRoute } from 'react-router'
import HomePage from 'containers/HomePage'
import StarWarsPage from 'containers/StarWarsPage'
import CharacterPage from 'containers/CharacterPage'
import App from 'containers/App'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="starwars" component={StarWarsPage}/>
    <Route path="characters/:id" component={CharacterPage}/>
  </Route>
)

export default routes