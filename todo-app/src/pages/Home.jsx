import React from "react";
import TaskForm from "../components/TaskForm";
import TaskList from "../components/TaskList";

const Home = () => {
  return (
    <div
      style={{
        maxHeight: "calc(100vh - 40px)",
        overflowY: "auto",
        padding: "20px 80px",
        height: "100vh",
        background:
          "linear-gradient(to bottom, rgba(255, 0, 0, 0.3), rgba(255, 165, 0, 0.3), rgba(255, 255, 0, 0.3), rgba(0, 255, 0, 0.3), rgba(0, 0, 255, 0.3), rgba(75, 0, 130, 0.3), rgba(238, 130, 238, 0.3))",
      }}
    >
      <h1 style={{ fontSize: "24px", marginBottom: "20px" }}>مدیریت وظایف</h1>
      <TaskForm />
      <TaskList />
    </div>
  );
};

export default Home;
