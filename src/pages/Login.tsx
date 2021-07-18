import {useState} from 'react';
import {Link, Redirect} from 'react-router-dom';

import {login} from '../utils/api';

import FormInput from '../components/FormInput';
import CenteredLayout from '../components/ui/CenteredLayout';
import Icon from '../components/ui/Icon';
import VerticalLayout from '../components/ui/VerticalLayout';
import botLogo from '../images/bot.png';

function Login() {
  const [user, setUser] = useState('');
  const [password, setPassword] = useState('');
  const [isError, setIsError] = useState(false);
  const [redirect, setRedirect] = useState(false);

  async function handleSubmit(e: any): Promise<void> {
    e.preventDefault();
    const {success, session_id} = await login('/login', {
      data: {user, password},
      token: '',
    });

    if (success) {
      sessionStorage.setItem('session_id', session_id);
      setRedirect(true);
    } else {
      setIsError(true);
    }
  }

  if (redirect) {
    return <Redirect to="/chat" />;
  }

  return (
    <CenteredLayout className="flex flex-col">
      <Link to="/">
        <Icon src={botLogo} size="big" />
      </Link>
      <form onSubmit={handleSubmit} className="w-full">
        <VerticalLayout className="space-y-4">
          <FormInput
            id="username-input"
            name="username"
            placeholder="Insert your username"
            text="Username"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUser(e.target.value)
            }
            value={user}
          />

          <FormInput
            id="password-input"
            name="password"
            placeholder="Insert your password"
            text="Password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            value={password}
          />

          {isError ? (
            <p role="alert" className="text-red-600">
              Something went wrong.. 😑 Try again
            </p>
          ) : null}

          <button
            type="submit"
            className="text-white w-full py-2 rounded-md self-center text-1xl bg-pink-700 hover:bg-pink-800"
          >
            Go to login
          </button>
        </VerticalLayout>
      </form>
    </CenteredLayout>
  );
}

export default Login;
