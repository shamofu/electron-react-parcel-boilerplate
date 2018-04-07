import * as React from 'react'
import * as Renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import Root from '../pages/root'

test('page Root', () => {
  const component = Renderer.create(
    <MemoryRouter><Root /></MemoryRouter>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
