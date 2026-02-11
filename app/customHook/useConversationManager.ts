import { useState, useEffect } from "react";
import { Message, Choice, ChoiceOption } from "../types/quiz";
import {
  ConversationState,
  AppState,
  conversationIds,
} from "../types/conversationState";
import { FLOW_STORE_DATA } from "../Scripts/FlowerStoreScript";
import { FRIEND_CHAT_DATA } from "../Scripts/FriendScript";

const INITIAL_APP_STATE: AppState = {
  currentConversation: "flowerStore",
  conversations: {
    flowerStore: {
      currentIndex: 0,
      messages: [FLOW_STORE_DATA[0]],
      choices: FLOW_STORE_DATA[0].choices || null,
      showChatOptionsDisplay: true,
      dataSource: FLOW_STORE_DATA,
      isCompleted: false,
    },
    friend: {
      currentIndex: 0,
      messages: [FRIEND_CHAT_DATA[0]],
      choices: FRIEND_CHAT_DATA[0].choices || null,
      showChatOptionsDisplay: false,
      dataSource: FRIEND_CHAT_DATA,
      isCompleted: false,
    },
    guardian: {
      currentIndex: 0,
      messages: [],
      choices: null,
      showChatOptionsDisplay: false,
      dataSource: [],
      isCompleted: false,
    },
  },
  showNotification: false,
};

export function useConversationManager() {
  // Internal state
  const [appState, setAppState] = useState<AppState>(INITIAL_APP_STATE);

  // Computed values (derived from state)
  const currentConversation = appState.currentConversation;
  const currentMessages = appState.conversations[currentConversation].messages;
  const currentChoices = appState.conversations[currentConversation].choices;

  const updateConversationState = (
    conversationId: conversationIds,
    updates:
      | Partial<ConversationState>
      | ((prev: ConversationState) => Partial<ConversationState>),
  ) => {
    setAppState((prev) => {
      const currentConv = prev.conversations[conversationId];
      const actualUpdates =
        typeof updates === "function" ? updates(currentConv) : updates;

      return {
        ...prev,
        conversations: {
          ...prev.conversations,
          [conversationId]: {
            ...currentConv,
            ...actualUpdates,
          },
        },
      };
    });
  };

  const addMessageToConversation = (
    conversationId: conversationIds,
    message: { text: string; type: "npc" | "user" },
  ) => {
    const newMessage: Message = {
      id: Date.now(),
      type: message.type,
      text: message.text,
    };
    updateConversationState(conversationId, (prev) => ({
      messages: [...prev.messages, newMessage],
    }));
  };

  const sendNPCMessage = (
    index: number,
    conversationId: conversationIds = currentConversation,
  ) => {
    // Read fresh state each time through the updater
    const currentState = appState;
    const message =
      currentState.conversations[conversationId].dataSource[index];

    if (!message) return;

    addMessageToConversation(conversationId, {
      text: message.text,
      type: "npc",
    });
    updateConversationState(conversationId, { currentIndex: index });

    if (message.choices) {
      updateConversationState(conversationId, { choices: message.choices });
      setTimeout(
        () =>
          updateConversationState(conversationId, {
            showChatOptionsDisplay: true,
          }),
        1000,
      );
      return;
    } else {
      setTimeout(() => {
        sendNPCMessage(index + 1, conversationId); // Pass it along!
      }, 1000);
    }

    if (
      index ===
      currentState.conversations[conversationId].dataSource.length - 1
    ) {
      updateConversationState(conversationId, { isCompleted: true });
    }
  };

  const sendUserChoiceWithFollowUps = async (
    mainText: string,
    additionalText?: string[],
  ): Promise<void> => {
    addMessageToConversation(currentConversation, {
      text: mainText,
      type: "user",
    });
    updateConversationState(currentConversation, {
      showChatOptionsDisplay: false,
    });

    const sendAdditionalRecursively = (index: number): Promise<void> => {
      if (!additionalText || index >= additionalText.length)
        return Promise.resolve();
      return new Promise((resolve) => {
        setTimeout(() => {
          addMessageToConversation(currentConversation, {
            text: additionalText[index],
            type: "user",
          });
          resolve(sendAdditionalRecursively(index + 1));
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
      sendNPCMessage(
        appState.conversations[currentConversation].currentIndex + 1,
        currentConversation,
      );
    }, 1000);
  };

  // Persistence
  useEffect(() => {
    // Auto-save to localStorage whenever state changes
    localStorage.setItem("conversationAppState", JSON.stringify(appState));
  }, [appState]);

  // Return public API
  return {
    // State
    currentConversation: appState.currentConversation,
    messages: currentMessages,
    choices: currentChoices,
    showChatOptions:
      appState.conversations[currentConversation].showChatOptionsDisplay,

    // Actions
    // switchConversation,
    sendNPCMessage,
    addMessageToConversation,
    sendUserChoiceWithFollowUps,
    handleChoice,
    // addMessage: (text, type) => addMessageToConversation(appState.currentConversation, { text, type }),

    // Utilities
    // resetConversation: (id) => { /* */ },
    isConversationComplete: (id: conversationIds) =>
      appState.conversations[id].isCompleted,
  };
}
