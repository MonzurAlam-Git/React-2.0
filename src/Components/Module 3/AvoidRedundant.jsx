import { useState } from "react";

export default function AvoidRedundant() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");

  function handleFirstNameChange(e) {
    setFirstName(e.target.value);
  }

  function handleLastNameChange(e) {
    setLastName(e.target.value);
  }

  const fullName = firstName + " " + lastName;

  return (
    <div className="flex flex-col items-center">
      <h2 className="font-bold">Let’s check you in</h2>
      <label>
        First name:{" "}
        <input
          className="border border-red-500 mb-2"
          value={firstName}
          onChange={handleFirstNameChange}
        />
      </label>

      <label>
        Last name:{" "}
        <input
          className="border border-green-500"
          value={lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <p>
        Your ticket will be issued to: <b>{fullName}</b>
      </p>
    </div>
  );
}
