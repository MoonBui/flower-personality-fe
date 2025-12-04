"use client";


import { useState } from "react";
import { PhoneScreen, ChatOptions, ChatOptionsDisplay, ChatDisplay, Header } from "./components";
import { ReactNode } from "react";
import { Message } from "./types/quiz";


export default function Home() {
  const [message, setMessages] = useState<Message[]>([
    { 
      id: 1, 
      type: 'npc', 
      text: "Good morning! The sun rises over your garden. What calls to you first?" 
    }
  ]);

  const [choice, setChoices] = useState([
    {id: "choice1", text: "Oh you're the florist?"},
    {id: "choice2", text: "Who are you again?"},
    {id: "choice3", text: "Hi bestie!!"},
  ]);

  const addMessage = (text: string, type: "npc" | "user") => {
    const newMessage: Message = {
      id: Date.now(),
      type,
      text
    };
    setMessages([...message, newMessage]);
  };

  const handleChoice = (choiceText: string) => {
    addMessage(choiceText, "user");
    console.log("User selected:", choiceText);
  }

  return (
    <div className="h-dvh pt-4 bg-[#fcf5c4]">
      <PhoneScreen>
        <div className="flex flex-col h-full">
          <Header 
            avatar="./globe.svg"
            name="Placeholder"
            lineColor="sage"
          />
          <ChatDisplay
            messages={message}
          />
          <ChatOptionsDisplay choices={choice} onChoiceClick={handleChoice} />
        </div>
      </PhoneScreen>
    </div>
  );
}