import * as React from 'react'
import {Header} from './Header'
import {Footer} from './Footer'
import {Container} from 'semantic-ui-react'

export const Layout: React.SFC<{}> = props => (
  <Container>
    <Header/>
    <main>
      {props.children}
    </main>
    <Footer/>
  </Container>
)
