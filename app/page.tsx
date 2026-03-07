"use client";

import dynamic from "next/dynamic";

const ConversationUI = dynamic(() => import("./components/ConversationUI"), {
  ssr: false,
});

export default function Home() {
  return (
    <div className="h-dvh py-4 bg-[#fcf5c4]">
      <ConversationUI />
    </div>
  );
}
