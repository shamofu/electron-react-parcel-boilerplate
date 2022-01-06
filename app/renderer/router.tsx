import React from 'react';
import { Route, Routes } from 'react-router-dom';

import Root from './pages/root';
import Start from './pages/start';

export default () => {
  return (
    <Routes>
      <Route path='/' element={<Root />} />
      <Route path='/start' element={<Start />} />
      <Route path='*' element={<h1>204 No Content</h1>} />
    </Routes>
  );
};
