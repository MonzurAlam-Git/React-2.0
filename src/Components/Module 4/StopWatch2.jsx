import { useRef, useState } from "react";

export default function StopWatch2() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalID = useRef(null);

  const handleStart = () => {
    setStartTime(Date.now());
    setNow(Date.now());
    clearInterval(intervalID.current);

    intervalID.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  const handleStop = () => {
    clearInterval(intervalID.current);
  };

  let secondsPassed = 0;

  if ((startTime !== null) & (now !== null)) {
    secondsPassed = (now - startTime) / 1000;
  }

  return (
    <div>
      <h1 className="text-4xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center font-bold">
        {secondsPassed}
      </h1>
      <button onClick={handleStart} className="btn btn-primary ">
        Start
      </button>
      <button onClick={handleStop} className="btn btn-error mx-2 ">
        Stop
      </button>
    </div>
  );
}
