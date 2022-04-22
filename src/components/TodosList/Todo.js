import PropTypes from 'prop-types';

export const Todo = ({ id, title, status }) => {
  console.log(id, title, status);
  return (
    <div>
      <p>aaaa</p>
    </div>
  );
};

Todo.propTypes = {
  id: PropTypes.number,
  title: PropTypes.string,
  status: PropTypes.string
};
