import { useState } from "react";
import "./Form.css";

export default function Form() {
  const [answer, setAnswer] = useState("");
  const [error, setError] = useState(null);
  const [status, setStatus] = useState("typing");

  console.log(error);

  function handleTextArea(e) {
    // setError(null);
    setAnswer(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("submitting");
    console.log("status b4 try catch", status);

    try {
      await submitForm(answer);
      setStatus("success");
      console.log("status after try ", status);
    } catch (err) {
      console.log("status after  catch", status);
      setStatus("typing");
      setError(err);
    }
  };

  function submitForm(answer) {
    // Pretend it's hitting the network.
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        if (answer.toLowerCase() === "dhaka") {
          resolve();
        } else {
          reject(new Error("Good guess but a wrong answer. Try again!"));
        }
      }, 1500);
    });
  }

  if (status === "success")
    return <h1 className="text-green-500">Thats right!</h1>;

  return (
    <div>
      <form onSubmit={handleSubmit}>
        <textarea
          disabled={status === "submitting"}
          value={answer}
          onChange={handleTextArea}
          className="border border-red-600 m-5"
        ></textarea>
        <br />
        <button
          className="btn btn-accent"
          disabled={status === "submitting" || answer.length === 0}
        >
          Submit
        </button>
        {status === "submitting" && (
          <p className="text-green-600">Loading...</p>
        )}
        {error && <p className="Error text-center">{error.message}</p>}
      </form>
    </div>
  );
}
