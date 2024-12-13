import { useState } from "react";

export default function AvoidContradiction() {
  const [text, setText] = useState("");
  const [status, setStatus] = useState("typing");
  console.log("status b4", status);

  async function handleSubmit(e) {
    e.preventDefault();
    setStatus("sending");
    console.log("status 1", status);
    await sendMessage(text);
    setStatus("sent");
    console.log("status after await", status);
  }

  const isSending = status === "sending";
  const isSent = status === "sent";

  if (isSent) {
    return <h1>Thanks for feedback!</h1>;
  }

  return (
    <form
      className="flex flex-col justify-center items-center"
      onSubmit={handleSubmit}
    >
      <p>How was your stay at The Periphery?</p>
      <textarea
        className="border border-indigo-600"
        disabled={isSending}
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <br />
      <button className="btn btn-primary" disabled={isSending} type="submit">
        Send
      </button>
      {isSending && <p>Sending...</p>}
    </form>
  );
}

// Pretend to send a message.
function sendMessage(text) {
  return new Promise((resolve) => {
    setTimeout(resolve, 2000);
  });
}
