import * as React from 'react'
import {Provider, Store} from 'react-redux'
import {Main} from '../src/components/Main'
import {Layout} from '../src/components/Layout'
import {StaticPage} from './_page'

export default class Index extends StaticPage<{}> {
  render() {
    return (
      <Provider store={this.store}>
        <Layout>
          <Main/>
        </Layout>
      </Provider>
    )
  }
}