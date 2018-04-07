import * as React from 'react'
import * as Renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import Start from '../pages/start'

test('page Start', () => {
  const component = Renderer.create(
    <MemoryRouter><Start /></MemoryRouter>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
