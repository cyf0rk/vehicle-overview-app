import React from 'react';
import ReactDOM from 'react-dom';
import AddToFavorites from './AddToFavorites.js';

import { render } from '@testing-library/react';

it('renders without crashing', () => {
  const div = document.createElement("div");
  ReactDOM.render(<AddToFavorites />, div);
})
