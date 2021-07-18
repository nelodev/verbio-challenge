import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import Chat from '../../pages/Chat';

test('Should have an input with a placeholder text and a button to logout', () => {
  window.history.pushState({}, 'Home', '/chat');

  render(
    <BrowserRouter>
      <Chat />
    </BrowserRouter>,
  );

  expect(screen.getByPlaceholderText(/something/)).toBeInTheDocument();
  expect(screen.getByText(/logout/i)).toBeInTheDocument();
});
