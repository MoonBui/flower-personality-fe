"use client"; // This is a client component 👈🏽


import { useState } from "react";
import { PhoneScreen, ChatOptions, ChatOptionsDisplay, ChatDisplay, Header } from "./components";
import { ReactNode } from "react";

export default function Home() {
  const [chatChoices, setChatChoice] = useState<ReactNode[]>([
    <ChatOptions text="Oh you're the florist?" key="1" />,
    <ChatOptions text="Who are you again?" key="2" />,
    <ChatOptions text="Hi bestie!!" key="3" />,
  ]);

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
            npcDiaLog="Good morning! The sun rises over your garden. What calls to you first?"
            userDiagLog="More sleep. Please let met go back to sleep..."
          />
          <ChatOptionsDisplay children={chatChoices} />
        </div>
      </PhoneScreen>
    </div>
  );
}