import React from 'react';
import PropTypes from 'prop-types'
import SearchForm from './SearchForm'
import CharacterList from './CharacterList'
import { connect } from 'react-redux';
import {searchCharacterAsync} from 'actions/character'

class StarWarsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    searchCharacter: PropTypes.func.isRequired,
    isLoading: PropTypes.bool,
    characters: PropTypes.array,
    error: PropTypes.object
  }

  searchCharacter = (name) => {
    this.props.searchCharacter(name)
  }

  render() {
    const {characters, isLoading, error} = this.props
    return (
      <div>
        <SearchForm searchFn={this.searchCharacter} />
        {isLoading &&
          <p>Loading, please wait...</p>
        }
        {!isLoading && !error &&
          <CharacterList characters={characters} />
        }
        {error &&
        <p>These are not the droids you are looking for.</p>
        }
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    isLoading: state.character.isLoading,
    characters: state.character.characters,
    error: state.character.error
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    searchCharacter: (name) => dispatch(searchCharacterAsync(name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(StarWarsPage);

