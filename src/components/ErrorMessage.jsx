// Store
import { useSelector } from 'react-redux';
// Instruments
import PropTypes from 'prop-types';

export const ErrorMessage = () => {
  const { error } = withPropsValidation(useSelector((state) => ({ error: state.todo.error })));
  return (
    <section
      className="flex text-red-100 bg-red-700 border border-red-700
    rounded-2xl border-zinc-800 border-2 px-5 py-3 w-full mt-10">
      <span className="font-bold">
        ERROR: <span className="font-normal">{error}</span>
      </span>
    </section>
  );
};

const withPropsValidation = (props) => {
  PropTypes.checkPropTypes(propTypes, props, 'prop', '');
  return props;
};

const propTypes = {
  error: PropTypes.string
};
