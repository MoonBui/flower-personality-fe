'use client';

import { useLocalStorage } from 'usehooks-ts';
import { useState, useEffect, use, useCallback } from "react";
import { Message, ChoiceOption } from "../types/quiz";
import {
  ConversationState,
  AppState,
  conversationIds,
} from "../types/conversationState";
import { FLOW_STORE_DATA } from "../Scripts/FlowerStoreScript";
import { FRIEND_CHAT_DATA } from "../Scripts/FriendScript";
import { GUARDIAN_CHAT_DATA } from "../Scripts/GuardianScript";

const INITIAL_APP_STATE: AppState = {
  currentConversation: "flowerStore",
  conversations: {
    flowerStore: {
      currentIndex: 0,
      messages: [],
      choices: null,
      showChatOptionsDisplay: true,
      dataSource: FLOW_STORE_DATA,
      isCompleted: false,
    },
    friend: {
      currentIndex: 0,
      messages: [],
      choices: null,
      showChatOptionsDisplay: false,
      dataSource: FRIEND_CHAT_DATA,
      isCompleted: false,
    },
    guardian: {
      currentIndex: 0,
      messages: [],
      choices: null,
      showChatOptionsDisplay: false,
      dataSource: GUARDIAN_CHAT_DATA,
      isCompleted: false,
    },
  },
  showNotification: false,
};

export function useConversationManager() {
  // Internal state
  const [appState, setAppState] = useLocalStorage<AppState>("conversationAppState", INITIAL_APP_STATE); // Sync with localStorage
  const [isMounted, setIsMounted] = useState(false);
  const state = isMounted ? appState : INITIAL_APP_STATE; // Use localStorage state only after mount to avoid hydration issues

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

  const sendNPCMessage = useCallback(
    (index: number, conversationId: conversationIds = currentConversation) => {
      // Read fresh state each time through the updater
      const currentState = state;
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
  }, [currentConversation]);

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
        state.conversations[currentConversation].currentIndex + 1,
        currentConversation,
      );
    }, 1000);
  };

  const switchConversation = (newConversationId: conversationIds) => {
    setAppState((prev) => ({
      ...prev,
      currentConversation: newConversationId,
    }));
    sendNPCMessage(
      state.conversations[newConversationId].currentIndex,
      newConversationId,
    );
  };

  useEffect(() => {
    setIsMounted(true);
    sendNPCMessage(0, "flowerStore");
  }, []);

  // Return public API
  return {
    // State
    currentConversation: state.currentConversation,
    messages: currentMessages,
    choices: currentChoices,
    showChatOptions:
      state.conversations[state.currentConversation].showChatOptionsDisplay,
    // Actions
    switchConversation,
    sendNPCMessage,
    addMessageToConversation,
    sendUserChoiceWithFollowUps,
    handleChoice,

    // Utilities
    // resetConversation: (id) => { /* */ },
    isConversationComplete: (id: conversationIds) =>
      state.conversations[id].isCompleted,
  };
}
