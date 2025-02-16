import { useContext, useState } from "react";
import { TaskDispatchContext } from "./Contexts/TasksContexts";

export default function Task({ task }) {
  const [isEditing, setIsEditing] = useState(false);

  const dispatch = useContext(TaskDispatchContext);

  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          className="input-md border-2 border-black"
          onChange={(e) =>
            dispatch({
              type: "edited",
              task: { ...task, text: e.target.value },
            })
          }
        />
        <button
          onClick={() => setIsEditing(false)}
          className="btn btn-info m-1"
        >
          Save
        </button>
      </>
    );
  } else {
    taskContent = (
      <>
        {task.text}
        <button
          onClick={() => setIsEditing(true)}
          className="btn btn-accent m-1"
        >
          Edit
        </button>
      </>
    );
  }

  return (
    <label>
      <input
        type="checkbox"
        className="m-1"
        checked={task.checked}
        onChange={(e) =>
          dispatch({
            type: "edited",
            task: { ...task, done: e.target.checked },
          })
        }
      />
      {taskContent}
      <button
        onClick={() =>
          dispatch({
            type: "deleted",
            id: task.id,
          })
        }
        className="btn btn-error"
      >
        Delete
      </button>
    </label>
  );
}
