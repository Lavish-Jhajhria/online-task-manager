// src/components/TaskItem.js
import React, { useContext } from 'react';
import { TaskContext } from '../hooks/useTaskManager';
import './TaskItem.css';

const TaskItem = ({ task }) => {
  const { deleteTask, editTask } = useContext(TaskContext);

  return (
    <div className="task-item">
      <h3>{task.title}</h3>
      <p>{task.description}</p>
      <button onClick={() => editTask(task.id)}>Edit</button>
      <button onClick={() => deleteTask(task.id)}>Delete</button>
    </div>
  );
};

export default TaskItem;
