import { useState } from "react";
import { useDispatch } from "react-redux";
import { Button, TextField } from "@mui/material";
import { actions } from "../actions";

let i = 2;

export function InputTask() {
  const [value, setValue] = useState("");

  const dispatch = useDispatch();

  const addTask = (e) => {
    e.preventDefault();

    const task = { id: i++, value };

    dispatch(actions.add(task));
    setValue("");
  };

  return (
    <form id="inputForm" onSubmit={addTask}>
      <TextField
        id="input"
        label="Digite aqui"
        variant="outlined"
        color="primary"
        value={value}
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
