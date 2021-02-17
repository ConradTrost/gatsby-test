import React, { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return(
    <footer className={`${
        theme === 'light' ? 'theme-light' : 'theme-dark'} text-main-text bg-transparent absolute bottom-0 text-center w-full`}>
        <div className="m-auto">
            <FontAwesomeIcon icon={faLinkedin} size="2x" className="m-5"/>
            <FontAwesomeIcon icon={faTwitter} size="2x" className="m-5" />
        </div>
    </footer>
  )
};

export default Footer;