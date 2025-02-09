import { useState } from "react";
import { Wizard } from "react-use-wizard";
import StoryChooseStep from "./steps/StoryChooseStep";
import GameStep from "./steps/GameStep";

function App() {
  const [initialPrompt, setInitialPrompt] = useState<string>("");

  return (
    <div className="relative">
      <Wizard>
        <StoryChooseStep setInitialPrompt={setInitialPrompt} />
        <GameStep initialPrompt={initialPrompt} />
      </Wizard>
    </div>
  );
}

export default App;
