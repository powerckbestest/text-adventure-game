import React, { useState } from "react";
import axios from "axios";
import { GameConsole } from "./components/GameConsole";
import { Menu } from "./components/Menu";
import type { GameState, MenuState } from "./types";

const INITIAL_PROMPT =
  "You wake up in a mysterious forest. The air is thick with an otherworldly mist, and strange, bioluminescent plants cast an eerie glow around you. What do you do?";

function App() {
  const [gameState, setGameState] = useState<GameState>({
    history: [INITIAL_PROMPT],
    currentPrompt: "",
    isLoading: false,
    apiKey: null,
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
      const response = await axios.post(
        "https://api.openai.com/v1/chat/completions",
        {
          model: "gpt-4o",
          messages: [
            {
              role: "system",
              content:
                "You are a text adventure game. Respond with short, atmospheric descriptions of what happens based on the player's actions. Keep responses under 3 sentences. Use vivid, sci-fi horror imagery.",
            },
            ...gameState.history.map((msg) => ({
              role: msg.startsWith(">>") ? "user" : "system",
              content: msg,
            })),
            {
              role: "user",
              content: gameState.currentPrompt,
            },
          ],
        },
        {
          headers: {
            Authorization: `Bearer ${gameState.apiKey}`,
            "Content-Type": "application/json",
          },
        }
      );

      const aiResponse = response.data.choices[0].message.content;

      setGameState((prev) => ({
        ...prev,
        history: [...prev.history, aiResponse],
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
}

export default App;
