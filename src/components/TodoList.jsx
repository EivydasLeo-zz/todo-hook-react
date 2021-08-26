import React from 'react';
import { TodoItem } from './TodoItem';

export const TodoList = ({ allTodos, onDoneUndone }) => {
  return (
    <ul>
      {allTodos.map((t) => (
        <TodoItem item={t} key={t.id} onDoneUndone={onDoneUndone} />
      ))}
    </ul>
  );
};
