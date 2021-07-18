import * as React from 'react';
import {BrowserRouter} from 'react-router-dom';
import {render, screen} from '@testing-library/react';
import App from '../../App';

describe('Tests of Home page', () => {
  test('should navigate to login page when click go to login button', () => {
    window.history.pushState({}, 'Home', '/');

    render(
      <BrowserRouter>
        <App />
      </BrowserRouter>,
    );

    expect(screen.getByRole('heading')).toHaveTextContent(/welcome/i);
  });
});
