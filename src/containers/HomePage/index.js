import React from 'react'
import H2 from 'components/H2';
import Section from './Section'
import CenteredSection from './CenteredSection'
import TopicusImage from 'components/TopicusImage'

const HomePage = () => {

  return (
    <article>
      <TopicusImage/>
      <CenteredSection>
        <H2>
            Welcome to the DevDev meetup!
        </H2>
      </CenteredSection>
      <Section>
        Today we will get you started with React.
      </Section>
    </article>
    )
}

export default HomePage