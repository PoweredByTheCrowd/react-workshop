import React from 'react';
import H2 from 'components/H2'
import A from 'components/A'

class CharacterPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  state = {
    //When your character is loaded you can set it to the state.
  }

  componentDidMount() {
    //this is the id of the character that you will be using
    const characterId = this.props.params.id // eslint-disable-line no-unused-vars
    //Because it only existed on the local state of the StarWarsPage component you need to fetch it again :(.
    //You can fix that later using Redux.

    //Once you have fetched your character set it on the state
    //Also set the id's of the films so you can fetch them using the client
  }

  render() {
    //When there is a character loaded you should render it here.
    //Also show a list of the films in which the character appears (see images/example.png).
    //
    //The easiest way is to create a component that renders the film. Pass the id of the film to it and retrieve the
    //film from the client there. You can use getFilm from client/starwarsClient.
    return (
      <div>
        <H2>Assignment</H2>
        <p> This is where you continue. We ask you to create a page in where you can see the details of
          a character. Also show a list of films in which the character appears. You can find this page in
          containers/CharacterPage<br/>
          In the images folder we have provided an example of how the page could look.
          <br/>
          For inspiration on how to start you can take a look at the StarWarsPage in the components directory.
        </p>
        <H2>Bootstrap</H2>
        <p>This project uses bootstrap (v3) so you can style your components easily.
          Take a look at <A href="http://getbootstrap.com/getting-started/">the bootstrap website</A> to learn more.</p>
        <H2>Bonus</H2>
        <p>
          If you are looking for something extra to do you can add error handling to the Star Wars Page. If something
          goes wrong when calling the API the user gets no feedback. It would be nice to notify the user that something went wrong.
        </p>
      </div>

    );
  }
}

export default CharacterPage;