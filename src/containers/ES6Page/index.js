import React from 'react'
import H1 from 'components/H1';
import A from 'components/A'
import CenteredSection from 'components/CenteredSection'

export default () =>
        <div>
            <CenteredSection>
                <H1>
                    What happened to JavaScript?
                </H1>
            </CenteredSection>
            <div>
                <p>Seeing some strange syntax in our source code? You're right, that's not the standard JavaScript all browsers are comfortable with.
                    Instead, it's the <b>new</b> standard JavaScript, also known as EcmaScript 6 or EcmaScript 2015. During the
                    build process of the app, it gets <i>transpiled</i> into standard JavaScript before it's being delivered to the browser.
                </p>
                <p>You can read <A href="https://github.com/lukehoban/es6features">all about it</A>, or play around with it in your
                    browser's console, because modern browsers already speak ES6.
                </p>
            </div>
        </div>

