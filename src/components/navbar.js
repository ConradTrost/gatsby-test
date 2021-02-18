import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import Toggle from 'react-toggle';
import { ThemeContext } from '../context/themeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faSun,
  faMoon
} from '@fortawesome/free-solid-svg-icons';

const NavBar = () => {
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
        } absolute bg-transparent w-full text-main-text flex justify-between p-2 items-center`}>
            <h3 className="text-xl md:text-xl">Conrad Trost</h3>
            <div className="theToggle items-center flex">
                <a href="https://trost.dev" className="text-xl border-b duration-200 border-transparent hover:border-main-text m-2" rel="noopener noreferrer" target="_blank">Portfolio</a>
                <a href="https://github.com/retro1967" className="text-xl border-b duration-200 border-transparent hover:border-main-text m-2" rel="noopener noreferrer" target="_blank">GitHub</a>
                <Toggle
                className="m-2"
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