import { on } from "events";

interface ChatOptionsProps {
    text: string;
    onClick: () => void;
}

const ChatOptions = ({text, onClick}: ChatOptionsProps) => {    
    return (
        <button className="chat-option" onClick={onClick}>
            {text}
        </button>
    )
};

export default ChatOptions;