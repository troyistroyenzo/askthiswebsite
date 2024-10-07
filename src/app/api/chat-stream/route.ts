import { NextRequest } from "next/server";
import { ragChat } from "@/lib/rag-chat";
import { aiUseChatAdapter } from "@upstash/rag-chat/nextjs";

export const POST = async (req: NextRequest) => {
    const {messages, sessionId} = await req.json()

    const lastMessages = messages[messages.length - 1].content

    const response = await ragChat.chat(lastMessages, {streaming: true, sessionId})

    return aiUseChatAdapter(response)
}