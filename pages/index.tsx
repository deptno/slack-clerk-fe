import * as React from 'react'
import {Provider, Store} from 'react-redux'
import {Layout} from '../src/components/Layout'
import {StaticPage} from './_page'
import {Home} from '../src/components/Home'

export default class Index extends StaticPage<{}> {
  render() {
    return (
      <Provider store={this.store}>
        <Layout>
          <Home/>
        </Layout>
      </Provider>
    )
  }
}