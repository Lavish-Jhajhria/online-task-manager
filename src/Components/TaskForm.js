// src/components/TaskForm.js
import React, { useState, useContext, useRef, useEffect } from 'react';
import { TaskContext } from '../hooks/useTaskManager';
import './TaskForm.css';

const TaskForm = () => {
  const { addTask, currentTask, updateTask, clearCurrentTask } = useContext(TaskContext);
  const [task, setTask] = useState({ title: '', description: '' });
  const inputRef = useRef();

  useEffect(() => {
    if (currentTask) {
      setTask(currentTask);
      inputRef.current.focus();
    }
  }, [currentTask]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (currentTask) {
      updateTask(task);
    } else {
      addTask(task);
    }
    setTask({ title: '', description: '' });
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        ref={inputRef}
        type="text"
        placeholder="Task Title"
        value={task.title}
        onChange={(e) => setTask({ ...task, title: e.target.value })}
      />
      <textarea
        placeholder="Task Description"
        value={task.description}
        onChange={(e) => setTask({ ...task, description: e.target.value })}
      />
      <button type="submit">{currentTask ? 'Update Task' : 'Add Task'}</button>
      {currentTask && <button onClick={clearCurrentTask}>Cancel Edit</button>}
    </form>
  );
};

export default TaskForm;
