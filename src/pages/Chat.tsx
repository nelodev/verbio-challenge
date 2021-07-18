import {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';

import {getWelcomeMessage, postMessage} from '../utils/api';

import InputChat from '../components/InputChat';
import Messages from '../components/Messages';
import botLogo from '../images/bot.png';

function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<any[]>([]);
  const [token, setToken] = useState<string>('');
  const [redirect, setRedirect] = useState<Boolean>(false);

  useEffect(() => {
    const getFirstMessage = async ({session_id}: any) => {
      const welcomeMessages = await getWelcomeMessage({token: session_id});
      const all = [...messages, ...welcomeMessages];
      setMessages(all);
    };

    const session_id = window.sessionStorage.getItem('session_id');
    if (!session_id) {
      <Redirect to="/login" />;
    } else {
      setToken(session_id);
      getFirstMessage({session_id});
    }
  }, []);

  async function handleSend() {
    if (!message) return;
    setMessage('');
    const newMessage = {type: 'user', text: message};
    const posted = await postMessage({message, token});
    setMessages([...messages, newMessage, ...posted]);
  }

  function onLogout() {
    window.sessionStorage.removeItem('session_id');
    setRedirect(true);
  }

  if (redirect) {
    return <Redirect to="/" />;
  }

  return (
    <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
      <div className="flex sm:items-center justify-between p-3 border-b-2 border-gray-200">
        <img src={botLogo} alt="My profile" className="w-6 h-6 rounded-full" />
        <button className="text-pink-600" onClick={onLogout}>
          Logout
        </button>
      </div>
      <Messages messages={messages} />
      <InputChat
        className="h-16"
        value={message}
        setValue={setMessage}
        onSend={handleSend}
      />
    </div>
  );
}

export default Chat;
