// Components
import { Check } from './Check';
// Instruments
import PropTypes from 'prop-types';
// Styles
import cn from 'classnames';
// Icons
import { BsTrash } from 'react-icons/bs';

export const TodoItem = ({ id, title, status, handleStatusClick, handleRemoveTodoClick }) => {
  const isCompleted = status === 'completed';

  return (
    <section
      className="flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full"
      onClick={() => handleStatusClick(id)}>
      <button className="flex items-center">
        <Check status={status} />
        <span
          className={cn({
            'line-through': isCompleted
          })}>
          {title}
        </span>
      </button>
      <button onClick={() => handleRemoveTodoClick(id)}>
        <BsTrash
          size={22}
          className="text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300"
        />
      </button>
    </section>
  );
};

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  handleStatusClick: PropTypes.func.isRequired,
  handleRemoveTodoClick: PropTypes.func.isRequired
};
