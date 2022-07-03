import React from "react";
import { Box, Container } from "@mui/material";
import { InputTask } from "./components/InputTask";
import { TaskList } from "./components/TaskList";

export function App() {
  return (
    <Container
      sx={{
        width: { xs: "280px", sm: "500px", md: "780px" },
        height: "100vh",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        textAlign: "center",
      }}
    >
      <Box
        sx={{
          p: "40px 0",
          bgcolor: "background.paper",
          borderRadius: "20px",
          boxShadow: 3,
        }}
      >
        <InputTask />
        <TaskList />
      </Box>
    </Container>
  );
}
