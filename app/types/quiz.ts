export interface Message {
  id: number;
  type: 'npc' | 'user';
  text: string;
}

export interface Choice {
  id: string;
  text: string;
}