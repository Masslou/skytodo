// Core
import { useState } from 'react';
// Components
import { Check } from './Check';
// Instruments
import PropTypes from 'prop-types';
// Styles
import cn from 'classnames';
// Icons
import { BsTrash } from 'react-icons/bs';
import { VscEdit } from 'react-icons/vsc';
import { ChangeTodoField } from '../../changeTodoField/ChangeTodoField';

export const TodoItem = ({
  id,
  title,
  status,
  toggleTodoHandler,
  removeTodoHandler
  // changeTodoHandler
}) => {
  const isCompleted = status === 'completed';
  const [isEditing, setEditing] = useState(false);
  return !isEditing ? (
    <section
      className="flex items-center justify-between mb-4 rounded-2xl bg-zinc-800 p-5 w-full"
      onClick={() => toggleTodoHandler(id)}>
      <button className="flex items-center">
        <Check status={status} />
        <span
          className={cn({
            'line-through': isCompleted
          })}>
          {title}
        </span>
      </button>
      <section>
        <button onClick={() => setEditing(true)}>
          <VscEdit
            size={22}
            className="text-gray-600 hover:text-pink-400 transition-colors ease-in-out duration-300 mr-6"
          />
        </button>
        <button onClick={(e) => removeTodoHandler(e, id)}>
          <BsTrash
            size={22}
            className="text-gray-600 hover:text-red-700 transition-colors ease-in-out duration-300"
          />
        </button>
      </section>
    </section>
  ) : (
    <ChangeTodoField setEditing={setEditing} id={id} status={status} title={title} />
  );
};

TodoItem.propTypes = {
  id: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  toggleTodoHandler: PropTypes.func.isRequired,
  removeTodoHandler: PropTypes.func.isRequired,
  changeTodoHandler: PropTypes.func.isRequired
};
