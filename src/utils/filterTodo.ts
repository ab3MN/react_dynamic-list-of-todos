import { TODO_FILTER_STATUS } from '../constants/TodoFilter';
import { ITodoFilter, Todo } from '../types/Todo';

export const getTodoFilterStatus = (status = '') => {
  if (status in TODO_FILTER_STATUS) {
    return TODO_FILTER_STATUS[status as keyof typeof TODO_FILTER_STATUS];
  }
  return undefined;
};

export const getFiltredTodo = (
  todos: Todo[],
  { status, filter }: ITodoFilter,
) => {
  const todoStatus = getTodoFilterStatus(status);

  return todos.filter(todo =>
    todoStatus === undefined
      ? todo.title.toLowerCase().includes(filter)
      : todo.title.toLowerCase().includes(filter) &&
        todo.completed === todoStatus,
  );
};
