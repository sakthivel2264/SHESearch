import PropTypes from "prop-types";

const Layout = ({ children }) => {
  return (
    <div className="bg-black/90 min-h-screen flex justify-center items-start">
      <div className="max-w-3xl w-full mx-4 flex flex-col justify-center items-center">
        {children}
      </div>
    </div>
  );
};

Layout.propTypes = {
  children: PropTypes.element,
};

export default Layout;
