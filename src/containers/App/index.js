import React from 'react';
import Container from 'components/Container'
import Header from 'components/Header';
import Footer from 'components/Footer'

const App = ({ children }) => (
  <Container>
    <Header />
    {children}
    <Footer />
  </Container>
)

export default App;