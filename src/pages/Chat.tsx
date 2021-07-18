import {Fragment, useState, useEffect} from 'react';
import {Redirect} from 'react-router-dom';

import {getWelcomeMessage} from '../utils/api';

import InputChat from '../components/InputChat';
import Messages from '../components/Messages';

function Chat() {
  const [message, setMessage] = useState('');
  const [messages, setMessages] = useState<any[]>([]);

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
      getFirstMessage({session_id});
    }
  }, []);

  function handleSend() {
    if (!message) return;
    setMessage('');
    const newMessage = {type: 'user', text: message};
    setMessages([...messages, newMessage]);
  }

  return (
    <Fragment>
      <Messages messages={messages} />
      <InputChat value={message} setValue={setMessage} onSend={handleSend} />
      <button>Logout</button>
    </Fragment>
  );
}

export default Chat;
