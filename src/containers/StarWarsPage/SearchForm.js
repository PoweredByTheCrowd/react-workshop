import React from 'react';
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'

class SearchForm extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    searchFn: PropTypes.func.isRequired
  }

  //When the form is submitted this function is called
  handleSearch = (event) => {
    //We do not want the form to be posted
    event.preventDefault()
    //Get the value of the input field
    const value = this.refs.name.value
    //Perform the search, the function is passed as a prop to this component.
    this.props.searchFn(value)
  }

  render() {
    return (
      <form className="form" onSubmit={this.handleSearch}>
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
    );
  }
}

export default SearchForm;

