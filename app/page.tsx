"use client";


import { useState } from "react";
import { PhoneScreen, ChatOptionsDisplay, ChatDisplay, Header } from "./components";
import { Message, Choice, ChoiceOption } from "./types/quiz";
import { FLOW_STORE_DATA } from "./Scripts/FlowerStoreScript";


export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [message, setMessages] = useState<Message[]>([FLOW_STORE_DATA[currentIndex]]);

  const addMessage = (text: string, type: "npc" | "user") => {
    const newMessage: Message = {
      id: Date.now(),
      type,
      text
    };
    setMessages(previous => {
      return [...previous, newMessage]
    });
  };

  const [choice, setChoices] = useState<Choice>(
    FLOW_STORE_DATA[currentIndex].choices!
  );

  const sendNPCMessage = (index: number) => {
    const message = FLOW_STORE_DATA[index];
    if (!message) return;

    addMessage(message.text, "npc");
    setCurrentIndex(index);

    if (message.choices) {
      setChoices(message.choices);
      return;
    } else {
      setTimeout(() => {
        sendNPCMessage(index + 1);
      }, 1000);
    }

  };

  const sendUserChoiceWithFollowUps = (mainText: string, additionalText?: string[]) => {
    // Send main text immediately
    addMessage(mainText, "user");
    
    // If there's additional text, send it recursively with delays
    const sendAdditionalRecursively = (index: number) => {
      if (!additionalText || index >= additionalText.length) return;
      
      setTimeout(() => {
        addMessage(additionalText[index], "user");
        sendAdditionalRecursively(index + 1);
      }, 1000);
    };
    sendAdditionalRecursively(0);
};


  const handleChoice = (choiceOption: ChoiceOption) => {
    sendUserChoiceWithFollowUps(choiceOption.text, choiceOption.additionalText);
    setTimeout(() => {
      sendNPCMessage(currentIndex+1);
      }, 1000);
    };

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
          <ChatOptionsDisplay choice={choice} onChoiceClick={handleChoice} />
        </div>
      </PhoneScreen>
    </div>
  );
}