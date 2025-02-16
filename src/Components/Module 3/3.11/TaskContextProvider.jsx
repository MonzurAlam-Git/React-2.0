import { useImmerReducer } from "use-immer";
import { TaskContext, TaskDispatchContext } from "./Contexts/TasksContexts";
import { initialTasks } from "./Data/InitialTaskList";
import toDoReducer from "./Reducers/toDoReducer";

export default function TaskContextProvider({ children }) {
  //   const tasks = useContext(TaskContext);
  //   const dispatch = useContext(TaskDispatchContext);

  const [tasks, dispatch] = useImmerReducer(toDoReducer, initialTasks);
  return (
    <TaskContext.Provider value={tasks}>
      <TaskDispatchContext.Provider value={dispatch}>
        {children}
      </TaskDispatchContext.Provider>
    </TaskContext.Provider>
  );
}
