import Icon from './ui/Icon';

interface messageProps {
  message: string;
  type: string;
  url?: string;
}

function Message({message, type, url}: messageProps) {
  console.log('message', message);
  return (
    <div className="chat-message">
      <div
        className={`flex items-end ${
          ['text', 'image'].includes(type) ? null : 'justify-end'
        }`}
      >
        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
          <div>
            <span
              className={`px-4 py-2 rounded-lg inline-block ${
                ['text', 'image'].includes(type)
                  ? 'bg-gray-300 text-gray-600 rounded-bl-none'
                  : 'bg-pink-300 text-black rounded-br-none'
              }`}
            >
              {['text', 'user'].includes(type) ? (
                message
              ) : (
                <Icon size="medium" src={url} />
              )}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
