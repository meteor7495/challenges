import { Stack, Typography } from "@mui/material";

export default function Title() {
  return (
    <Stack
      style={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#c9d9f2",
        width: "100%",
        marginBottom: "10px",
      }}
    >
      <Typography
        style={{ fontSize: "18px", fontWeight: "bold", padding: "10px 0px" }}
      >
        Task Manager
      </Typography>
      <Typography style={{ fontSize: "14px", padding: "5px 0px" }}>
        Easily add, manage, and track your tasks in one place...
      </Typography>
    </Stack>
  );
}
