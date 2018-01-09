import React from 'react';

import A from './A';
import Wrapper from './Wrapper'
import NavItem from './NavItem'
import NavBar from './NavBar'
import H3 from './H3'

class Header extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Wrapper className="header clearfix">
        <NavBar>
          <ul className="nav nav-pills pull-right">
            <NavItem>
              <A href="/">Home</A>
            </NavItem>
            <NavItem>
              <A href="/starwars">Star Wars</A>
            </NavItem>
            <NavItem>
              <A href="/es6">What?</A>
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

export default Header;
