// src/components/TaskList.js
import React, { useContext } from 'react';
import TaskItem from './TaskItem';
import { TaskContext } from '../hooks/useTaskManager';
import './TaskList.css';

const TaskList = () => {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      <h2>Task List</h2>
      {tasks.map((task) => (
        <TaskItem key={task.id} task={task} />
      ))}
    </div>
  );
};

export default TaskList;
