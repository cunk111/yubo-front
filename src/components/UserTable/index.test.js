import React from 'react'
import { shallow, mount, render } from 'enzyme'

import UserTable from './index'

describe('The UserTable', () => {
	it('should render without throwing an error', () => {
		// expect(shallow(<UserTable />).contains(<StyledUserTable className='table table-hover'>Bar</StyledUserTable>)).toBe(true)
		expect(shallow(<UserTable />).find('thead tr')).toHaveLength(3) // .toHaveLength(3)
	})

	it('should be selectable by class "foo"', () => {
		expect(shallow(<UserTable />).is('.foo')).toBe(true)
	})

	it('should mount in a full DOM', () => {
		expect(mount(<UserTable />).find('.foo').length).toBe(1)
	})

	it('should render to static HTML', () => {
		expect(render(<UserTable />).text()).toEqual('Bar')
	})
})
