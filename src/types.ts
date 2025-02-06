export interface GameState {
  history: string[];
  currentPrompt: string;
  isLoading: boolean;
  apiKey: string | null;
}

export interface MenuState {
  isOpen: boolean;
}