import Message from './Message';

interface messageProp {
  type: string;
  text: string;
  url?: string;
}

interface messagesProps {
  messages: messageProp[];
  className?: string;
}

function Messages({messages, className}: messagesProps) {
  return (
    <div
      className={`flex flex-col space-y-4 p-3 overflow-y-auto scrollbar-thumb-blue scrollbar-thumb-rounded scrollbar-track-blue-lighter scrollbar-w-2 scrolling-touch ${className}`}
    >
      {messages.map((message, index) => (
        <Message
          message={message.text}
          key={index}
          type={message.type}
          url={message.url}
        />
      ))}
    </div>
  );
}

export default Messages;
