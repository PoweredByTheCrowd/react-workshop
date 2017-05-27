import React from 'react';
import styled from 'styled-components';

const Wrapper = styled.div`
    max-width: 730px
`;

function Container(props) {
  return (
    <Wrapper className="container" {...props} />
  );
}

export default Container;