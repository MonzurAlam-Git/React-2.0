import { useState } from "react";

export default function AddTask({ onAddTask }) {
  const [text, setText] = useState("");

  return (
    <>
      <input
        className="input-md border-2 border-black"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button onClick={() => onAddTask(text)} className="btn btn-primary m-2">
        Add your Task
      </button>
    </>
  );
}
