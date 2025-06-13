export default function TypingIndicator() {
  return (
    <div className="flex items-start space-x-3 px-4 py-3 animate-fade-in">
      <div className="w-8 h-8 rounded-full bg-chat-green flex items-center justify-center flex-shrink-0">
        <span className="text-white text-sm font-medium">A</span>
      </div>
      <div className="flex-1">
        <div className="bg-chat-secondary rounded-lg px-4 py-3 max-w-xs">
          <div className="flex items-center space-x-1">
            <div className="typing-dot"></div>
            <div className="typing-dot"></div>
            <div className="typing-dot"></div>
          </div>
        </div>
      </div>
    </div>
  );
}