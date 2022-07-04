import { useSelector } from "react-redux";
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export function Task() {
  const taskTitle = useSelector((state) => state.newValue);

  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox />
      </ListItemIcon>
      <ListItemText primary={taskTitle} />
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
}
