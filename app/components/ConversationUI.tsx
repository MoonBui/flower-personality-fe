"use client";

import { useState } from "react";
import {
  PhoneScreen,
  ChatOptionsDisplay,
  ChatDisplay,
  Header,
  Notification,
} from "../components";
import { useConversationManager } from "../customHook/useConversationManager";
import {
  useThemeUIManager,
  COLOR_THEME,
} from "../customHook/useThemeUIManager";

export default function ConversationUI() {
  const {
    messages,
    choices,
    showChatOptions: showChatOptionsDisplay,
    handleChoice,
    switchConversation,
  } = useConversationManager();

  const { currentTheme, toggleTheme } = useThemeUIManager();

  const [showNotification, setShowNotification] = useState(true);

  return (
    <div className="h-dvh py-4 bg-[#fcf5c4]">
      <PhoneScreen>
        <div className="flex flex-col h-full">
          {showNotification && (
            <Notification
              avatar="./globe.svg"
              title="Human ✨"
              message="Oiiiiiiiiii"
              colorTheme={COLOR_THEME.guardian}
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
            lineColor={COLOR_THEME[currentTheme].dark}
          />
          <ChatDisplay
            messages={messages}
            bubbleColor={COLOR_THEME[currentTheme].light}
            showChatOptionsDisplay={showChatOptionsDisplay}
          />
          {showChatOptionsDisplay && (
            <ChatOptionsDisplay
              choice={choices}
              onChoiceClick={handleChoice}
              chatGradient={COLOR_THEME[currentTheme].light}
            />
          )}
        </div>
      </PhoneScreen>
    </div>
  );
}
