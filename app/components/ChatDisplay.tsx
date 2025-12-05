import { ReactNode, useLayoutEffect, useRef, useState } from "react";
import ChatBubble from "./ChatBubble";
import { Message } from "../types/quiz";

interface ChatDisplayProps {
    messages: Message[];
}

const ChatDisplay = ({messages}: ChatDisplayProps) => {
    const messageEndRef = useRef<HTMLDivElement>(null);
    useLayoutEffect(() => {
        messageEndRef.current?.scrollIntoView({ behavior: "smooth", block: "end" });
    }, [messages]);
    
    return (
        <div className="chat-display">
            <div className="messages-container gap-6">
                {messages.map(msg => (
                    <div className={`${msg.type === "npc" ? "flex justify-start" : "flex justify-end"}`} key={msg.id}>
                        <ChatBubble 
                            bgColor={msg.type === "npc" ? "beige" : "ice"} 
                            text={msg.text} 
                            type={msg.type} 
                        />
                    </div>
                ))}
                <div ref={messageEndRef} />
            </div>
        </div>
    );
};

export default ChatDisplay;