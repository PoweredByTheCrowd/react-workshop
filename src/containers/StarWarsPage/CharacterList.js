import React from 'react';
import PropTypes from 'prop-types'
import Character from './Character'

class CharacterList extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    characters: PropTypes.array
  }

  //Returns a Character component, this is used in the render method
  //The key property is something that is required by React
  renderCharacter = (character, index) => {
    return (<Character key={index} character={character}/>)
  }

  render() {
    const characters = this.props.characters
    return (
      <div>
        {characters && characters.length > 0 &&
        <div className="text-center">
          <h3>Results</h3>
        </div>
        }
        {//here we create a Character component or each character we have received
         // the map function iterates over the list of characters and returns <Character .../>
          characters
          && characters.map((character, index) => this.renderCharacter(character, index))
        }
     </div>
    );
  }
}

export default CharacterList;

