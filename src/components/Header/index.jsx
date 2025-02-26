import { Button, MenuItem, TextField } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import styled from "styled-components";
import ModalContent from "../Modal";
import React from "react";
import { useTaskManager } from "../../contexts/TaskManagerContext";

const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  gap: 20px;
  align-items: center;
  padding: 1rem;
`;

const Title = styled.div`
  font-weight: bold;
  font-size: 2rem;

  @media (min-width: 1024px) {
    font-size: 3rem;
  }
`;

const StyledButton = styled(Button)`
  background-color: #713fff !important;
  color: white !important;
  padding: 0.75rem 1.25rem !important;
  border-radius: 1.25rem !important;
  text-transform: none !important;

  .MuiButton-startIcon {
    margin-right: 0.5rem;
    font-size: 2rem;
  }

  .MuiButton-label {
    font-size: 1.125rem;
    font-weight: 600;
  }
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 1rem;
  max-width: 150px;
  & .MuiOutlinedInput-root {
    border-radius: 4px;
  }
`;

// Header component to render the header layout
const Header = ({ formik }) => {
  const {
    handleOpenModal,
    openModal,
    mode,
    handleMode,
    handleSetPriority,
    priority,
  } = useTaskManager(); // Using context to manage modal and task priority
  return (
    <>
      <HeaderContainer>
        <Title>Task List</Title>
        <StyledButton
          variant="contained"
          startIcon={<AddIcon />}
          onClick={() => handleOpenModal(true)} // Opens modal on click
        >
          Add Task
        </StyledButton>
        {/* Text field for selecting task priority */}
        <StyledTextField
          select
          id="priority"
          name="priority"
          label="Priority"
          variant="outlined"
          onChange={(e) => handleSetPriority(e.target.value)} // Updates priority on change
          value={priority}
          fullWidth
          className="!my-2"
        >
          <MenuItem value="All">All</MenuItem>
          <MenuItem value="High">High</MenuItem>
          <MenuItem value="Medium">Medium</MenuItem>
          <MenuItem value="Low">Low</MenuItem>
        </StyledTextField>
      </HeaderContainer>
      {/* Conditionally render modal if openModal is true */}
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

export default Header;
