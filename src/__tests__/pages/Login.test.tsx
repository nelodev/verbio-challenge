import {render, screen} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
// import userEvent from '@testing-library/user-event';
import {BrowserRouter} from 'react-router-dom';
import App from '../../App';
import Login from '../../pages/Login';

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

test('Should submit form with typed data when button is clicked', () => {
  const {debug} = render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>,
  );

  const usernameInput = screen.getByLabelText(/username/i);
  const passwordInput = screen.getByLabelText(/password/i);
  const loginButton = screen.getByText(/login/i);

  userEvent.type(usernameInput, 'wrong-user');
  userEvent.type(passwordInput, 'wrong-password');
  userEvent.click(loginButton);

  debug();

  expect(screen.getByRole('alert')).toHaveTextContent(/oops/i);
});
