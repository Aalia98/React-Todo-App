# React Redux Todo App

A todo list app built with React and Redux Toolkit. You can add, edit, complete and delete tasks, and your list is kept in the browser's local storage so it stays after a refresh.

## Features

- Add a new task
- Edit an existing task (the button changes to "Update Todo")
- Click a task to mark it completed or not completed (completed tasks are crossed out)
- Delete a task
- Tasks are saved in `localStorage` and loaded again when the app starts

## Tech

React 18, Redux Toolkit and React Redux for state (a single `todo` slice in `src/redux/features/todo/todoSlice.js`), Tailwind CSS for styling, Vite as the build tool.

## Run locally

Requires Node.js and npm.

```
git clone https://github.com/Aalia98/React-Todo-App.git
cd React-Todo-App
npm install
npm run dev
```

## Known limitations

- Empty tasks are not blocked
- No tests
