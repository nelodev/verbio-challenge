import {useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';

import {getWelcomeMessage, postMessage} from '../utils/api';

import InputChat from '../components/InputChat';
import Messages from '../components/Messages';

function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<any[]>([]);
  const [token, setToken] = useState<string>('');

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

  return (
    <div className="flex-1 p:2 sm:p-6 justify-between flex flex-col h-screen">
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
