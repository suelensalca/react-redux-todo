import { List } from "@mui/material";
import { Task } from "./Task";
import { useSelector } from "react-redux";

export function TaskList() {
  const tasks = useSelector((state) => state.taskReducer.task);

  return (
    <List>
      {tasks.map((task) => (
        <Task key={task.id} task={task} />
      ))}
    </List>
  );
}
