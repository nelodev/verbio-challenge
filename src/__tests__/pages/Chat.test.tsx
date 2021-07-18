import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import App from '../../App';
import Chat from '../../pages/Chat';
import userEvent from '@testing-library/user-event';

Element.prototype.scrollTo = () => {};

beforeEach(() => {
  Object.defineProperty(window, 'sessionStorage', {
    value: {
      getItem: jest.fn(() => ({sesion_id: 'qjwkeoijqweioqweioqwioe'})),
      setItem: jest.fn(() => null),
      removeItem: jest.fn(() => null),
    },
    writable: true,
  });
});

describe('Tests of Chat page', () => {
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

  test('Should navigate to homepage if logout button is clicked', () => {
    window.history.pushState({}, 'Home', '/chat');

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    const logOutButton = screen.getByText(/logout/i);
    expect(logOutButton).toBeInTheDocument();
    userEvent.click(logOutButton);
    expect(screen.getByRole('heading')).toHaveTextContent(/welcome/i);
    expect(window.sessionStorage.removeItem).toHaveBeenCalled();
  });
});
