import React from 'react';
import {getPerson} from 'client/starwarsClient';
import getResourceId from 'helpers/getResourceId';
import FilmSection from './Filmection';


class CharacterPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    character: null
  }

  componentDidMount() {
    //this is the id of the character that you will be using
    const characterId = this.props.params.id
    getPerson(characterId).then(character => this.setState({character: character}))
  }

  makeFilmSection = (filmUrl) => {
    const filmId = getResourceId(filmUrl)
    return (
      <FilmSection filmId={filmId}/>
    )
  }

  render() {
    const character = this.state.character
    return (
      <div>
        {character &&
        <div>
          <div className="text-center">
            <h2>{character.name}</h2>
          </div>
          <div style={{padding: 10}}>
            <ul className="list-group">
              <li className="list-group-item"><label>Gender:</label> {character.gender} </li>
              <li className="list-group-item"><label>Birth year:</label> {character.birth_year}</li>
              <li className="list-group-item"><label>Hair color:</label> {character.hair_color}</li>
              <li className="list-group-item"><label>Height:</label> {character.height}</li>
            </ul>
          </div>
          {
            character.films.map(filmUrl => this.makeFilmSection(filmUrl))
          }
        </div>
        }
      </div>
    );
  }
}

export default CharacterPage;