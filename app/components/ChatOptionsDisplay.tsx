import { Choice, ChoiceOption } from "../types/quiz";
import ChatOptions from "./ChatOptions";

interface ChatOptionsDisplayProps {
  choice: Choice | null;
  onChoiceClick: (choiceOption: ChoiceOption) => void;
}

const ChatOptionsDisplay = ({
  choice,
  onChoiceClick,
}: ChatOptionsDisplayProps) => {
  return (
    <div className="flex flex-col gap-3 py-4 px-4 bg-linear-to-b from-chat-display-dark-blue via-[#DAE7DE] to-chat-display-light-blue">
      {choice?.options.map((option) => (
        <ChatOptions
          key={option.id}
          text={option.text}
          onClick={() => onChoiceClick(option)}
        />
      ))}
    </div>
  );
};

export default ChatOptionsDisplay;
