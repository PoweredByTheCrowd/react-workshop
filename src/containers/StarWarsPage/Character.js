import React from 'react';
import PropTypes from 'prop-types'
import { Panel } from 'react-bootstrap';
import {Link} from 'react-router';
class Character extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    characters: PropTypes.object.isRequired
  }

  render() {
    const character = this.props.character
    return (
      <Panel>
        <h4 className="list-group-item-heading">{character.name}</h4>
        <div style={{ padding: 10 }}>
          <ul className="list-group">
            <li className="list-group-item"> <label>Gender:</label> {character.gender} </li>
            <li className="list-group-item"><label>Birth year:</label> {character.birth_year}</li>
            <li className="list-group-item"><label>Hair color:</label> {character.hair_color}</li>
            <li className="list-group-item"><label>Height:</label> {character.height}</li>
            <li className="list-group-item"><Link to={`/characters/${character.id}`} >Character details</Link></li>
          </ul>
        </div>
      </Panel>
    );
  }
}

export default Character;

