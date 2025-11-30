export interface FlowStoreScript {
    id: string;
    npcMessage: string;
    choices: {
        id: string;
        text: string;
        emoji?: string;
        tags: Record<string, number>; // personality traits
    }[];
}

export const FLOW_STORE_DATA: FlowStoreScript[] = [
    {
    id: "morning-intro",
    npcMessage: "Good morning! The sun rises over your garden. What calls to you first?",
    choices: [
      { 
        id: "coffee", 
        text: "A warm cup of coffee ☕", 
        tags: { energetic: 2, social: 1, warm: 2 } 
      },
      { 
        id: "tea", 
        text: "Peaceful tea time 🍵", 
        tags: { calm: 3, introspective: 2 } 
      },
      { 
        id: "sunrise", 
        text: "Watching the sunrise 🌅", 
        tags: { optimistic: 3, reflective: 2 } 
      },
      // ... more choices
    ]
  },
  {
    id: "morning-followup",  
    npcMessage: "Nice choice! What sounds do you want to hear?",
    choices: [
      { id: "birds", text: "Bird songs 🐦", tags: { natural: 2, peaceful: 2 } },
      { id: "silence", text: "Comfortable silence 🤫", tags: { introspective: 3 } },
      // ...
    ]
  },
  
  // Screen 2: Afternoon
  {
    id: "afternoon-intro",
    npcMessage: "The garden is yours to shape. What do you add first?",
    choices: [
      { id: "butterflies", text: "Butterflies 🦋", tags: { free: 3, playful: 2 } },
      { id: "fountain", text: "A fountain ⛲", tags: { social: 2, lively: 3 } },
      // ...
    ]
  },
  
  // Screen 3: Evening
  {
    id: "evening-intro",
    npcMessage: "As twilight falls, how does your garden transform?",
    choices: [
      { id: "lanterns", text: "Soft lanterns 🕯️", tags: { warm: 2, cozy: 3 } },
      { id: "fireflies", text: "Fireflies ✨", tags: { magical: 3, whimsical: 2 } },
      // ...
    ]
  }
]