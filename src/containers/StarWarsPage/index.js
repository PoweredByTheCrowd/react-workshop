import React from 'react';
import SearchForm from './SearchForm'
import CharacterList from './CharacterList'
import { searchCharacter } from 'client/starwarsClient'
import { setIdToResource } from 'helpers/resourceHelper'

/**
 * This is the top Component for the "Search a Star Wars character page.
 * It contains a from (SearchForm_ which allows you to search a character name. When a user submits the form a API call is made.
 * The result of the search is then shown in a list. T
 * first take a look at the render method, this renders the results in a list (CharacterList)
**/
class StarWarsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // This is the state of the component, every time  it has been altered (by calling setState()) the component renders again
  state = {
    characters: [],
    isJarJar: false
  }

  //This function allows you to search for a character
  searchCharacter = (name) => {
    const isJarJar = name.toLowerCase().startsWith('jar jar')
    //First the API is called, it returns a promise so we can use then() and use the response
    searchCharacter(`search=${name}`)
      .then(response => {
        //The result of the API call is put in an array. We use the spread operator to copy the results.
        //When there are no results the array is empty.
        let characters = [...response.results]
        //The id of the character is set. The API doesn't provide it, so we use a helper function to determine it.
        characters = characters.map(setIdToResource)
        //Set the characters on the state. The component method setState() is used for this
        //Remember, never ever alter the state directly, bad things might happen.
        this.setState({
          characters: characters,
          isJarJar: isJarJar })
      })
  }

  //This method renders our component. If you are looking for the header,it is rendered in the top of the component tree,
  //which is App.
  //We pass searchCharacter to the SearchForm so we can use the result here.
  render() {
    //Whenever the state is updated the render method is called, the result is rendered in CharacterList.
    //Note that a reference to the function is passed.
    const characters = this.state.characters
    return (
      <div>
        <SearchForm searchFn={this.searchCharacter} />
        {this.state.isJarJar &&
          <h2>Nobody likes Jar Jar binks!</h2>
        }

        {characters &&
          <CharacterList characters={this.state.characters} />
        }

      </div>
    );
  }
}

export default StarWarsPage;