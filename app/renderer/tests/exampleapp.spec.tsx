import * as React from 'react'
import * as Renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import ExampleApp from '../components/exampleapp'

test('component ExampleApp', () => {
  const component = Renderer.create(
    <MemoryRouter><ExampleApp /></MemoryRouter>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
