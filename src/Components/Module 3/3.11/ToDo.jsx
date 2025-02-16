import { useImmerReducer } from "use-immer";

import AddTask from "./AddTask.jsx";

import toDoReducer, { initialTasks } from "./Reducers/toDoReducer.js";
import TaskContextProvider from "./TaskContextProvider.jsx";
import TaskList from "./TaskList.jsx";

export default function ToDo() {
  // const [tasks, dispatch] = useReducer(toDoReducer, initialTasks);
  const [tasks, dispatch] = useImmerReducer(toDoReducer, initialTasks);

  return (
    <TaskContextProvider>
      <div className="flex flex-col items-center">
        <h1 className="text-center text-2xl font-bold">To Do</h1>
        <AddTask />
        <TaskList />
      </div>
    </TaskContextProvider>
  );
}
