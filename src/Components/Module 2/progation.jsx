export default function Progation() {
  return (
    <div
      onClick={() => alert("Bubble Phase: Div")}
      onClickCapture={() => alert("Capture Phase: Div")}
      className="bg-red-500 h-52 flex justify-center items-center "
    >
      <button
        className="bg-green-500 h-16 mx-auto  "
        onClick={() => alert("Target Phase: Button")}
      >
        Click Me
      </button>
    </div>
  );
}
