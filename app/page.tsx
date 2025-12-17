"use client";

import { useState } from "react";
import {
  PhoneScreen,
  ChatOptionsDisplay,
  ChatDisplay,
  Header,
} from "./components";
import { Message, Choice, ChoiceOption } from "./types/quiz";
import { FLOW_STORE_DATA } from "./Scripts/FlowerStoreScript";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [message, setMessages] = useState<Message[]>([
    FLOW_STORE_DATA[currentIndex],
  ]);
  const [showChatOptionsDisplay, setShowChatOptionsDisplay] = useState(true);

  const addMessage = (text: string, type: "npc" | "user") => {
    const newMessage: Message = {
      id: Date.now(),
      type,
      text,
    };
    setMessages((previous) => {
      return [...previous, newMessage];
    });
  };

  const [choice, setChoices] = useState<Choice>(
    FLOW_STORE_DATA[currentIndex].choices!,
  );

  const sendNPCMessage = (index: number) => {
    const message = FLOW_STORE_DATA[index];
    if (!message) return;

    addMessage(message.text, "npc");
    setCurrentIndex(index);

    if (message.choices) {
      setChoices(message.choices);
      setTimeout(() => setShowChatOptionsDisplay(true), 1000);
      return;
    } else {
      setTimeout(() => {
        sendNPCMessage(index + 1);
      }, 1000);
    }
  };

  const sendUserChoiceWithFollowUps = async (
    mainText: string,
    additionalText?: string[],
  ) => {
    setShowChatOptionsDisplay(false);
    addMessage(mainText, "user");

    // If there's additional text, send it recursively with delays
    const sendAdditionalRecursively = (index: number): Promise<void> => {
      if (!additionalText || index >= additionalText.length)
        return Promise.resolve();

      return new Promise((resolve) => {
        setTimeout(() => {
          addMessage(additionalText[index], "user");
          sendAdditionalRecursively(index + 1).then(resolve);
        }, 1000);
      });
    };
    await sendAdditionalRecursively(0);
  };

  const handleChoice = async (choiceOption: ChoiceOption) => {
    await sendUserChoiceWithFollowUps(
      choiceOption.text,
      choiceOption.additionalText,
    );
    setTimeout(() => {
      sendNPCMessage(currentIndex + 1);
    }, 1000);
  };

  return (
    <div className="h-dvh pt-4 bg-[#fcf5c4]">
      <PhoneScreen>
        <div className="flex flex-col h-full">
          <Header avatar="./globe.svg" name="Placeholder" lineColor="sage" />
          <ChatDisplay messages={message} showChatOptionsDisplay={showChatOptionsDisplay} />
          {showChatOptionsDisplay && (
            <ChatOptionsDisplay choice={choice} onChoiceClick={handleChoice} />
          )}
        </div>
      </PhoneScreen>
    </div>
  );
}
