import React from 'react';
import H2 from 'components/H2'
import {getPerson} from 'client/starwarsClient';
import {getResourceId} from 'helpers/resourceHelper'
import FilmSection from './FilmSection'

class CharacterPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    //When your character is loaded you can set it to the state.
  }

  componentDidMount() {
    //this is the id of the character that you will be using
    const characterId = this.props.params.id //
    //Retrieve the character via the starwarsClient, then set it to the state
    //This will cause the component to render again
    getPerson(characterId)
      .then(character => this.setState({character: character}))

  }

  makeFilmSection = (filmUrl) => {
    const filmId = getResourceId(filmUrl)
    return (
      <FilmSection key={filmId} filmId={filmId}/>
    )
  }

  render() {
    //If we have a character on the state then we render it
    //Otherwise we show an empty <div>
    const character = this.state.character
    return (
      <div>
        {character &&
        <div>
          <div className="text-center">
            <H2>{character.name}</H2>
          </div>
          <div style={{padding: 10}}>
            <ul className="list-group">
              <li className="list-group-item"><label>Gender:</label> {character.gender} </li>
              <li className="list-group-item"><label>Birth year:</label> {character.birth_year}</li>
              <li className="list-group-item"><label>Hair color:</label> {character.hair_color}</li>
              <li className="list-group-item"><label>Height:</label> {character.height}</li>
            </ul>
          </div>
          <div className="text-center">
            <h2>Films</h2>
          </div>
          {
            //This function returns a FilmSection for every item in the films array on character
            character.films.map(filmUrl => this.makeFilmSection(filmUrl))
          }
        </div>
        }
      </div>
    );
  }
}

export default CharacterPage;