import { useFormik } from "formik";
import * as Yup from "yup";
import React, { useEffect } from "react";
import { useTaskManager } from "../../contexts/TaskManagerContext";
import Header from "../Header";
import TaskLists from "../Task-Lists";

const TaskManager = () => {
  // Destructuring values and functions from the TaskManagerContext
  const {
    mode,
    openModal,
    allTask,
    selectedItems,
    priority,
    handleMode,
    handleOpenModal,
    handleSelectedItems,
    handleAllTasks,
    handleSetPriority,
  } = useTaskManager();

  // Setting initial values for the form based on the mode (Save or Update)
  const initialFormikValues = {
    id: mode === "Update" ? selectedItems?.id : 0,
    title: mode === "Update" ? selectedItems?.title : "",
    description: mode === "Update" ? selectedItems?.description : "",
    priority: mode === "Update" ? selectedItems?.priority : "",
    createdAt: mode === "Update" ? selectedItems?.createdAt : "",
    updatedAt: mode === "Update" ? selectedItems?.updatedAt : "",
  };

  // Validation schema for form fields using Yup
  const validationSchema = Yup.object({
    id: Yup.number().required("ID is required"),
    title: Yup.string()
      .matches(
        /^[\u0600-\u06FF\s]+$/,
        "The title must only contain Persian characters"
      )
      .min(2, "The title is too short")
      .max(250, "The title is too long")
      .required("The title is required"),
    description: Yup.string()
      .matches(
        /^[\u0600-\u06FF\s]+$/,
        "The description must only contain Persian characters"
      )
      .min(5, "The description is too short")
      .max(1000, "The description is too long")
      .required("The description is required"),
    priority: Yup.string().required("Priority is required"),
  });

  // Handle form submission: Save or Update tasks
  const handleSubmit = (values) => {
    if (mode === "Save") {
      handleAllTasks([...allTask, values]); // Add new task
    } else if (mode === "Update") {
      allTask.map((data) => {
        if (data.id === selectedItems?.id) {
          // Update task properties
          data.title = values.title;
          data.description = values.description;
          data.priority = values.priority;
          data.updatedAt = values.updatedAt;
        }
      });
    }

    // Close modal, reset form, and set mode to 'Save'
    handleOpenModal(false);
    formik.resetForm();
    handleMode("Save");
  };
  
  // Initialize formik with validation schema and submission handler
  const formik = useFormik({
    enableReinitialize: true,
    initialValues: initialFormikValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  return (
    <div>
      <Header formik={formik} />
      <TaskLists
        priority={priority}
        handleAllTasks={handleAllTasks}
        handleSelectedItems={handleSelectedItems}
        allTask={allTask}
        handleMode={handleMode}
        handleOpenModal={handleOpenModal}
        openModal={openModal}
        mode={mode}
        formik={formik}
      />
    </div>
  );
};

export default TaskManager;
