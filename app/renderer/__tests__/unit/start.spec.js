/* eslint-env jest */

import React from 'react';
import Renderer from 'react-test-renderer';
import { MemoryRouter } from 'react-router-dom';

import Start from '../../pages/start';

test('start page', () => {
  const component = Renderer.create(
    <MemoryRouter><Start /></MemoryRouter>,
  );
  const tree = component.toJSON();
  expect(tree).toMatchSnapshot();
});