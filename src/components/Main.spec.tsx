import * as React from 'react'
import {shallow} from 'enzyme'

import {Main} from './Main'

describe('Component', () => {
  describe('Home', () => {
    it('should render without throwing an error', function () {
      expect(shallow(<Main/>).contains('main')).toBe(true)
    })
  })
})
