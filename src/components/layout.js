import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Toggle from 'react-toggle';
import { ThemeContext } from '../context/themeContext';

const Layout = ({ children }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
      <div className="bg-gradient-to-r from-green-200 via-light-blue-500 to-blue-400 h-screen flex">
        <div className="m-auto">
          <h1 className="">hello</h1>
        </div>
      </div>
  );
};

Layout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Layout;