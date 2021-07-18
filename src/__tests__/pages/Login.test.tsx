import {render, screen} from '@testing-library/react';
// import userEvent from '@testing-library/user-event';
import {BrowserRouter} from 'react-router-dom';
import App from '../../App';

test('Should contain a form with two inputs and a button', () => {
  window.history.pushState({}, 'Login', '/login');

  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );

  const loginButton = screen.getByText(/login/i);

  expect(
    screen.getByPlaceholderText(/insert your username/i),
  ).toBeInTheDocument();
  expect(
    screen.getByPlaceholderText(/insert your password/i),
  ).toBeInTheDocument();
  expect(loginButton).toBeInTheDocument();
});
