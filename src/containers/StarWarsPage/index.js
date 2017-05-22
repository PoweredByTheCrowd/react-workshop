import React from 'react';
import SearchForm from './SearchForm'
import CharacterList from './CharacterList'
import {queryPeople} from 'client/starwarsClient'
import getResourceId from 'helpers/getResourceId'

class StarWarsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    characters: []
  }

  determineCharacterId = (character) => {
    character.id = getResourceId( character.url)
  }

  searchCharacter = (name) => {
    queryPeople(name)
      .then(response => {
        const characters =  [...response.results]
        characters.forEach(character => this.determineCharacterId(character))
        this.setState({characters: characters})
      })
  }

  render() {
    const characters = this.state.characters
    return (
      <div>
        <SearchForm searchFn={this.searchCharacter} />
        {characters &&
          <CharacterList characters={this.state.characters} />
        }
      </div>
    );
  }
}

export default StarWarsPage;