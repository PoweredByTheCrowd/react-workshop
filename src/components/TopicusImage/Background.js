import styled from 'styled-components';

const Background = styled.div`
  background-image:url('${props => props.imageUrl}');
  height:300px;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  border-bottom:1px solid #ff6a00
`;

export default Background;