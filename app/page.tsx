"use client"; // This is a client component 👈🏽


import { useState } from "react";
import { PhoneScreen, ChatBubble, ChatOptions, ChatDisplay, Header } from "./components";
import { ReactNode } from "react";

export default function Home() {
  const [chatChoices, setChatChoice] = useState<ReactNode[]>([
    <ChatBubble bgColor="blush" text="Oh you're the florist?" key="1" />,
    <ChatBubble bgColor="blush" text="Who are you again?" key="2" />,
    <ChatBubble bgColor="blush" text="Hi bestie!!" key="3" />,
  ]);

  return (
    <div className="h-dvh pt-4 bg-[#fcf5c4]">
      <PhoneScreen>
        <div className="flex flex-col">
          <Header 
            avatar="./globe.svg"
            name="Placeholder"
            lineColor="blush"
          />
          <ChatDisplay/>
          <ChatOptions children={chatChoices} />
        </div>
      </PhoneScreen>
    </div>
  );
}