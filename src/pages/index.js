import React, { useContext } from 'react';
import * as styles from '../styles/index.css';
import { ThemeContext } from '../context/themeContext';
import NavBar from '../components/navbar';
import Footer from '../components/footer';


// markup
const IndexPage = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div style={styles}>
      <NavBar />
      <div className={`${
        theme === 'light' ? 'theme-light' : 'theme-dark'
        } bg-gradient-to-r from-primary to-secondary text-main-text transition-all duration-300 m-0 px-5 py-5 min-h-screen`}>
        <main className="flex h-80">
          {/* {children} */}
          <div className="m-auto text-center">
            <h1 className="m-5">hello</h1>
            <h2>This is a dark mode test</h2>
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage;
