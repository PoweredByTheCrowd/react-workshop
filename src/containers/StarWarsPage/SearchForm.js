import React from 'react';
import PropTypes from 'prop-types'
import { Button } from 'react-bootstrap'

class SearchForm extends React.Component { // eslint-disable-line react/prefer-stateless-function

  static propTypes = {
    searchFn: PropTypes.func.isRequired
  }

  handleSearch = (event) => {
    event.preventDefault()
    const value = this.refs.name.value
    this.props.searchFn(`search=${value}`)
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

