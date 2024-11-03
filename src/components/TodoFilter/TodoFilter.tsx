import { ChangeEvent, FC, useEffect, useState } from 'react';
import { ITodoFilter } from '../../types/Todo';

interface IProps {
  setTodosFilter: (filter: ITodoFilter) => void;
}

export const TodoFilter: FC<IProps> = ({ setTodosFilter }) => {
  const [status, setStatus] = useState('');
  const [filter, setFilter] = useState('');

  useEffect(() => {
    setTodosFilter({ status, filter });
  }, [status, filter]);

  const handleChangeFilter = (event: ChangeEvent<HTMLInputElement>) => {
    setFilter(event.target.value.toLowerCase());
  };

  const handleChangeStatus = (event: ChangeEvent<HTMLSelectElement>) => {
    setStatus(event.target.value);
  };

  const handleClearFilter = () => {
    setFilter('');
  };

  return (
    <form className="field has-addons">
      <p className="control">
        <span className="select">
          <select
            data-cy="statusSelect"
            value={status}
            onChange={handleChangeStatus}
          >
            <option value="all">All</option>
            <option value="active">Active</option>
            <option value="completed">Completed</option>
          </select>
        </span>
      </p>
      <p className="control is-expanded has-icons-left has-icons-right">
        <input
          data-cy="searchInput"
          type="text"
          className="input"
          placeholder="Search..."
          value={filter}
          onChange={handleChangeFilter}
        />
        <span className="icon is-left">
          <i className="fas fa-magnifying-glass" />
        </span>
        {filter && (
          <span className="icon is-right" style={{ pointerEvents: 'all' }}>
            {/* eslint-disable-next-line jsx-a11y/control-has-associated-label */}
            <button
              data-cy="clearSearchButton"
              type="button"
              className="delete"
              onClick={handleClearFilter}
            />
          </span>
        )}
      </p>
    </form>
  );
};
