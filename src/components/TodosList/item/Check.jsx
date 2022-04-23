import { BsCheck } from 'react-icons/bs';
import PropTypes from 'prop-types';

export const Check = ({ status }) => {
  const isCompleted = status === 'completed';
  console.log(isCompleted);
  return (
    <section
      className={`border-2 rounded-lg border-pink-400 w-5 h-5 mr-3 flex items-center justify-center
    ${isCompleted ? 'bg-pink-400' : ''}
    `}>
      {isCompleted && <BsCheck size={24} className="text-gray-900" />}
    </section>
  );
};

Check.propTypes = {
  status: PropTypes.string
};
