import React, { useEffect, useRef } from "react";

interface GameConsoleProps {
  history: string[];
  currentInput: string;
  onInputChange: (input: string) => void;
  onSubmit: (e: React.FormEvent) => void;
  isLoading: boolean;
  apiKey: string | null;
}

export const GameConsole: React.FC<GameConsoleProps> = ({
  history,
  currentInput,
  onInputChange,
  onSubmit,
  isLoading,
  apiKey,
}) => {
  const consoleEndRef = useRef<HTMLDivElement>(null);
  const initialPlaceholder = apiKey
    ? "What do you do?"
    : "Please insert API key (top right button)";

  useEffect(() => {
    consoleEndRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  return (
    <div className="h-screen bg-black p-8 overflow-hidden flex flex-col">
      <div className="flex-1 overflow-y-auto mb-4 text-green-400 font-vt323">
        {history.map((text, index) => (
          <div
            key={index}
            className={`mb-4 text-2xl ${
              text.startsWith(">>") ? "text-green-600" : ""
            }`}
          >
            {text}
          </div>
        ))}
        {isLoading && <div>Thinking...</div>}
        <div ref={consoleEndRef} />
      </div>
      <form onSubmit={onSubmit} className="relative">
        <div className="flex items-center text-green-400 text-2xl font-vt323">
          <span className="mr-2">&gt;&gt;</span>
          <input
            type="text"
            value={currentInput}
            onChange={(e) => onInputChange(e.target.value)}
            className="flex-1 bg-transparent border-none outline-none text-green-400 font-vt323 text-2xl"
            placeholder={initialPlaceholder}
            disabled={isLoading}
          />
        </div>
      </form>
    </div>
  );
};
