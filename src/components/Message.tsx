interface messageProps {
  message: string;
  key: string;
  type: string;
}

function Message({message, key, type}: messageProps) {
  return (
    <div key={key} className="chat-message">
      <div
        className={`flex items-end ${type === 'text' ? null : 'justify-end'}`}
      >
        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
          <div>
            <span
              className={`px-4 py-2 rounded-lg inline-block ${
                type === 'text'
                  ? 'bg-gray-300 text-gray-600 rounded-bl-none'
                  : 'bg-pink-300 text-black rounded-br-none'
              }`}
            >
              {message}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
