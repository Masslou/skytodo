// Store
import { useSelector } from 'react-redux';
// Instruments
import PropTypes from 'prop-types';

export const ErrorMessage = () => {
  const { error } = withPropsValidation(useSelector((state) => ({ error: state.todo.error })));
  return <section>Error: {error}</section>;
};

const withPropsValidation = (props) => {
  PropTypes.checkPropTypes(propTypes, props, 'prop', '');
  return props;
};

const propTypes = {
  error: PropTypes.string
};
