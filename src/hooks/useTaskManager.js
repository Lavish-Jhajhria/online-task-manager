// src/hooks/useTaskManager.js
import React, { createContext, useState, useEffect } from 'react';

export const TaskContext = createContext();

const TaskProvider = ({ children }) => {
  const [tasks, setTasks] = useState([]);
  const [currentTask, setCurrentTask] = useState(null);

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    setTasks(savedTasks);
  }, []);

  const addTask = (task) => {
    const newTasks = [...tasks, { ...task, id: Date.now() }];
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const deleteTask = (id) => {
    const newTasks = tasks.filter((task) => task.id !== id);
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
  };

  const editTask = (id) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    setCurrentTask(taskToEdit);
  };

  const updateTask = (updatedTask) => {
    const newTasks = tasks.map((task) => (task.id === updatedTask.id ? updatedTask : task));
    setTasks(newTasks);
    localStorage.setItem('tasks', JSON.stringify(newTasks));
    setCurrentTask(null);
  };

  const clearCurrentTask = () => {
    setCurrentTask(null);
  };

  return (
    <TaskContext.Provider value={{ tasks, addTask, deleteTask, editTask, updateTask, currentTask, clearCurrentTask }}>
      {children}
    </TaskContext.Provider>
  );
};

export default TaskProvider;
