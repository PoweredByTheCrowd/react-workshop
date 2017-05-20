import React from 'react'
import { Route, IndexRoute } from 'react-router'
import HomePage from 'containers/HomePage'
import SpotifyPage from 'containers/SpotifyPage'
import ExamplePage from 'containers/ExamplePage'
import App from 'containers/App'

const routes = (
  <Route path="/" component={App}>
    <IndexRoute component={HomePage}/>
    <Route path="spotify" component={SpotifyPage}/>
    <Route path="example" component={ExamplePage}/>
  </Route>
)

export default routes