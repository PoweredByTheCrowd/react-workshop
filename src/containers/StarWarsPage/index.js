import React from 'react';
import SearchForm from './SearchForm'
import CharacterList from './CharacterList'
import {queryPeople} from 'client/starwarsClient'

class StarWarsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    characters: []
  }

  searchCharacter = (name) => {
    queryPeople(name)
      .then(response => {
        this.setState({characters: [...response.results]})
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