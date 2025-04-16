"use client";
import Image from "next/image";
import logoF1 from "../assets/logo.png";
import { useChat } from "ai/react";
import { Message } from "ai";

import Bubble from "@/components/Bubble";
import LoadingBubble from "@/components/LoadingBubble";
import PromptSuggestionsRow from "@/components/PromptSuggestionsRow";

export default function Home() {
  const {
    append,
    isLoading,
    messages,
    input,
    handleInputChange,
    handleSubmit,
  } = useChat();

  const noMessage = !messages || messages.length === 0;

  const handlePrompt = (promptText) => {
    const msg = {
      id: crypto.randomUUID(),
      content: promptText,
      role: "user",
    };
    append(msg);
  };

  return (
    <main>
      <Image src={logoF1} alt="F1 Logo" />
      <section className={noMessage ? "" : ""}>
        {noMessage ? (
          <>
            <p className="starter-text">
              Xin chào! Tôi có thể giúp gì cho bạn?
            </p>
            <br />

            {/* <PromptSuggestionsRow /> */}
            <PromptSuggestionsRow onPromptClick={handlePrompt} />
          </>
        ) : (
          <>
            {/**map messages onto text bubbles */}
            {messages.map((message, index) => (
              <Bubble key={`message-${index}`} message={message} />
            ))}

            {/* <LoadingBubble /> */}
            {isLoading && <LoadingBubble />}
          </>
        )}
      </section>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          className="question-box"
          onChange={handleInputChange}
          value={input}
          placeholder="Ask me something..."
        />
        <input type="submit" />
      </form>
    </main>
  );
}
