import React from 'react';

class SimpleForm extends React.Component { // eslint-disable-line react/prefer-stateless-function


  render() {
    return (
      <Wrapper className="header clearfix">
        <NavBar>
          <ul className="nav nav-pills pull-right">
            <NavItem>
              <A href="/">Home</A>
            </NavItem>
            <NavItem>
              <A href="/example">Example</A>
            </NavItem>
            <NavItem>
              <A href="/spotify">Spotify</A>
            </NavItem>
            <NavItem>
              <A href="https://topicus.nl" target="_blank">Topicus</A>
            </NavItem>
          </ul>
        </NavBar>
        <H3 className="text-muted">React workshop</H3>
      </Wrapper>
    );
  }
}

export default SimpleForm;