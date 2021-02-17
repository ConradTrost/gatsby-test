import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Toggle from 'react-toggle';
import { ThemeContext } from '../context/themeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSun,
  faMoon
} from '@fortawesome/free-solid-svg-icons';

const NavBar = ({ children }) => {
  const { theme, setTheme } = useContext(ThemeContext);

  const handleThemeToggle = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <>
        <div className={`${
        theme === 'light' ? 'theme-light' : 'theme-dark'
        } absolute bg-transparent w-full text-main-text flex justify-between p-5`}>
            <h3>Conrad Trost</h3>
            <div className="theToggle">
                <Toggle
                icons={{checked: <FontAwesomeIcon icon={faSun} color="white" />, unchecked: <FontAwesomeIcon icon={faMoon} color="white" />}}
                id="theme-toggle"
                checked={theme === 'light' ? true : false}
                onChange={handleThemeToggle}
                />
            </div>
        </div>
    </>
  );
};

NavBar.propTypes = {
  children: PropTypes.node.isRequired,
};

export default NavBar;