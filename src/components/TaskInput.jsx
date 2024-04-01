import React, { useState } from 'react';

const TaskInput = ({ addTask }) => {
  const [task, setTask] = useState('');

  const handleInputChange = (e) => {
    setTask(e.target.value);
  };

  const handleAddTask = () => {
    if (task.trim() !== '') {
      addTask({id: Date.now(), task});
      setTask('');
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      handleAddTask();
    }
  };

  return (
    <div className="flex items-center space-x-4 mb-4">
      <input
        type="text"
        placeholder="Enter your task"
        value={task}
        onChange={handleInputChange}
        onKeyPress={handleKeyPress}
        className="w-2/3 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:border-blue-500 bg-transparent text-white"
      />
      <button
        onClick={handleAddTask}
        className="px-4 py-2 font-bold text-gray-900 bg-blue-200 rounded-md hover:bg-blue-400 focus:outline-none"
      >
        Add
      </button>
    </div>
  );
};

export default TaskInput;
