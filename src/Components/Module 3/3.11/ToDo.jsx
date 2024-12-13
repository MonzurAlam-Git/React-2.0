import { useImmerReducer } from "use-immer";
import toDoReducer from "../../../Reducers/toDoReducer.js";
import AddTask from "./AddTask.jsx";
import { initialTasks } from "./Data/InitialTaskList.js";
import TaskList from "./TaskList.jsx";

export default function ToDo() {
  // const [tasks, dispatch] = useReducer(toDoReducer, initialTasks);
  const [tasks, dispatch] = useImmerReducer(toDoReducer, initialTasks);

  const generateNextId = (data) => {
    const nextId = data.reduce((prev, next) =>
      prev && prev.id > next.id ? prev.id : next.id
    );
    return nextId + 1;
  };

  //   handler
  const handleAddTask = (text) => {
    dispatch({
      type: "added",
      id: generateNextId(tasks),
      text: text,
    });
  };

  const handleEditTask = (task) => {
    dispatch({
      type: "edited",
      task,
    });
  };

  const handleDeleteTask = (deleteId) => {
    dispatch({
      type: "deleted",
      id: deleteId,
    });
  };

  return (
    <div className="flex flex-col items-center">
      <h1 className="text-center text-2xl font-bold">To Do</h1>
      <AddTask onAddTask={handleAddTask} />
      <TaskList
        tasks={tasks}
        onEditTask={handleEditTask}
        onDeleteTask={handleDeleteTask}
      />
    </div>
  );
}
