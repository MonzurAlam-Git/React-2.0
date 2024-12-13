// export default function toDoReducer(tasks, action) {
//   if (action.type === "added") {
//     return [
//       ...tasks,
//       {
//         id: action.id,
//         text: action.text,
//         done: false,
//       },
//     ];
//   } else if (action.type === "edited") {
//     return tasks.map((t) => {
//       if (t.id === action.task.id) {
//         return action.task;
//       } else {
//         return t;
//       }
//     });
//   } else if (action.type === "deleted") {
//     return tasks.filter((task) => task.id !== action.id);
//   } else {
//     throw Error("Unknown action: " + action.type);
//   }
// }

// export default function toDoReducer(tasks, action) {
//   switch (action.type) {
//     case "added": {
//       return [
//         ...tasks,
//         {
//           id: action.id,
//           text: action.text,
//           done: false,
//         },
//       ];
//     }
//     case "edited": {
//       return tasks.map((t) => {
//         if (t.id === action.task.id) {
//           return action.task;
//         } else {
//           return t;
//         }
//       });
//     }
//     case "deleted": {
//       return tasks.filter((task) => task.id !== action.id);
//     }
//     default: {
//       throw Error("Unknown action: " + action.type);
//     }
//   }
// }

// using immer reducer
export default function toDoReducer(draft, action) {
  switch (action.type) {
    case "added": {
      draft.push({
        id: action.id,
        text: action.text,
        done: false,
      });
      break;
    }
    case "edited": {
      const index = draft.findIndex((t) => t.id === action.task.id);
      draft[index] = action.task;
      break;
    }
    case "deleted": {
      return draft.filter((task) => task.id !== action.id);
    }
    default: {
      throw Error("Unknown action: " + action.type);
    }
  }
}
