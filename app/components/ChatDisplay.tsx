import { ReactNode, useState } from "react";
import ChatBubble from "./ChatBubble";
import { Message } from "../types/quiz";

interface ChatDisplayProps {
    messages: Message[];
}

const ChatDisplay = ({messages}: ChatDisplayProps) => {
    return (
        <div className="chat-display flex-stretch gap-6">
            {messages.map(msg => (
                <div className={`${msg.type === "npc" ? "flex justify-start" : "flex justify-end"}`} key={msg.id}>
                    <ChatBubble 
                        bgColor={msg.type === "npc" ? "beige" : "ice"} 
                        text={msg.text} 
                        type={msg.type} 
                    />
                </div>
            ))};
        </div>
    );
};

export default ChatDisplay;