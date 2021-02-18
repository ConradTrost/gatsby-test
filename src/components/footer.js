import React, { useContext } from 'react';
import { ThemeContext } from '../context/themeContext';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faLinkedin,
  faTwitter,
  faGithub
} from '@fortawesome/free-brands-svg-icons';
import {
    faLongArrowAltRight,
} from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  const { theme } = useContext(ThemeContext);

  return(
    <footer className={`${
        theme === 'light' ? 'theme-light' : 'theme-dark'} text-main-text bg-transparent absolute bottom-0 text-center w-full`}>
        <div className="m-auto">
            <a href="https://github.com/retro1967" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faGithub} width="16" size="2x" className="transform hover:scale-110 m-5"/></a>
            <a href="https://linkedin.com/in/conradtrost" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faLinkedin} width="16" size="2x" className="transform hover:scale-110 m-5"/></a>
            <a href="https://twitter.com/TrostDev" target="_blank" rel="noreferrer noopener"><FontAwesomeIcon icon={faTwitter} width="16" size="2x" className="transform hover:scale-110 m-5" /></a>
        </div>
    </footer>
  )
};

export default Footer;