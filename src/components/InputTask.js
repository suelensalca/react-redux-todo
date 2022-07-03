import { Button, TextField } from "@mui/material";

export function InputTask() {
  return (
    <form>
      <TextField
        id="input"
        label="type here"
        variant="outlined"
        color="primary"
        sx={{ width: "70%", m: "6px 0" }}
      />
      <Button
        variant="contained"
        sx={{ width: { xs: "170px", sm: "20%" }, p: "15px 12px", m: "6px" }}
      >
        Add
      </Button>
    </form>
  );
}
