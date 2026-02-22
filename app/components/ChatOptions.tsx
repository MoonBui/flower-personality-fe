interface ChatOptionsProps {
  text: string;
  onClick: () => void;
  borderColor: string;
}

const ChatOptions = ({ text, onClick, borderColor }: ChatOptionsProps) => {
  return (
    <button
      className="chat-option"
      onClick={onClick}
      style={{ "--border-color": borderColor } as React.CSSProperties}
    >
      {text}
    </button>
  );
};

export default ChatOptions;
