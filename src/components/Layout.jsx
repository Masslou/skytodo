import PropTypes from 'prop-types';

export const Layout = ({ children }) => {
  return <section className="py-10 min-h-screen bg-zinc-900">{children}</section>;
};

Layout.propTypes = {
  children: PropTypes.elementType
};
