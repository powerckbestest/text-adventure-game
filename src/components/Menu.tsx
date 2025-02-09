import React, { useState } from "react";
import { Menu as MenuIcon, X, ListRestart } from "lucide-react";
import { useWizard } from "react-use-wizard";

interface MenuProps {
  isOpen: boolean;
  onToggle: () => void;
  onSetApiKey: (key: string) => void;
}

export const Menu: React.FC<MenuProps> = ({
  isOpen,
  onToggle,
  onSetApiKey,
}) => {
  const { previousStep } = useWizard();

  const [apiKey, setApiKey] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSetApiKey(apiKey);
    localStorage.setItem("apiKey", apiKey);
  };

  return (
    <div className="absolute top-0 right-0 z-50">
      <button
        onClick={onToggle}
        className="p-4 text-green-400 hover:text-green-300 transition-colors"
      >
        {isOpen ? <X size={24} /> : <MenuIcon size={24} />}
      </button>

      {isOpen && (
        <div className="absolute right-0 mt-2 w-80 bg-black border border-green-400 shadow-lg p-4">
          <div className="flex justify-between">
            <h2 className="text-green-400 text-xl mb-4 font-vt323">Settings</h2>
            <ListRestart
              className="hover:cursor-pointer"
              onClick={previousStep}
            />
          </div>
          <form onSubmit={handleSubmit}>
            <label className="block text-green-400 mb-2 font-vt323">
              OpenAI API Key
            </label>
            <input
              type="password"
              value={apiKey}
              onChange={(e) => setApiKey(e.target.value)}
              className="w-full bg-black border border-green-400 text-green-400 p-2 mb-4 font-vt323 focus:outline-none focus:ring-1 focus:ring-green-400"
              placeholder="sk-..."
            />
            <button
              type="submit"
              className="w-full bg-green-400 text-black py-2 px-4 font-vt323 hover:bg-green-300 transition-colors"
            >
              Save API Key
            </button>
            <div className="text-center">
              The app was made by powerck. The rights are not reserved. ©2025
              <a
                className="underline ml-2"
                href="https://github.com/powerckbestest/text-adventure-game"
              >
                github link
              </a>
            </div>
          </form>
        </div>
      )}
    </div>
  );
};
