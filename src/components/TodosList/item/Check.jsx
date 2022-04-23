import { BsCheck } from 'react-icons/bs';
import PropTypes from 'prop-types';
import cn from 'classnames';

export const Check = ({ status }) => {
  const isCompleted = status === 'completed';
  return (
    <section
      className={cn(
        'border-2 rounded-lg border-pink-400 w-6 h-6 mr-3 flex items-center justify-center',
        { 'bg-pink-400': isCompleted }
      )}>
      {isCompleted && <BsCheck size={24} className="text-gray-900" />}
    </section>
  );
};

Check.propTypes = {
  status: PropTypes.string
};
