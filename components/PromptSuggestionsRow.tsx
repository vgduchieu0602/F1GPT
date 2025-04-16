import PromptSuggestionButton from "@/components/PromptSuggestionButton";
import React from "react";

const PromptSuggestionsRow = ({ onPromptClick }) => {
  const prompts = [
    "Hiện nay đang có những chương trình ưu đãi gì?",
    "Hội viên sẽ có những đặc quyền gì?",
    "Niềng răng có tác dụng gì?",
    "Phẫu thuật tim chi phí bao nhiêu?",
  ];
  return (
    <div className="prompt-suggestion-row">
      {prompts.map((prompt, index) => (
        <PromptSuggestionButton
          key={`suggestion-${index}`}
          text={prompt}
          onClick={() => onPromptClick(prompt)}
        />
      ))}
    </div>
  );
};

export default PromptSuggestionsRow;
