import { ITodoFilter, Todo } from '../types/Todo';
import { Filter_Statuses } from './enums/FiltersStatus';

export const getFiltredTodo = (
  todos: Todo[],
  { status, filter }: ITodoFilter,
) => {
  let filteredTodos = todos.filter(({ title }) =>
    title.toLowerCase().trim().includes(filter),
  );

  filteredTodos = filteredTodos.filter(({ completed }) => {
    switch (status) {
      case Filter_Statuses.Active:
        return !completed;
      case Filter_Statuses.Completed:
        return completed;
      default:
        return true;
    }
  });

  return filteredTodos;
};
