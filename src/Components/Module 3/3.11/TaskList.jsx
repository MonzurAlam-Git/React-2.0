import Task from "./Task";

export default function TaskList({ tasks, onEditTask, onDeleteTask }) {
  return (
    <ul>
      {tasks.map((task) => (
        <li key={task.id}>
          <Task
            task={task}
            onEditTask={onEditTask}
            onDeleteTask={onDeleteTask}
          />
        </li>
      ))}
    </ul>
  );
}
