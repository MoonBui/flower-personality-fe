import { ReactNode, useState } from "react";
import ChatBubble from "./ChatBubble";

interface ChatDisplayProps {
    npcDiaLog: string
    userDiagLog: string
}

const ChatDisplay = ({npcDiaLog, userDiagLog}: ChatDisplayProps) => {
    const [npcDiaLogList, setNpcDialogList] = useState([]);
    const [userDiagLogList, setUserDialogList] = useState([]);
    return (
        <div className="chat-display flex-stretch gap-6">
            <div className="flex justify-start">
                <ChatBubble bgColor="beige" text={npcDiaLog} type="npc"/>
            </div>
            <div className="flex justify-end">
                <ChatBubble bgColor="ice" text={userDiagLog} type="user"/>
            </div>
        </div>
    )
}

export default ChatDisplay;