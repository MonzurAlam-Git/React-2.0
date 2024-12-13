import { useState } from "react";

export default function InputMaker() {
  const [inputs, setInputs] = useState([
    {
      id: 1,
      label: "input",
    },
    {
      id: 3,
      label: "output",
    },
  ]);

  function handleAddInput() {
    const nextId = inputs[inputs.length - 1].id + 1;

    setInputs([
      ...inputs,
      {
        id: nextId,
        label: crypto.randomUUID(),
      },
    ]);
    console.log(inputs);
  }

  return (
    <div>
      {inputs.map((input) => (
        <div
          key={input.id}
          style={{
            marginBottom: "5px",
          }}
        >
          <input
            placeholder={input.label}
            className="border border-teal-500"
            type="text"
            label={input.label}
          />
        </div>
      ))}

      <div style={{ marginTop: "20px" }}>
        <button onClick={handleAddInput}>Add Input</button>
      </div>
    </div>
  );
}
