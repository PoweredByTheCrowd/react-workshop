import React from 'react';
import Container from 'components/Container'
import Header from 'components/Header';

const App = ({ children }) => (
  <Container>
    <Header />
    {children}
  </Container>
)

export default App;