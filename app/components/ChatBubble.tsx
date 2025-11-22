interface ChatBubbleProps {
    bgColor: keyof typeof COLOR_CHOICE;
    text: string;
}

const COLOR_CHOICE = {
    "blush": "FAC1B3",
    "ice": "ADD6FF",
    "sage": "9BBFA7"
} as const;

const ChatBubble = ({bgColor, text}: ChatBubbleProps) => {
    const hexColor = COLOR_CHOICE[bgColor];
    
    return (
        <div 
            className="text-[#0A100D] text-center py-2 px-4 rounded-2xl"
            style={{ backgroundColor: `#${hexColor}` }}
        >
            {text}
        </div>
    )
};

export default ChatBubble;