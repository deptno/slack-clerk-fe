import * as React from 'react'
import {shallow} from 'enzyme'
import {LinksComponent} from '../../components/Links'
import {thunk} from '../mock/action'

import * as links from '../data/links.json'

describe('Component', () => {
  describe('Links', () => {
    it('로딩', function () {
      const rendered = shallow(<LinksComponent getLinks={() => thunk('getLinks')} links={void(0)} />)
      expect(rendered.html().includes('loader')).toBe(true)
    })
    it('헤더', function () {
      const rendered = shallow(<LinksComponent getLinks={() => thunk('getLinks')} links={links} />)
      expect(rendered.contains('링크')).toBe(true)
      expect(rendered.contains('날짜')).toBe(true)
      expect(rendered.contains('시간')).toBe(true)
      expect(rendered.html().includes('loader')).toBe(false)
    })
  })
})
