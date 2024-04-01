import React from 'react';
import TaskInput from './components/TaskInput';
import TaskList from './components/TaskList';
import { addTodo } from "./redux/slices/todoSlice"
import { useDispatch, useSelector } from "react-redux";

const App = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state) => state.todo.todos);

  const addTask = (task) => {
    dispatch(addTodo(task));
  };

  return (
    <div className='flex justify-center items-center flex-col mt-20'>
      <h1 className='text-5xl font-bold bg-gradient-to-r from-orange-700 to-yellow-500 text-transparent bg-clip-text my-10'>React To-Do App</h1>
      <TaskInput addTask={addTask} />
      {tasks.length>0 && <TaskList tasks={tasks} />}
    </div>
  );
};

export default App;

