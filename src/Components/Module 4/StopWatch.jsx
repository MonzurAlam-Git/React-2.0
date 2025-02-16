import { useRef, useState } from "react";

export default function StopWatch() {
  const [startTime, setStartTime] = useState(null);
  const [now, setNow] = useState(null);
  const intervalRef = useRef(null);

  const handleStart = () => {
    setNow(Date.now());
    setStartTime(Date.now());

    clearInterval(intervalRef.current);

    intervalRef.current = setInterval(() => {
      setNow(Date.now());
    }, 10);
  };

  let secondsPassed = 0;
  if (startTime !== null && now !== null) {
    secondsPassed = (now - startTime) / 1000;
  }

  const handleStop = () => {
    clearInterval(intervalRef.current);
    console.log("intervalRef in handleStop", intervalRef);
  };

  return (
    <div>
      <h1 className="text-4xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center font-bold">
        StopWatch
      </h1>
      <h1> Times Passed : {secondsPassed.toFixed(3)}</h1>
      <button onClick={handleStart} className="btn btn-primary">
        Start
      </button>
      <button onClick={handleStop} className="btn btn-error">
        Stop
      </button>
    </div>
  );
}
