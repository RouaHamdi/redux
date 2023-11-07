import React from 'react';
import { AddTask, ListTask } from './components';

const App = () => {
  return (
    <div>
      <h1>To Do List</h1>
      <AddTask />
      <ListTask />
    </div>
  );
};

export default App;