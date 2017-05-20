import React from 'react';

import A from '../A';
import Wrapper from './Wrapper';
import Container from './Container'

function Footer() {
  return (
    <Wrapper>
      <Container className="container">
        <p className="text-muted">
          This project is licensed under the MIT license.  Made by <A href="https://twitter.com/LaaglandNL" target="_blank">Jasper</A>
        </p>
      </Container>
    </Wrapper>
  );
}

export default Footer;
