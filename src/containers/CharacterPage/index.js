import React from 'react';
import H2 from 'components/H2'
import A from 'components/A'

class CharacterPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  state = {

  }

  componentDidMount() {
    //this is the id of the character that you will be using
    const characterId = this.props.params.id
    //you can use the client which is provided in
  }

  render() {
    return (
      <div>
      <H2>Assignment</H2>
       <p> This is where you continue. We ask you to create a page in where you can see the details of
       a character. Also show a list of films in which the character appears. You can find this page in
         containers/CharacterPage<br/>
       For inspiration you van take a look at the StarWarsPage in the components directory.
       </p>
      <H2>Bootstrap</H2>
      <p>This project uses bootstrap (v3) so you can style your components easily.
        Take a look at <A href="http://getbootstrap.com/getting-started/">the bootstrap website</A> to learn more.</p>
      </div>
    );
  }
}

export default CharacterPage;