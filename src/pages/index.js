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
          <main className=" text-center p-3 md:p-50 w-full lg:w-10/12 md:mb-40">
            <h1 className="text-4xl font-semibold md:text-6xl m-2">Welcome</h1>
            <h4 className="m-2 sm:text-2xl">This is a test website using Gatsby.js and Tailwind.css</h4>
            <h4 className="m-2 sm:text-2xl">For further information on who I am, visit my portfolio below.</h4>
            <div className="btnContainer m-auto w-full sm:w-10/12 lg:w-8/12">
              <a href="https://trost.dev" rel="noreferrer noopener" target="_blank">
                <button className="bg-gradient-to-br from-accent via-light-accent to-light-accent transform w-full sm:w-5/12 lg:w-4/12 bg-secondary hover:scale-105 p-3 m-2 md:m-5 rounded text-secondary">Visit my Portfolio</button>
              </a>
              <a href="https://github.com/retro1967/gatsby-test" rel="noreferrer noopener" target="_blank">
                <button className="transform w-full sm:w-5/12 lg:w-4/12 bg-secondary hover:scale-105 p-3 m-2 md:m-5 rounded text-primary">View this Repository</button>
              </a>
            </div>
            <p className="text-md sm:text-xl">This project is deployed using Netlify</p>
          </main>
      </div>
      <Footer />
    </div>
  )
}

export default IndexPage;
