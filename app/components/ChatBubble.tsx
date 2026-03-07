interface ChatBubbleProps {
  bgColor: string;
  text: string;
}

const ChatBubble = ({ bgColor, text }: ChatBubbleProps) => {
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
