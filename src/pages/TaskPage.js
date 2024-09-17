// src/pages/TaskPage.js
import React from 'react';
import TaskProvider from '../hooks/useTaskManager';
import TaskForm from '../Components/TaskForm';
import TaskList from '../Components/TaskList';

const TaskPage = () => {
  return (
    <TaskProvider>
      <TaskForm />
      <TaskList />
    </TaskProvider>
  );
};

export default TaskPage;
