import {useState} from 'react';

import FormInput from '../components/FormInput';
import CenteredLayout from '../components/ui/CenteredLayout';
import Icon from '../components/ui/Icon';
import VerticalLayout from '../components/ui/VerticalLayout';
import botLogo from '../images/bot.png';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  function handleSubmit(e: any): void {
    e.preventDefault();
  }

  return (
    <CenteredLayout className="flex flex-col">
      <Icon src={botLogo} />
      <form onSubmit={handleSubmit} className="w-full">
        <VerticalLayout className="space-y-4">
          <FormInput
            id="username-input"
            name="username"
            placeholder="Insert your username"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setUsername(e.target.value)
            }
            value={username}
          />

          <FormInput
            id="password-input"
            name="password"
            placeholder="Insert your password"
            onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
              setPassword(e.target.value)
            }
            value={password}
          />

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
