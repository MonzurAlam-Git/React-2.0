import { useState } from "react";

export default function Task({ task, onEditTask, onDeleteTask }) {
  const [isEditing, setIsEditing] = useState(false);
  let taskContent;

  if (isEditing) {
    taskContent = (
      <>
        <input
          className="input-md border-2 border-black"
          onChange={(e) => onEditTask({ ...task, text: e.target.value })}
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
        onChange={(e) => onEditTask({ ...task, done: true })}
      />
      {taskContent}
      <button onClick={() => onDeleteTask(task.id)} className="btn btn-error">
        Delete
      </button>
    </label>
  );
}
