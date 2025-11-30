interface ChatBubbleProps {
    bgColor: keyof typeof COLOR_CHOICE;
    text: string;
}

const COLOR_CHOICE = {
    "npc": {
        base: " D6D9BF",
        hover: "D6D9BF"
    },  
    "blush": {
        base: "fde0d9",
        hover: "FAC1B3"
    },
    "ice": {
        base: "ADD6FF",
        hover: "CDE5FD"
    },
    "sage": {
        base: "9BBFA7",
        hover: "DAE7DE"
    }
} as const;

const ChatBubble = ({bgColor, text}: ChatBubbleProps) => {
    const bGBubColor = COLOR_CHOICE[bgColor];
    
    return (
        <div 
            className="chat-bubble"
            style={{ 
                '--bubble-color': `#${bGBubColor.base}`,
                '--bubble-color-hover': `#${bGBubColor.hover}`
             } as React.CSSProperties}
        >
            {text}
        </div>
    )
};

export default ChatBubble;