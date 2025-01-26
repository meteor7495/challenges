import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import PropTypes from "prop-types";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import { IconButton } from "@mui/material";
import { Edit } from "@mui/icons-material";
import { todoSchema } from "../validation/zodval";

export default function EditDialog({ task, onSave }) {
  const [open, setOpen] = useState(false);

  const {
    register,
    handleSubmit,
    setValue,
    reset,
    formState: { errors },
  } = useForm({
    resolver: zodResolver(todoSchema),
    defaultValues: { task },
  });

  const handleClickOpen = () => {
    setValue("task", task); // Set the current task value when dialog opens
    setOpen(true);
  };

  const handleClose = () => {
    reset(); // Reset form state
    setOpen(false);
  };

  const onSubmit = (data) => {
    onSave(data.task); // Pass updated task to the parent
    handleClose(); // Close the dialog
  };

  return (
    <React.Fragment>
      <IconButton variant="outlined" onClick={handleClickOpen}>
        <Edit />
      </IconButton>
      <Dialog
        open={open}
        onClose={handleClose}
        PaperProps={{
          component: "form",
          onSubmit: handleSubmit(onSubmit),
        }}
      >
        <DialogTitle>Edit Task</DialogTitle>
        <DialogContent>
          <TextField
            {...register("task")}
            autoFocus
            required
            margin="dense"
            id="task"
            name="task"
            label="Task"
            type="text"
            fullWidth
            variant="standard"
            error={Boolean(errors.task)}
            helperText={errors.task?.message}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={handleClose}>Cancel</Button>
          <Button type="submit">Save</Button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}

EditDialog.propTypes = {
  task: PropTypes.string.isRequired,
  onSave: PropTypes.func.isRequired,
};
