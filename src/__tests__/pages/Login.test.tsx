import {render, screen, waitFor} from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import {BrowserRouter} from 'react-router-dom';
import {rest} from 'msw';
import {setupServer} from 'msw/node';
import {API_URL} from '../../utils/constants';
import App from '../../App';
import Login from '../../pages/Login';

const fakeSessionId = 'qoirqjoirjoehuhiquwehqyuigtryqwetryuwet';

const server = setupServer(
  rest.post(`http://${API_URL}/login`, (req: any, res, ctx) => {
    const user = req.body?.user;
    if (user !== 'admin') {
      return res(
        ctx.json({
          success: false,
        }),
      );
    } else {
      return res(
        ctx.json({
          success: true,
          session_id: fakeSessionId,
        }),
      );
    }
  }),
);

beforeAll(() => {
  server.listen({onUnhandledRequest: 'error'});
  jest.spyOn(console, 'error').mockImplementation(() => {});
});
afterAll(() => server.close());
afterEach(() => server.resetHandlers());
beforeEach(() => {
  Object.defineProperty(window, 'sessionStorage', {
    value: {
      getItem: jest.fn(() => null),
      setItem: jest.fn(() => null),
      removeItem: jest.fn(() => null),
    },
    writable: true,
  });
});

Element.prototype.scrollTo = () => {};

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

test('Should show error if data is not valid', async () => {
  render(
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

  await waitFor(() =>
    expect(screen.getByRole('alert')).toHaveTextContent(/wrong/i),
  );
});

test('Should navigate to chat page if data is valid', async () => {
  window.history.pushState({}, 'Login', '/login');

  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );

  const loginButton = screen.getByText(/login/i);
  const usernameInput = screen.getByLabelText(/username/i);
  const passwordInput = screen.getByLabelText(/password/i);

  userEvent.type(usernameInput, 'admin');
  userEvent.type(passwordInput, 'admin');
  userEvent.click(loginButton);

  await waitFor(() => expect(screen.getByText(/logout/i)).toBeInTheDocument());

  expect(window.sessionStorage.setItem).toHaveBeenCalledTimes(1);
  expect(window.sessionStorage.setItem).toHaveBeenCalledWith(
    'session_id',
    fakeSessionId,
  );
});

test('Should redirect to chat if user is already logged', async () => {
  window.history.pushState({}, 'Login', '/login');

  Object.defineProperty(window, 'sessionStorage', {
    value: {
      getItem: jest.fn(() => ({session_id: 'kqweqweojqweioqjweio'})),
      setItem: jest.fn(() => null),
      removeItem: jest.fn(() => null),
    },
    writable: true,
  });

  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );

  await waitFor(() => expect(screen.getByText(/logout/i)).toBeInTheDocument());
});

test('Should show red border if any input is not completed', () => {
  window.history.pushState({}, 'Login', '/login');

  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>,
  );

  const loginButton = screen.getByText(/login/i);
  const usernameInput = screen.getByLabelText(/username/i);

  userEvent.type(usernameInput, 'admin');
  userEvent.click(loginButton);

  expect(screen.getByLabelText(/password/i)).toHaveClass('border-red-500');
});
