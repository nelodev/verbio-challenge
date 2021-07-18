import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import Chat from '../../pages/Chat';

Element.prototype.scrollTo = () => {};

test('Should have an input with a placeholder text and a button to logout', () => {
  window.history.pushState({}, 'Home', '/chat');

  Object.defineProperty(window, 'sessionStorage', {
    value: {
      getItem: jest.fn(() => ({sesion_id: 'qjwkeoijqweioqweioqwioe'})),
      setItem: jest.fn(() => null),
    },
    writable: true,
  });

  render(
    <BrowserRouter>
      <Chat />
    </BrowserRouter>,
  );

  expect(screen.getByPlaceholderText(/something/)).toBeInTheDocument();
  expect(screen.getByText(/logout/i)).toBeInTheDocument();
});
