import { useRef, useState } from "react";

export default function UseRef() {
  console.log("Rendering ");
  let ref = useRef(0);
  const [count, setcount] = useState(0);

  function handleClick() {
    ref.current = ref.current + 1;
    setcount((prev) => prev + 1);
    console.log("You clicked " + ref.current + " times!");
  }

  return (
    <button className="btn btn-primary" onClick={handleClick}>
      Click me! {count}
    </button>
  );
}
