import React, { memo } from 'react';
import { useTaskManager } from "../../contexts/TaskManagerContext";
import { Modal, Box, TextField, Button, Stack, IconButton, MenuItem } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import styled from 'styled-components';

const ModalBox = styled(Box)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 400px;
  background-color: #ffffff;
  border: 2px solid #713FFF;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
  padding: 2rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: 8px;
  margin-top: 1rem;
  height: auto;
`;

const StyledTextField = styled(TextField)`
  .MuiOutlinedInput-root {
    margin: 0.8rem 0rem;
    border-radius: 5px;
  }
`;

const StyledSubmitButton = styled(Button)`
  background-color: #713FFF;
  color: white;
  text-transform: none;
  margin-top: 1rem;
  &:hover {
    background-color: #5a2dff;
  }
`;

const ModalContent = memo(({ formik, mode, handleMode }) => {
  const { openModal, handleOpenModal, allTask, handleAllTasks } = useTaskManager();

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    const errors = await formik.validateForm();
    if (Object.keys(errors).length > 0) {
      formik.setTouched({ title: true, description: true, priority: true });
      return;
    }

    if (mode === "Save") {
      // Create new task
      const newTask = { ...formik.values, id: new Date().getTime() };
      const updatedTasks = [...allTask, newTask];
      handleAllTasks(updatedTasks);  // Save updated tasks in localStorage
    } else if (mode === "Update") {
      // Update existing task
      const updatedTasks = allTask.map((task) =>
        task.id === formik.values.id ? formik.values : task
      );
      handleAllTasks(updatedTasks);  // Save updated tasks in localStorage
    }

    // Close modal and reset form
    handleOpenModal(false);
    formik.resetForm();
    handleMode("Save");
  };

  return (
    <Modal
      open={openModal}
      onClose={() => { handleOpenModal(false); formik.resetForm(); handleMode('Save'); }}
      aria-labelledby="modal-title"
    >
      <ModalBox>
        <Stack direction="row" justifyContent="space-between" alignItems="center">
          <h2 id="modal-title">{mode === 'Save' ? 'Add New Task' : 'Edit Current Task'}</h2>
          <IconButton onClick={() => { handleOpenModal(false); formik.resetForm(); handleMode('Save'); }}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <form onSubmit={handleSubmit}>
          <StyledTextField
            id="title"
            name="title"
            label="Title"
            variant="outlined"
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.title}
            error={formik.touched.title && Boolean(formik.errors.title)}
            helperText={formik.touched.title && formik.errors.title}
          />
          <StyledTextField
            id="description"
            name="description"
            label="Description"
            variant="outlined"
            fullWidth
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.description}
            error={formik.touched.description && Boolean(formik.errors.description)}
            helperText={formik.touched.description && formik.errors.description}
            multiline
            rows={4}
          />
          <StyledTextField
            select
            id="priority"
            name="priority"
            label="Priority"
            variant="outlined"
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
            value={formik.values.priority}
            error={formik.touched.priority && Boolean(formik.errors.priority)}
            helperText={formik.touched.priority && formik.errors.priority}
            fullWidth
          >
            <MenuItem value="High">High</MenuItem>
            <MenuItem value="Medium">Medium</MenuItem>
            <MenuItem value="Low">Low</MenuItem>
          </StyledTextField>
          <StyledSubmitButton variant="contained" type="submit">
            Submit
          </StyledSubmitButton>
        </form>
      </ModalBox>
    </Modal>
  );
});

export default ModalContent;
