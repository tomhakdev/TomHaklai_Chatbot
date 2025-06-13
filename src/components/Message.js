export default function Message({ message, isUser }) {
  return (
    <div className={`flex items-start space-x-3 px-4 py-3 animate-fade-in ${isUser ? 'flex-row-reverse space-x-reverse' : ''}`}>
      <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
        isUser ? 'bg-blue-600' : 'bg-chat-green'
      }`}>
        <span className="text-white text-sm font-medium">
          {isUser ? 'Y' : 'A'}
        </span>
      </div>
      <div className="flex-1">
        <div className={`rounded-lg px-4 py-3 max-w-4xl ${
          isUser 
            ? 'bg-blue-600 text-white ml-auto' 
            : 'bg-chat-secondary text-chat-text'
        }`}>
          <div className="whitespace-pre-wrap text-sm leading-relaxed">
            {message}
          </div>
        </div>
      </div>
    </div>
  );
}