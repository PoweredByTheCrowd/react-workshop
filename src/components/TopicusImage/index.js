import React from 'react';
import Banner from './banner.jpg'
import Background from './Background'

class TopicusImage extends React.Component { // eslint-disable-line react/prefer-stateless-function
  render() {
    return (
      <Background imageUrl={Banner}/>
    )
  }
}

export default TopicusImage;