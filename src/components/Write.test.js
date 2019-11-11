import React from 'react'
import { shallow, mount, render } from 'enzyme'

import Write from './Write'

describe('initial Write component testing suite', function() {
  it('should render without throwing an error', function() {
    expect(
      shallow(<Write />).contains(
        <div className='card'>
          <h3>This is a Write</h3>
        </div>
      )
    ).toBe(true)
  })

  it('should be selectable by class "card"', function() {
    expect(shallow(<Write />).is('.card')).toBe(true)
  })

  it('should mount in a full DOM', function() {
    expect(mount(<Write />).find('.card').length).toBe(1)
  })

  it('should render to static HTML', function() {
    expect(render(<Write />).text()).toEqual('This is a Write')
  })
})
