import React from "react";
import { useDispatch } from "react-redux";
import { dltTodo } from "../redux/slices/todoSlice"

const TaskList = ({ tasks }) => {

    const dispatch = useDispatch();

    const deleteTask = (id) => {
        dispatch(dltTodo(id))
    }

  return (
    <div className="border border-white rounded-lg w-2/3 p-4 mt-10">
      <ul className="divide-y divide-gray-300 px-4 py-2">
        {tasks.map((task, index) => (
          <li
            key={index}
            className="flex items-center justify-between py-2 text-white"
          >
            <span className="flex-1">{task.task}</span>
            <svg
              onClick={() => deleteTask(task.id)}
              className="w-6 h-6 text-white mr-4"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18 17.94 6M18 18 6.06 6"
              />
            </svg>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
