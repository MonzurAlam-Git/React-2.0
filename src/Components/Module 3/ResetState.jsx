import { useState } from "react";
import Counter from "./Counter";

export default function ResetState() {
  const [isPlayerA, setIsPlayerA] = useState(true);

  return (
    <div>
      {isPlayerA ? <Counter person="Taylor" /> : <Counter person="Sarah" />}
      <button
        className="btn btn-error"
        onClick={() => {
          setIsPlayerA(!isPlayerA);
        }}
      >
        Next
      </button>
    </div>
  );
}
