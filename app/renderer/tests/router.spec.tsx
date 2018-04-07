import * as React from 'react'
import * as Renderer from 'react-test-renderer'
import { MemoryRouter } from 'react-router-dom'

import Router from '../router'

test('route /', () => {
  const component = Renderer.create(
    <MemoryRouter initialEntries={['/']}><Router /></MemoryRouter>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('route /start', () => {
  const component = Renderer.create(
    <MemoryRouter initialEntries={['/start']}><Router /></MemoryRouter>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})

test('route /dummy', () => {
  const component = Renderer.create(
    <MemoryRouter initialEntries={['/dummy']}><Router /></MemoryRouter>,
  )
  const tree = component.toJSON()
  expect(tree).toMatchSnapshot()
})
