import * as React from 'react'
import {Header} from './Header'
import {Footer} from './Footer'
import {Container, Divider} from 'semantic-ui-react'
import css from './module.css'

export const Layout: React.SFC<{}> = props => (
  <Container className={css.container}>
    <Header/>
    <main>
      {props.children}
    </main>
    <Divider/>
    <Footer/>
  </Container>
)
