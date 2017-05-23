import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';
import {getCharacterAsync} from 'actions/character';
import {getFilmsByIdAsync} from 'actions/film'
import {getResourceId} from 'helpers/resourceHelper';
import FilmSection from './FilmSection';

class CharacterPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    isCharacterLoading: PropTypes.bool,
    character: PropTypes.object,
    characterError: PropTypes.object,
    isFilmsLoading: PropTypes.bool,
    films: PropTypes.array,
    filmError: PropTypes.object,
    getCharacter: PropTypes.func,
    getFilms: PropTypes.func
  }

  componentDidMount () {
    //this is the id of the character that you will be using
    const {character, getCharacter} = this.props
    if (character) {
      this.fetchFilms(character)
    } else {
      const characterId = this.props.params.id
      getCharacter(characterId)
    }
  }

  componentWillReceiveProps (nextProps) {
    if (!this.props.character && nextProps.character) {
      this.fetchFilms(nextProps.character)
    }

  }

  fetchFilms = (character) => {
    const {getFilms} = this.props
    const filmsIds = character.films.map(getResourceId)
    getFilms(filmsIds)
  }

  makeFilmSection = (film) => {
    return (
      <FilmSection key={film.id} film={film}/>
    )
  }

  render() {
    const {character, films} = this.props
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
          <div className="text-center">
            <h2>Films</h2>
          </div>
          {films && films.map(this.makeFilmSection)
          }
        </div>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isCharacterLoading: state.character.isGetLoading,
    character: state.character.character,
    characterError: state.character.getError,
    isFilmsLoading: state.film.isLoading,
    films: state.film.films,
    filmsError: state.film.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    getCharacter: (id) => dispatch(getCharacterAsync(id)),
    getFilms: (ids) => dispatch(getFilmsByIdAsync(ids))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CharacterPage);