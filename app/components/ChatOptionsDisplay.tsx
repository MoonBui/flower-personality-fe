import { Choice, ChoiceOption } from "../types/quiz";
import ChatOptions from "./ChatOptions";

interface ChatOptionsDisplayProps {
  choice: Choice;
  onChoiceClick: (choiceOption: ChoiceOption) => void;
}

const ChatOptionsDisplay = ({
  choice,
  onChoiceClick,
}: ChatOptionsDisplayProps) => {
  return (
    <div className="flex flex-col gap-3 pt-4 px-4 -mb-3 bg-[#cde5fd]">
      {choice.options.map((option) => (
        <ChatOptions
          key={option.id}
          text={option.text}
          onClick={() => onChoiceClick(option)}
        />
      ))}
      ;
    </div>
  );
};

export default ChatOptionsDisplay;
