import {
  Checkbox,
  IconButton,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import DeleteIcon from "@mui/icons-material/Delete";

export function Task() {
  return (
    <ListItem>
      <ListItemIcon>
        <Checkbox />
      </ListItemIcon>
      <ListItemText primary="texto" />
      <IconButton>
        <DeleteIcon />
      </IconButton>
    </ListItem>
  );
}
