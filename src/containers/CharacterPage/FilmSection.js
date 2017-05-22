import React from 'react';
import PropTypes from 'prop-types'
import { Panel } from 'react-bootstrap';

class FilmSection extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    film: PropTypes.object
  }

  render() {
    const {film} = this.props
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