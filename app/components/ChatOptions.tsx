interface ChatOptionsProps {
    text: string;
}

const ChatOptions = ({text}: ChatOptionsProps) => {    
    return (
        <div className="chat-option">
            {text}
        </div>
    )
};

export default ChatOptions;