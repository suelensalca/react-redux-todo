import React from "react";
import { useDispatch } from "react-redux";
import { actions } from "../actions";
import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export function Task({ task }) {
  const dispatch = useDispatch();

  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox />
      </ListItemIcon>
      <ListItemText primary={task.value} />
      <IconButton onClick={() => dispatch(actions.delete(task))}>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
}
