/* eslint-disable react/display-name */
import { forwardRef, useImperativeHandle, useRef } from "react";

const ParentComponent = () => {
  const inputRef = useRef(null);

  return (
    <div>
      <CustomInput ref={inputRef} />
      <button
        className="btn btn-primary"
        onClick={() => inputRef.current?.focus()}
      >
        Focus
      </button>
      <button
        className="btn btn-accent ms-1"
        onClick={() => inputRef.current?.clear()}
      >
        Clear
      </button>
    </div>
  );
};

const CustomInput = forwardRef((props, ref) => {
  const inputRef = useRef(null);

  useImperativeHandle(ref, () => ({
    focus: () => inputRef.current?.focus(),
    clear: () => (inputRef.current.value = ""),
  }));

  return <input ref={inputRef} {...props} />;
});

export default ParentComponent;
