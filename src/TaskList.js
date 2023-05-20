import React, { useState } from 'react';

function TaskList() {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([]);

  const handleInputChange = (e) => {
    setTaskInput(e.target.value);
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, { text: taskInput, completed: false }]);
      setTaskInput('');
    }
  };

  const handleToggleComplete = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  return (
    <div>
      <h1>Daily Task List Tracker</h1>
      <input type="text" value={taskInput} onChange={handleInputChange} placeholder="Enter task" />
      <button onClick={handleAddTask}>Submit</button>
      <div>
        {tasks.map((task, index) => (
          <div key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(index)}
            />
            <span style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
              {task.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}

export default TaskList;
