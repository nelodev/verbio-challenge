import Message from './Message';

function Messages({
  messages,
  className,
}: {
  messages: any[];
  className?: string;
}) {
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
