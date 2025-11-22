import ChatBubble from "./ChatBubble"
import { ReactNode } from "react"

interface ChatOptionsProps {
    children: ReactNode
}

const ChatOptions = ({children}: ChatOptionsProps) => {
    return (
    <div className="flex flex-col gap-3 p-4">
        {children}
    </div>
    )

}

export default ChatOptions;