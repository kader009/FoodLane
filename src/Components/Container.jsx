import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return (
    <div className=" w-full mx-auto max-w-[1276px] h-full px-[20px]">
      {children}
    </div>
  );
};

Container.propTypes = {
  children: PropTypes.node
};

export default Container;
