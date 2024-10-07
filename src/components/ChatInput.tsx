"use client"

import { Button, Textarea } from "@nextui-org/react"
import { Send } from "lucide-react"
import {type useChat} from "ai/react"


type HandleInputChange = ReturnType<typeof useChat>["handleInputChange"]
type HandleSubmit = ReturnType<typeof useChat>["handleSubmit"]
type SetInput = ReturnType<typeof useChat>["setInput"]

interface ChatInputProps {
    input: string
    handleInputChange: HandleInputChange
    handleSubmit: HandleSubmit
    setInput: SetInput
}

export const ChatInput = ({handleInputChange, handleSubmit, input, setInput}
    : ChatInputProps) => {
    return <div className="z-10 bg-[#0F111A] absolute
    bottom-0 left-0 w-full">
        <div className="mx-2 flex flex-row gap-3 md:mx-4 md:last:mb-6 lg:mx-auto lg:max-w-2xl xl:max-w-3xl">
            <div className="relative flex h-full flex-1 items-stretch md:flex-col">
                <div className="relative flex flex-col w-full flex-grow p-4">
                    <form onSubmit={handleSubmit} className="relative bg-[#1E1F2B]">
                        <Textarea onChange={handleInputChange} value={input} onKeyDown={(e) => {
                            if(e.key === "Enter" && !e.shiftKey) {
                                e.preventDefault()
                                handleSubmit()
                                setInput("")
                            }
                        }} minRows={4} autoFocus placeholder="Ask anything..." className="resize-none bg-[#1E1F2B] hover:bg-zinc-900 rounded-xl text-base"/>
                        <Button size="sm" type="submit" className="absolute z-10 border border-border bg-[#1E1F2B] right-2 bottom-2">
                            <Send className="size-4" />
                        </Button>
                    </form>
                </div>
            </div>
        </div>
    </div>
}