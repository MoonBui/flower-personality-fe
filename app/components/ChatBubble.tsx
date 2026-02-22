interface ChatBubbleProps {
  bgColor: string;
  text: string;
  type: string;
}

const ChatBubble = ({ bgColor, text, type }: ChatBubbleProps) => {
  return (
    <div
      className={`chat-bubble`}
      style={
        {
          "--bubble-color": `${bgColor}`,
        } as React.CSSProperties
      }
    >
      {text}
    </div>
  );
};

export default ChatBubble;
