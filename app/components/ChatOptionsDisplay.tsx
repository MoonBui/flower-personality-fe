import { Choice, ChoiceOption } from "../types/quiz";
import ChatOptions from "./ChatOptions";

interface ChatOptionsDisplayProps {
  choice: Choice | null;
  onChoiceClick: (choiceOption: ChoiceOption) => void;
  chatGradient: string;
}

const ChatOptionsDisplay = ({
  choice,
  onChoiceClick,
  chatGradient,
}: ChatOptionsDisplayProps) => {
  return (
    <div
      className={`flex flex-col gap-3 py-4 px-4`}
      style={{
        backgroundImage: `linear-gradient(to bottom, #add6ff, ${chatGradient} 60%, #f5faff 95%)`,
      }}
    >
      {choice?.options.map((option) => (
        <ChatOptions
          key={option.id}
          text={option.text}
          onClick={() => onChoiceClick(option)}
          borderColor={chatGradient}
        />
      ))}
    </div>
  );
};

export default ChatOptionsDisplay;
