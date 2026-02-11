import { Message, Choice } from "../types/quiz";

export type conversationIds = "flowerStore" | "friend" | "guardian";

export interface ConversationState {
  currentIndex: number;
  messages: Message[];
  choices: Choice | null;
  showChatOptionsDisplay: boolean;
  dataSource: Message[];
  isCompleted: boolean;
}

export interface AppState {
  currentConversation: conversationIds;
  conversations: {
    flowerStore: ConversationState;
    friend: ConversationState;
    guardian: ConversationState;
  };
  showNotification: boolean;
}
