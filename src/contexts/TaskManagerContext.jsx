import React, { createContext, useState, useContext, useEffect } from 'react';

// Create the TaskManagerContext
const TaskManagerContext = createContext();

// Hook to use the context in other components
export const useTaskManager = () => {
  const context = useContext(TaskManagerContext);
  if (!context) {
    throw new Error("useTaskManager must be used within a TaskManagerProvider");
  }
  return context;
};

// TaskManagerProvider component to manage the state and provide context
export const TaskManagerProvider = ({ children }) => {
  const [mode, setMode] = useState("Save");
  const [openModal, setOpenModal] = useState(false);
  const [allTask, setAllTask] = useState([]);
  const [selectedItems, setSelectedItems] = useState(null);
  const [priority, setPriority] = useState("All");
  const [doneTasks, setDoneTasks] = useState({});

  // Load tasks and doneTasks from localStorage when the component mounts
  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) {
      setAllTask(savedTasks);
    }
    const savedDoneTasks = JSON.parse(localStorage.getItem('doneTasks'));
    if (savedDoneTasks) {
      setDoneTasks(savedDoneTasks);
    }
  }, []);

  // Handle task list updates and store them in localStorage
  const handleAllTasks = (tasks) => {
    setAllTask(tasks);
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };

  // Handle done task status updates and store them in localStorage
  const handleToggleDone = (id) => {
    const updatedDoneTasks = { ...doneTasks, [id]: !doneTasks[id] };
    setDoneTasks(updatedDoneTasks);
    localStorage.setItem('doneTasks', JSON.stringify(updatedDoneTasks)); // Save doneTasks to localStorage
  };

  const handleMode = (mode) => setMode(mode);
  const handleOpenModal = (isOpen) => setOpenModal(isOpen);
  const handleSelectedItems = (item) => setSelectedItems(item);
  const handleSetPriority = (priority) => setPriority(priority);

  const handleDeleteItems = (id) => {
    // Delete the task and its done status
    const updatedTasks = allTask.filter((task) => task.id !== id);
    const updatedDoneTasks = { ...doneTasks };
    delete updatedDoneTasks[id];
  
    // Update state
    setAllTask(updatedTasks);
    setDoneTasks(updatedDoneTasks);
  
    // Update localStorage after state update
    localStorage.setItem('tasks', JSON.stringify(updatedTasks));
    localStorage.setItem('doneTasks', JSON.stringify(updatedDoneTasks));
  };
  

  const handleEdit = (item) => {
    if (item.id) {
      handleMode("Update");
      handleSelectedItems(item);
      handleOpenModal(true);
    }
  };

  const contextValue = {
    mode,
    openModal,
    allTask,
    selectedItems,
    doneTasks,
    priority,
    handleMode,
    handleOpenModal,
    handleSelectedItems,
    handleAllTasks,
    handleSetPriority,
    handleDeleteItems,
    handleToggleDone,
    handleEdit,
  };

  return (
    <TaskManagerContext.Provider value={contextValue}>
      {children}
    </TaskManagerContext.Provider>
  );
};