import { ReactNode } from "react"

interface ChatOptionsDisplayProps {
    children: ReactNode
}

const ChatOptionsDisplay = ({children}: ChatOptionsDisplayProps) => {
    return (
    <div className="flex flex-col mt-3 gap-3 p-4">
        {children}
    </div>
    )

}

export default ChatOptionsDisplay;