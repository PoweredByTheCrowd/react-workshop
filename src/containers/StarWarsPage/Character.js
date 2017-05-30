import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'
import { Panel } from 'react-bootstrap';
import {Link} from 'react-router'
import {push} from 'react-router-redux'
import {setCurrentCharacter} from 'actions/character'

class Character extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    character: PropTypes.object.isRequired,
    setCharacter: PropTypes.func.isRequired,
    push: PropTypes.func.isRequired
  }

  navigateToCharacter = (event) => {
    event.preventDefault()
    const {setCharacter, push, character} = this.props
    setCharacter(character)
    push(`/characters/${character.id}`)
  }

  //this Component renders the information of a character
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
            <li className="list-group-item"><Link onClick={this.navigateToCharacter} >Character details</Link></li>
          </ul>
        </div>
      </Panel>
    );
  }
}

const mapStateToProps = () => {
  return {};
};

const mapDispatchToProps = (dispatch) => {
  return {
    setCharacter: (character) => dispatch(setCurrentCharacter(character)),
    push: (url) => dispatch(push(url))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Character);


