function Messages({messages}: {messages: any[]}) {
  return (
    <div className="bg-pink-100 rounded-lg px-4">
      {messages.map(message => (
        <p key={message.text}>{message.text}</p>
      ))}
    </div>
  );
}

export default Messages;
