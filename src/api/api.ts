import axios from "axios";
import { gameInstructions } from "../constants";
import { GameState } from "../types";

export const sendMessage = (gameState: GameState) => {
  return axios.post(
    "https://api.openai.com/v1/chat/completions",
    {
      model: "gpt-4o",
      messages: [
        {
          role: "system",
          content: gameInstructions,
        },
        ...gameState.history
          .map((msg) => ({
            role: msg.startsWith(">>") ? "user" : "system",
            content: msg,
          }))
          .filter((msg) => !msg.content.startsWith("ERROR:")),
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
};
