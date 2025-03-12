import React, { useState } from 'react';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]); 
  const [task, setTask] = useState(''); 
  const addTask = () => {
    if (task.trim() !== '') {
      setTasks([...tasks, task]);
      setTask(''); 
    }
  };
  const removeTask = (index) => {
    setTasks(tasks.filter((_, i) => i !== index));
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '20px' }}>
      <h2>To-Do List</h2>
      <input
        type="text"
        value={task}
        onChange={(e) => setTask(e.target.value)}
        placeholder="Enter a task..."
      />
      <button onClick={addTask}>Add Task</button>
      {tasks.length === 0 ? (
        <p>No tasks available. Add a new task!</p>
      ) : (
        <ul>
          {tasks.map((t, index) => (
            <li key={index}>
              {t} <button onClick={() => removeTask(index)}>remove</button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default ToDoList;
