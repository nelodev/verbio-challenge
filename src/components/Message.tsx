import Icon from './ui/Icon';
import botLogo from '../images/bot.png';
import userLogo from '../images/foto.jpeg';

interface messageProps {
  message: string;
  type: string;
  url?: string;
}

function Message({message, type, url}: messageProps) {
  return (
    <div className="chat-message">
      <div
        className={`flex items-end ${
          ['text', 'image'].includes(type) ? null : 'justify-end'
        }`}
      >
        <div className="flex flex-col space-y-2 text-xs max-w-xs mx-2 order-2 items-start">
          <div className="flex">
            {['text', 'image'].includes(type) ? (
              <Icon
                className="self-end mr-1"
                size="extra-small"
                src={botLogo}
              />
            ) : null}
            <span
              className={`px-4 py-2 rounded-lg inline-block ${
                !['text', 'image'].includes(type)
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
            {type === 'user' ? (
              <Icon
                className="self-end ml-1 rounded-lg"
                size="extra-small"
                src={userLogo}
              />
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Message;
