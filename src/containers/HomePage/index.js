import React from 'react'
import H1 from 'components/H1';
import H2 from 'components/H2';
import A from 'components/A'
import CenteredSection from 'components/CenteredSection'
import TopicusImage from 'components/TopicusImage'

const HomePage = () => {

  return (
    <div>
      <TopicusImage/>
      <CenteredSection>
        <H1>
          Welcome to the DevDev meetup!
        </H1>
      </CenteredSection>
      <div className="row marketing">
        <div className="col-lg-6">
          <H2>About the app</H2>
          <p>This project has been created using create-react-app, which does amazing things for you. Out of the box we
            have created a React app which includes Webpack and scripts. We added some routing so you can navigate
            through the app. <br/>
            Learn more about create-react-app <A href="https://github.com/facebookincubator/create-react-app">here</A>.
          </p>
          <H2>Project structure</H2>
          <p>This start of this project is the index.js in the /src folder. It sets up Redux (which is not used yet) and
            a router. For routing we use react-router, now we can navigate to pages and the router makes sure to load
            the corresponding components.
            <br/>
            In the /components folder you will find some standard components that you might like to reuse. In the
            /containter folder you will find the React components.
          </p>
        </div>
        <div className="col-lg-6">
          <H2>Bootstrap</H2>
          <p>We added Bootstrap to this project.
            Visit the bootstrap <A href="http://getbootstrap.com/getting-started/">website</A> for more information.
          </p>
          <H2>Getting started</H2>
          <p>Click on the "Star Wars" page in the header. There you will find a search form. Search for your favorite Star
            Wars character. If you click on "details" you will navigate to the character details page. This is where you
            start. May the Force be with you...
          </p>
        </div>
        <div className="col-lg-12">
          <H2>React DevTools</H2>
          <p>
            Install React DevTools for <A href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi">Chrome</A> or <A href="https://addons.mozilla.org/nl/firefox/addon/react-devtools/">Firefox</A>
            <img src="https://camo.githubusercontent.com/3fd1137b6b254da8c5596acf7b8583246fd76e29/687474703a2f2f692e696d6775722e636f6d2f6a5969655271692e706e67" width="500" alt="React DevTools"/>
          </p>
          <p>
            With React DevTools you can inspect and edit React elements, state and props from your browser.
          </p>
          <H2>Redux DevTools</H2>
          <p>
            Install Redux DevTools for <A href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd">Chrome</A> or <A href="https://addons.mozilla.org/en-us/firefox/addon/remotedev/">Firefox</A>
            <img src="https://i.imgur.com/zlq8CBQ.png" width="500" alt="Redux DevTools" />
          </p>
          <p>
            With Redux DevTools you can visualizes and debug Redux actions and state.
          </p>
        </div>
      </div>


    </div>
    )
}

export default HomePage