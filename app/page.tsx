"use client";

import { useState } from "react";
import {
  PhoneScreen,
  ChatOptionsDisplay,
  ChatDisplay,
  Header,
  Notification,
} from "./components";
import { Message, Choice, ChoiceOption } from "./types/quiz";
import { FLOW_STORE_DATA } from "./Scripts/FlowerStoreScript";
import { FRIEND_CHAT_DATA } from "./Scripts/FriendScript";

export default function Home() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [message, setMessages] = useState<Message[]>([
    FLOW_STORE_DATA[currentIndex],
  ]);
  const [showChatOptionsDisplay, setShowChatOptionsDisplay] = useState(true);
  const [showNotification, setShowNotification] = useState(false);
  const [currentConversation, setCurrentConversation] = useState<string>(
    "flowerStore",
  );
    const [choice, setChoices] = useState<Choice>(
    FLOW_STORE_DATA[currentIndex].choices!,
  );

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
    sendNotification(index);
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

  const handleSwitchConversation = (conversation: string) => {
    // Placeholder for switching conversation logic
    console.log(`Switching to conversation: ${conversation}`);
    switch (conversation) {
      case "flowerStore":
        // Logic to switch to flower store conversation
        break;
      case "friend":
        // Logic to switch to friend conversation
        setCurrentIndex(0);
        setMessages(FRIEND_CHAT_DATA.slice(0, 1));
        setCurrentConversation("friend");
        // Adjustment to choices logic needed because right now choices is being tied to sendNPCMessage
        // setChoices(FRIEND_CHAT_DATA[currentIndex].choices!);
        break;
      case "guardian":
        // Logic to switch to guardian conversation
        break;
      default:
        break;
    }
  }

  // Refactor in the future, this only need to set to true, will pass an onclick to Notification component
  // Onclick will reset state to false
  const sendNotification = (index: number) => {
    console.log(showNotification, index, FLOW_STORE_DATA.length);
    if (index === FLOW_STORE_DATA.length - 1) {
      setTimeout(() => {
        setShowNotification(true);
      }, 2000);
      setShowNotification(true);
    } else {
      setShowNotification(false);
    }
  };

  return (
    <div className="h-dvh pt-4 bg-[#fcf5c4]">
      <PhoneScreen>
        <div className="flex flex-col h-full">
          {true && (
            <Notification
              avatar="./globe.svg"
              title="Placeholder"
              message="Placeholder"
              onClick={()=> handleSwitchConversation("friend")}
            />
          )}

          <Header avatar="./globe.svg" name="Placeholder" lineColor="sage" />
          <ChatDisplay
            messages={message}
            showChatOptionsDisplay={showChatOptionsDisplay}
          />
          {showChatOptionsDisplay && (
            <ChatOptionsDisplay choice={choice} onChoiceClick={handleChoice} />
          )}
        </div>
      </PhoneScreen>
    </div>
  );
}
