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
        } bg-gradient-to-br from-primary via-primary to-grad-color text-main-text transition-all duration-300 m-0 px-5 py-5 min-h-screen flex items-center justify-center`}>
          {/* {children} */}
          <main className=" text-center p-50 w-10/12">
            <h1 className="">Welcome</h1>
            <h4>This is a test website using Gatsby.js and Tailwind.css</h4>
            <h4>For further information on who I am, visit my portfolio below.</h4>
            <a href="https://trost.dev" rel="noreferrer noopener" target="_blank">
              <button className="transform bg-secondary text-white hover:scale-105 p-3 m-5 mb-40 rounded text-primary">Visit my Portfolio</button>
            </a>
            <a href="https://github.com/retro1967/gatsby-test" rel="noreferrer noopener" target="_blank">
              <button className="transform bg-secondary text-white hover:scale-105 p-3 m-5 mb-40 rounded text-primary">View this Repository</button>
            </a>
          </main>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage;
