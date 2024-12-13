import { useState } from "react";

export default function MirrorProps({ messageColor }) {
  const [color, setColor] = useState(messageColor);

  const handleChangeColor = () => {
    setColor("green");
  };

  return (
    <div className="flex flex-col items-center">
      <div className="font-bold text-xl" style={{ color }}>
        Hello world with color : {color}
      </div>

      <br />
      <button className=" btn btn-accent" onClick={handleChangeColor}>
        Change color from child
      </button>
    </div>
  );
}
