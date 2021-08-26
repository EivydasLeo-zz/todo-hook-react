import React, { useState, useEffect } from 'react';

import './App.css';
import { TodoList } from './components/TodoList';
import todosDummyData from './db/todos';

function App() {
  // console.log(todosDummyData());
  const [todos, setTodos] = useState([]);
  console.log(useState([]));

  const setDoneUndone = (id) => {
    console.log('setDoneUndone', id);
  };

  useEffect(() => {
    setTodos(todosDummyData());
  }, []);

  return (
    <div className="App">
      <h2>Todo List</h2>
      <TodoList allTodos={todos} onDoneUndone={setDoneUndone} />
    </div>
  );
}

export default App;
