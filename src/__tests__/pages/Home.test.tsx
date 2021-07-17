import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import App from '../../App';

test('should navigate to login page when click go to login button', () => {
  window.history.pushState({}, 'Home', '/');

  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );

  expect(screen.getByRole('heading')).toHaveTextContent(/welcome/i);
  userEvent.click(screen.getByText(/login/i));
  expect(screen.getByRole('heading')).toHaveTextContent(/login/i);
});
