import * as React from 'react'
import {Header} from './Header'
import {Footer} from './Footer'

export const Layout: React.SFC<{}> = props => (
  <div className="container-fluid">
    <Header/>
    <main>
      {props.children}
    </main>
    <Footer/>
  </div>
)
