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
          Let's get started with Redux
        </H1>
      </CenteredSection>
      <div className="row marketing">
        <div className="col-lg-6">
          <H2>About Redux</H2>
          <p>Redux allows you to have a single source of thruth in your app. You centrally store your data by
            dispatching actions.
            By using reducers you can return a new state. For this you use 'pure functions', you do not alter the state
            directly. Instead you return the next state. Take a look at the Redux
            <A href="http://redux.js.org/docs/introduction/CoreConcepts.html"> website </A> to learn more.
          </p>
          <H2>Actions</H2>
          <p>An action is a plain JavaScript object that describes what happened. An action contains a type property
            and some data.
          </p>
          <H2>Reducers</H2>
          <p>A reducer is just a function that takes the current state and an action. Then it returns the next state by
            handling the action. That is basically it.
          </p>
        </div>
        <div className="col-lg-6">
          <H2>Thunk middleware</H2>
          <p>Redux Thunk middleware allows you to write action creators that return a function instead of an action. The
            thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. The
            inner function receives the store methods dispatch and getState as parameters.
          </p>
          <H2>Assignment</H2>
          <p>We already refactored the StarWarsPage to use Redux. It is up to you to refactor the CharacterPage so it
            uses Redux as well. We already created a file for your actions and a file for your reducer. Take a look at
            the folders /actions and /reducers.
          </p>
        </div>
        <div className="col-lg-12">
          <H2>React DevTools</H2>
          <p>
            Install React DevTools for <A
            href="https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi">Chrome</A>
            or <A href="https://addons.mozilla.org/nl/firefox/addon/react-devtools/">Firefox</A>
            <img
              src="https://camo.githubusercontent.com/3fd1137b6b254da8c5596acf7b8583246fd76e29/687474703a2f2f692e696d6775722e636f6d2f6a5969655271692e706e67"
              width="500" alt="React DevTools"/>
          </p>
          <p>
            With React DevTools you can inspect and edit React elements, state and props from your browser.
          </p>
          <H2>Redux DevTools</H2>
          <p>
            Install Redux DevTools for <A
            href="https://chrome.google.com/webstore/detail/redux-devtools/lmhkpmbekcpmknklioeibfkpmmfibljd">Chrome</A>
            or <A href="https://addons.mozilla.org/en-us/firefox/addon/remotedev/">Firefox</A>
            <img src="https://i.imgur.com/zlq8CBQ.png" width="500" alt="Redux DevTools"/>
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