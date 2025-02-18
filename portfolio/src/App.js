import React from "react";
import logo from './logo.svg';
import './styles.css';
import Header from "./components/Header";
import About from "./components/About";
import Works from "./components/Works";
import Contact from "./components/Contact";

function App() {
  return (
      <div>
        <Header/>
        <main>
          <section id="top">
            <h1><span className="highlight-font">Hello, I am </span><br/> Kayo OSAKO</h1>
            <p>I am an aspiring software engineer with over 5 years of experience in the IT industry in Japan, including
              more than 2 years as a software development product manager.
            </p>
            <div className="links">
              <a href="https://github.com/ko-sako">
                <img src="assets/github.png" alt="Link to Kayo's Github repo"/>
              </a>
              <a href="https://www.linkedin.com/in/kayo-osako-0b4699170/">
                <img src="assets/linkedin.png" alt="Link to Kayo's LinkedIn page"/>
              </a>
              <a href="mailto:lapin.587k@gmail.com">
                <img src="assets/mail.png" alt="Send email to Kayo"/>
              </a>
              <a href="assets/2401021CV_KayoOsako-open.pdf" download>
                <img src="assets/cv.png" alt="Download Kayo's CV"/>
              </a>
            </div>
          </section>
          <About/>
          <Works/>
          <Contact/>
        </main>
        <footer>
          <p>© Copyright 2024 All rights reserved.</p>
        </footer>
      </div>
  );
}

export default App;
