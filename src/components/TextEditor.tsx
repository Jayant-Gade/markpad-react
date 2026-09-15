import React, { useState, ChangeEvent } from "react";

export function TextEditor() {
  const [text, setText] = useState<string>("");

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };

  return (
    <div className="w-screen  bg-neutral-900/60 rounded-sm p-2 m-1 mb-10 flex-1">
      <textarea
        value={text}
        onChange={handleChange}
        placeholder="Start typing..."
        autoFocus
        className="w-full h-full bg-transparent text-gray-100 placeholder-gray-500 resize-none outline-none border-none font-mono text-lg leading-relaxed"
      />
    </div>
  );
}

export default TextEditor;
