import ModalContent from "../Modal";
import Task from "./Task";
import React, { useEffect } from "react";
import { useTaskManager } from "../../contexts/TaskManagerContext";

const TaskLists = ({ formik }) => {
    // Destructuring values and functions from the TaskManagerContext
  const {
    mode,
    openModal,
    allTask,
    priority,
    handleMode,
    handleOpenModal,
    handleSelectedItems,
    handleDeleteItems,
    handleAllTasks,
  } = useTaskManager();

    // Handle the editing of a task: switch to update mode, set selected task, and open modal
  const handleEdit = (item) => {
    handleMode("Update");
    handleSelectedItems(item);
    handleOpenModal(true);
  };

    // Filter tasks based on priority, if "All" is selected, show all tasks
  const filteredTasks =
    priority === "All"
      ? allTask
      : allTask.filter((item) => item.priority === priority);

  return (
    <>
      {filteredTasks.map((item) => (
        <Task
          key={item.id}
          item={item}
          handleDeleteItems={handleDeleteItems}
          handleEdit={handleEdit}
        />
      ))}
      {openModal && (
        <ModalContent
          handleMode={handleMode}
          handleOpenModal={handleOpenModal}
          openModal={openModal}
          mode={mode}
          formik={formik}
        />
      )}
    </>
  );
};

export default TaskLists;
