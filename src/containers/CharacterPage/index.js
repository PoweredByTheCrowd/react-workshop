import React from 'react';

class CharacterPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  componentDidMount() {
    //this is the id of the character that you will be using
    const characterId = this.props.params.id
  }

  render() {
    return (
      <div>
        This is where you continue...
      </div>
    );
  }
}

export default CharacterPage;