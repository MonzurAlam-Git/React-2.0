import { useState } from "react";
import "../Module 3/StatePreservation.css";
import Counter from "./Counter";
export default function StatePreservation() {
  const [isPaused, setIsPaused] = useState(false);
  return (
    <div>
      {isPaused ? <p>See you later!</p> : <Counter />}
      <label>
        <input
          type="checkbox"
          checked={isPaused}
          onChange={(e) => {
            setIsPaused(e.target.checked);
          }}
        />
        Take a break
      </label>
    </div>
  );
}
