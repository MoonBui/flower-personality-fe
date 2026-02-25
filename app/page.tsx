"use client";

import { useState } from "react";
import {
  PhoneScreen,
  ChatOptionsDisplay,
  ChatDisplay,
  Header,
  Notification,
} from "./components";
import { useConversationManager } from "./customHook/useConversationManager";
import { useThemeUIManager, COLOR_THEME } from "./customHook/useThemeUIManager";

export default function Home() {
  const {
    messages,
    choices,
    showChatOptions: showChatOptionsDisplay,
    handleChoice,
    switchConversation,
  } = useConversationManager();

  const { currentTheme, toggleTheme } = useThemeUIManager();

  const [showNotification, setShowNotification] = useState(true);
  // const handleSwitchConversation = (conversation: string) => {
  //   // Placeholder for switching conversation logic
  //   console.log(`Switching to conversation: ${conversation}`);
  //   switch (conversation) {
  //     case "flowerStore":
  //       // Logic to switch to flower store conversation
  //       break;
  //     case "friend":
  //       // Logic to switch to friend conversation
  //       setCurrentIndex(0);
  //       setMessages(FRIEND_CHAT_DATA.slice(0, 1));
  //       setCurrentConversation("friend");
  //       // Adjustment to choices logic needed because right now choices is being tied to sendNPCMessage
  //       // setChoices(FRIEND_CHAT_DATA[currentIndex].choices!);
  //       break;
  //     case "guardian":
  //       // Logic to switch to guardian conversation
  //       break;
  //     default:
  //       break;
  //   }
  // };

  // // Refactor in the future, this only need to set to true, will pass an onclick to Notification component
  // // Onclick will reset state to false
  // const sendNotification = (index: number) => {
  //   console.log(showNotification, index, FLOW_STORE_DATA.length);
  //   if (index === FLOW_STORE_DATA.length - 1) {
  //     setTimeout(() => {
  //       setShowNotification(true);
  //     }, 2000);
  //     setShowNotification(true);
  //   } else {
  //     setShowNotification(false);
  //   }
  // };

  //   useEffect(() => {
  //   // Start sending messages from index 1 (since index 0 is already in initial state)
  //   sendNPCMessage(1);
  // }, []);
  console.log(COLOR_THEME[currentTheme].chatGradient);

  return (
    <div className="h-dvh py-4 bg-[#fcf5c4]">
      <PhoneScreen>
        <div className="flex flex-col h-full">
          {showNotification && (
            <Notification
              avatar="./globe.svg"
              title="Human ✨"
              message="Oiiiiiiiiii"
              onClick={() => {
                switchConversation("guardian");
                toggleTheme("guardian");
                setShowNotification(false);
              }}
            />
          )}

          <Header
            avatar="./globe.svg"
            name="Placeholder"
            lineColor={COLOR_THEME[currentTheme].headerLine}
          />
          <ChatDisplay
            messages={messages}
            bubbleColor={COLOR_THEME[currentTheme].bubbleChat}
            showChatOptionsDisplay={showChatOptionsDisplay}
          />
          {showChatOptionsDisplay && (
            <ChatOptionsDisplay
              choice={choices}
              onChoiceClick={handleChoice}
              chatGradient={COLOR_THEME[currentTheme].chatGradient}
            />
          )}
        </div>
      </PhoneScreen>
    </div>
  );
}
