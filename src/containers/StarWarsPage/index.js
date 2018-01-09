import React from 'react';
import { connect } from 'react-redux';
import SearchForm from './SearchForm'
import CharacterList from './CharacterList'
import {searchCharacterAsync} from 'actions/character'


/**
 * This is the top Component for the "Search a Star Wars character page.
 * It contains a from (SearchForm_ which allows you to search a character name. When a user submits the form a API call is made.
 * The result of the search is then shown in a list. T
 * first take a look at the render method, this renders the results in a list (CharacterList)
 **/
class StarWarsPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  //No more need for local state!
  //Look at the /actions and /reducer folders first to see what Redux does for you.

  //This is much simpler now, just fire searchCharacter and the reducer will do the magic
  searchCharacter = (name) => {
    this.props.searchCharacter(name)
  }

  render() {
    //Instead of getting the character from local state it is now retrieved from props
    //Look at the mapStateToProps function. The Redux state is mapped to the props of the component there
    const {characters, isLoading, error} = this.props
    return (
      <div>
        <SearchForm searchFn={this.searchCharacter}/>
        {//When the API has not responded yet show the loading message
          isLoading &&
          <p>Loading, please wait...</p>
        }
        {//Apparently we have loaded a character! Let display it.
          !isLoading && !error &&
          <CharacterList characters={characters}/>
        }
        {//Something bad has happend. Show a user friendly message.
          error &&
          <p>These are not the droids you are looking for.</p>
        }
      </div>
    );
  }
}

//This function maps the state to the props of this component.
//We have multiple reducers, the character reducer is the one that is used for retrieving character data.
//Redux created a character object on the state for us. We map the info from the state to props.
const mapStateToProps = (state) => {
  return {
    isLoading: state.character.isLoading,
    characters: state.character.characters,
    error: state.character.error
  };
};


//This function allows us to dispatch actions to Redux. We map the Redux actions to the props of the component. Now the
// component can load data by dispatching the action to search for a character.
//
//Note that searchCharacterAsync is actually a function. The thunk middleWare also allows us to dispatch functions.
//The searchCharacterAsync function dispatches it's own actions. By doing so we can perform multiple actions
// asynchronously
const mapDispatchToProps = (dispatch) => {
  return {
    searchCharacter: (name) => dispatch(searchCharacterAsync(name))
  };
};

//Connect is the glue between React and Redux. Now the React component can dispatch actions we provide to it, and
// whenever the Redux state is altered Redux makes sure that the props are refreshed automatically! So no need for
// polling for data.
export default connect(mapStateToProps, mapDispatchToProps)(StarWarsPage);