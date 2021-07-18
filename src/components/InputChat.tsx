interface inputChatProps {
  value: string;
  setValue: React.Dispatch<React.SetStateAction<string>>;
  onSend: any;
  className: string;
}

function InputChat({value, setValue, onSend, className}: inputChatProps) {
  return (
    <div
      className={`border-t-2 border-gray-200 px-4 pt-4 mb-2 sm:mb-0 ${className}`}
    >
      <div className="relative flex">
        <input
          type="text"
          placeholder="Write something..."
          onChange={e => setValue(e.target.value)}
          value={value}
          className="w-full focus:outline-none focus:placeholder-gray-400 text-gray-600 placeholder-gray-600 pl-6 bg-gray-200 rounded-full py-3"
        />
        <div className="absolute right-0 items-center inset-y-0 flex">
          <button
            type="button"
            onClick={onSend}
            className="inline-flex items-center justify-center rounded-full h-12 w-12 transition duration-500 ease-in-out text-white bg-pink-500 hover:bg-pink-400 focus:outline-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
              fill="currentColor"
              className="h-6 w-6 transform rotate-90"
            >
              <path d="M10.894 2.553a1 1 0 00-1.788 0l-7 14a1 1 0 001.169 1.409l5-1.429A1 1 0 009 15.571V11a1 1 0 112 0v4.571a1 1 0 00.725.962l5 1.428a1 1 0 001.17-1.408l-7-14z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}

export default InputChat;
