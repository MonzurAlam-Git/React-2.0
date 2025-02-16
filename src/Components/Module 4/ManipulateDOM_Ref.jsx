import { useRef } from "react";
import MyInput from "./MyInput";

export default function ManipulateDOM_Ref() {
  const inputRef = useRef(null);

  function handleClick() {
    inputRef.current.focus();
  }
  return (
    <div>
      <>
        <h1 className="text-4xl bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent text-center font-bold">
          ManipulateDOM_Ref
        </h1>
        <MyInput ref={inputRef} />
        <button className="btn btn-primary" onClick={handleClick}>
          Focus the input
        </button>
      </>
    </div>
  );
}

{
  /* By attching ref , i sent the whole dom node element to useRef current value. Now i can directly manipulate by the reference just like it used InoutRef  */
}
