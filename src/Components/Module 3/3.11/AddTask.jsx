import { useContext, useState } from "react";
import { generateNextId } from "../Utils/nextID";
import { TaskContext, TaskDispatchContext } from "./Contexts/TasksContexts";

export default function AddTask() {
  const [text, setText] = useState("");
  const dispatch = useContext(TaskDispatchContext);
  const tasks = useContext(TaskContext);

  return (
    <>
      <input
        className="input-md border-2 border-black"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <button
        onClick={() =>
          dispatch({
            type: "added",
            id: generateNextId(tasks),
            text: text,
          })
        }
        className="btn btn-primary m-2"
      >
        Add your Task
      </button>
    </>
  );
}
