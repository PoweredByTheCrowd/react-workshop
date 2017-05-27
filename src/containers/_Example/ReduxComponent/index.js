import React from 'react';
import PropTypes from 'prop-types'
import { connect } from 'react-redux';

function NameForm(addNameFn){
  return (
    <form className="form" onSubmit={addNameFn}>
      <div className="form-group">
        <input
          className="form-control"
          type="search"
          ref="name"
          placeholder="Find your favourite Star Wars character"
        />
      </div>
      <Button type="submit" bsStyle="primary" className="btn-sm">Search
      </Button>
    </form>
  )
};
function NameDisplay(names) {

};

//this is an example of a Redux component
//it gives you an idea how to integrate Redux into a React component
//at this moment is doesn't really work because we did not create a store
class ReduxComponent extends React.Component {

  static propTypes = {
    names: PropTypes.array
  }

  addName = (name) => {
    this.props.addName(name)
  }

  render() {
    const {names} = this.props
    return (
      <div>
        {NameForm(this.addName)}
        {names.map(name => NameDisplay(name))}
      </div>
    );
  }
}

//connect Redux to the component
const mapStateToProps = (state) => {
  return {
    names: state.people.names
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    addName: (name) => dispatch(addNameAction(name))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ReduxComponent);

//action
export function addNameAction(character) {
  return {
    type: 'ADD_NAME',
    character: character
  };
}

//reducer
export default function reducer (state = {}, action = {}) {
  switch (action.type) {
    case 'ADD_NAME':
      return {
        ...state,
        names: [...state.names, action.name]
      }
    default:
      return state;
  }
}
