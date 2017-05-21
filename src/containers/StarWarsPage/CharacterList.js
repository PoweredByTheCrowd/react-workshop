import React from 'react';
import PropTypes from 'prop-types'
import Character from './Character'

class CharacterList extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    characters: PropTypes.array
  }

  renderCharacter = (character) => {
    return (<Character character={character}/>)
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
        {characters
          && characters.map(character => this.renderCharacter(character))
        }
     </div>
    );
  }
}

export default CharacterList;

