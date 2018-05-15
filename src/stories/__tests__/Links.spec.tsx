import * as React from 'react'
import {shallow} from 'enzyme'
import {TableComponent} from '../../components/Table'

import * as links from '../data/links.json'

describe('Component', () => {
  describe('Links', () => {
    describe('링크 도착 전', () => {
      it('로딩', function () {
        const rendered = shallow(<TableComponent links={void(0)} />)
        expect(rendered.html().includes('loader')).toBe(true)
      })
    })
    describe('데이터 없을 시', () => {
      it('로딩 표시 하지 않음', function () {
        const rendered = shallow(<TableComponent links={[]}/>)
        expect(rendered.html().includes('loader')).toBe(false)
      })
    })
    it('헤더', function () {
      const rendered = shallow(<TableComponent links={links} />)
      expect(rendered.contains('링크')).toBe(true)
      expect(rendered.contains('날짜')).toBe(true)
      expect(rendered.contains('시간')).toBe(true)
      expect(rendered.html().includes('loader')).toBe(false)
    })
  })
})
