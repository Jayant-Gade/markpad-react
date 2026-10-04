import React, { useState, type ChangeEvent } from "react";
import CButton from "../../components/CButton";

export function TextEditor() {
  const [text, setText] = useState<string>(() => {
    return localStorage.getItem("default.txt") || "";
  });

  const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    setText(e.target.value);
  };
  const handleSave = () => {
    localStorage.setItem("default.txt", text);
  };
  return (
    <>
      <div className="flex flex-row center-items">
        <h1 className="w-full text-2xl font-bold text-center">Text Editor</h1>
        <CButton name="Save" onclick={handleSave}></CButton>
      </div>
      <div className="w-screen  bg-neutral-900/60 rounded-sm p-2 m-1 mb-10 flex-1">
        <textarea
          value={text}
          onChange={handleChange}
          placeholder="Start typing..."
          autoFocus
          className="w-full h-full bg-transparent text-gray-100 placeholder-gray-500 resize-none outline-none border-none font-mono text-lg leading-relaxed"
        />{" "}
      </div>
    </>
  );
}

export default TextEditor;
