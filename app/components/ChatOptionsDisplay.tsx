import { ReactNode } from "react"
import { Choice } from "../types/quiz"
import ChatOptions from "./ChatOptions";

interface ChatOptionsDisplayProps {
    choices: Choice[];
    onChoiceClick: (choiceText: string) => void;
}

const ChatOptionsDisplay = ({choices, onChoiceClick}: ChatOptionsDisplayProps) => {
    return (
    <div className="flex flex-col gap-3 px-4 -mb-3">
        {choices.map(choice => (
            <ChatOptions
                key={choice.id}
                text={choice.text}
                onClick={() => onChoiceClick(choice.text)}
            />
        ))};
    </div>
    )

}

export default ChatOptionsDisplay;