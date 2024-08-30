import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import CartContextProvider from './context/CartContext';

test('renders without crashing', () => {
  const { container } = render(
    <CartContextProvider>
      <App />
    </CartContextProvider>
  );

  expect(container).toMatchSnapshot();
  
});
