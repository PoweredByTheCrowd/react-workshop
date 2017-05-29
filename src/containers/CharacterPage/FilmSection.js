import React from 'react';
import PropTypes from 'prop-types'
import { Panel } from 'react-bootstrap';
import {getFilm} from 'client/starwarsClient';

class FilmSection extends React.Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    film: null
  }
  static propTypes = {
    filmId: PropTypes.string
  }

  componentDidMount() {
    //Get the filmId from the props.
    const filmId = this.props.filmId
    //Then load the data from the API and set it on the state.
    getFilm(filmId).then(film => this.setState({film: film}))
  }

  render() {
    //If there is a film on the state, then render it.
    const film = this.state.film
    return (
      <div>
        {film &&
        <Panel>
          <h4 className="list-group-item-heading">{film.title}</h4>
          <p>
            {film.opening_crawl}
          </p>
          <div style={{padding: 10}}>
            <ul className="list-group">
              <li className="list-group-item"><label>Episode:</label> {film.episode_id} </li>
              <li className="list-group-item"><label>Release date:</label> {film.release_date}</li>
              <li className="list-group-item"><label>Producer:</label> {film.producer}</li>
              <li className="list-group-item"><label>Director:</label> {film.director}</li>
            </ul>
          </div>
        </Panel>
        }
      </div>
    );
  }
}

export default FilmSection;