// Components
import { Check } from './Check';
// Instruments
import PropTypes from 'prop-types';
import cn from 'classnames';

export const TodoItem = ({ id, title, status, handleStatusClick }) => {
  const isCompleted = status === 'completed';

  return (
    <button
      className="flex items-center mb-4 rounded-2xl bg-zinc-800 p-5 w-full"
      onClick={() => handleStatusClick(id)}>
      <Check status={status} />
      <span
        className={cn({
          'line-through': isCompleted
        })}>
        {title}
      </span>
    </button>
  );
};

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  handleStatusClick: PropTypes.func.isRequired
};
