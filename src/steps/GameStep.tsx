import { useState } from "react";
import { GameState, MenuState } from "../types";
import { Menu } from "../components/Menu";
import { GameConsole } from "../components/GameConsole";
import { sendMessage } from "../api/api";

const GameStep = ({ initialPrompt }: { initialPrompt: string }) => {
  const apiKeyFromLocalStorage = localStorage.getItem("apiKey");
  const [gameState, setGameState] = useState<GameState>({
    history: [initialPrompt],
    currentPrompt: "",
    isLoading: false,
    apiKey: apiKeyFromLocalStorage,
  });

  const [menuState, setMenuState] = useState<MenuState>({
    isOpen: false,
  });

  const handleInputChange = (input: string) => {
    setGameState((prev) => ({ ...prev, currentPrompt: input }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!gameState.currentPrompt || !gameState.apiKey) return;
    setGameState((prev) => ({
      ...prev,
      history: [...prev.history, `>> ${prev.currentPrompt}`],
      isLoading: true,
    }));

    try {
      const response = await sendMessage(gameState);

      setGameState((prev) => ({
        ...prev,
        history: [...prev.history, response.data.choices[0].message.content],
        currentPrompt: "",
        isLoading: false,
      }));
    } catch (error) {
      console.log(error);
      setGameState((prev) => ({
        ...prev,
        history: [
          ...prev.history,
          "ERROR: Failed to communicate with the AI. Please check your API key.",
        ],
        isLoading: false,
      }));
    }
  };

  const handleSetApiKey = (key: string) => {
    setGameState((prev) => ({ ...prev, apiKey: key }));
    setMenuState((prev) => ({ ...prev, isOpen: false }));
  };

  return (
    <div className="relative">
      <Menu
        isOpen={menuState.isOpen}
        onToggle={() =>
          setMenuState((prev) => ({ ...prev, isOpen: !prev.isOpen }))
        }
        onSetApiKey={handleSetApiKey}
      />
      <GameConsole
        history={gameState.history}
        currentInput={gameState.currentPrompt}
        onInputChange={handleInputChange}
        onSubmit={handleSubmit}
        isLoading={gameState.isLoading}
        apiKey={gameState.apiKey}
      />
    </div>
  );
};

export default GameStep;
