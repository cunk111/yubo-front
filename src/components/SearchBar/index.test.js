import React from 'react'
import { shallow, mount, render } from 'enzyme'

import SearchBar from './index'

describe('A suite', () => {
  it('should render without throwing an error', () => {
    expect(shallow(<SearchBar />).contains(<div className='foo'>Bar</div>)).toBe(true)
  })

  it('should be selectable by class "foo"', () => {
    expect(shallow(<SearchBar />).is('.foo')).toBe(true)
  })

  it('should mount in a full DOM', () => {
    expect(mount(<SearchBar />).find('.foo').length).toBe(1)
  })

  it('should render to static HTML', () => {
    expect(render(<SearchBar />).text()).toEqual('Bar')
  })
})
