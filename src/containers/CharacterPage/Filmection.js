import React from 'react';
import PropTypes from 'prop-types'
import { Panel } from 'react-bootstrap';
import {getFilm} from 'client/starwarsClient';

class FilmSection extends React.Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    film: null
  }
  static propTypes = {
    filmId: PropTypes.number
  }

  componentDidMount() {
    //this is the id of the character that you will be using
    const filmId = this.props.filmId
    getFilm(filmId).then(film => this.setState({film: film}))
  }

  render() {
    const film = this.state.film
    return (
      <div>
        {film &&
          <Panel>
            <h4 className="list-group-item-heading">{film.title}</h4>
            <div style={{padding: 10}}>
              <ul className="list-group">
                <li className="list-group-item"><label>Episode:</label> {film.episode_id} </li>
                <li className="list-group-item"><label>Release date:</label> {film.release_date}</li>
                <li className="list-group-item"><label>Producer:</label> {film.producer}</li>
                <li className="list-group-item"><label>Director:</label> {film.director}</li>
              </ul>
              <p>
                {film.opening_crawl}
              </p>
            </div>
          </Panel>
        }
      </div>
    );
  }
}

export default FilmSection;