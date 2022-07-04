import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, TextField } from "@mui/material";
import { addTask } from "../actions";

export function InputTask() {
  const dispatch = useDispatch();

  let [value, setValue] = useState("");

  return (
    <form id="inputForm" onSubmit={() => dispatch(addTask(value))}>
      <TextField
        id="input"
        label="type here"
        variant="outlined"
        color="primary"
        sx={{ width: "70%", m: "6px 0" }}
        onChange={(e) => setValue(e.target.value)}
      />
      <Button
        form="inputForm"
        type="submit"
        variant="contained"
        sx={{ width: { xs: "170px", sm: "20%" }, p: "15px 12px", m: "6px" }}
      >
        Add
      </Button>
    </form>
  );
}
