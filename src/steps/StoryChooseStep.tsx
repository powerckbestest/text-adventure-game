import { useWizard } from "react-use-wizard";
import { startingPoints } from "../constants";

const StoryChooseStep = ({
  setInitialPrompt,
}: {
  setInitialPrompt: (value: string) => void;
}) => {
  const { nextStep } = useWizard();

  const handleChooseInitialPrompt = (initialPrompt: string) => {
    setInitialPrompt(initialPrompt);
    nextStep();
  };
  return (
    <div className="h-screen bg-black p-8 overflow-hidden flex flex-col items-center">
      <h1 className="text-green-400 font-vt323 text-8xl">Choose the story</h1>
      <div className="flex flex-col">
        {startingPoints.map((startingPoint) => (
          <button
            key={startingPoint.id}
            className="text-green-600 font-vt323 text-2xl border mt-2 hover:bg-gray-700"
            onClick={() =>
              handleChooseInitialPrompt(startingPoint.initialPrompt)
            }
          >
            {startingPoint.title}
          </button>
        ))}
      </div>
    </div>
  );
};

export default StoryChooseStep;
