import {useState} from 'react';

import InputChat from '../components/InputChat';

function Chat() {
  const [message, setMessage] = useState('');
  return <InputChat value={message} setValue={setMessage} />;
}

export default Chat;
