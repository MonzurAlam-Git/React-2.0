import { forwardRef, useImperativeHandle, useRef } from "react";

const MyInput = (props, ref) => {
  const realInputRef = useRef(null);

  //useImperativeHandle restrict the access of reference , and only give access to defined methods like focus
  useImperativeHandle(ref, () => ({
    focus() {
      realInputRef.current.focus();
    },
  }));

  return <input ref={realInputRef} />;
};

const forwardedRef = forwardRef(MyInput);
export default forwardedRef;
