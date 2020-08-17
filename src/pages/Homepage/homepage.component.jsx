import React from "react";
import "./homepage.styles.scss";

import { Icon } from "@chakra-ui/core";
import Projects from "../../components/Projects/Projects";

import html from "../../images/html.png";
import css from "../../images/css.png";
import js from "../../images/js.png";
import sass from "../../images/sass.png";
import react from "../../images/reactlogo.png";
import node from "../../images/nodejs.png";
import express from "../../images/express.png";
import git from "../../images/git.png";
import github from "../../images/github.png";
import gsap from "../../images/gsap.png";
import Footer from "../../components/Footer/Footer";

function Home() {
  return (
    <div className="home-flex-layout">
      <div className="container">
        <div className="wrapper">
          <div className="home">
            <h1 className="heading">Hey, I'm Pradeep M S</h1>
            <h2 className="role">front-end developer</h2>
            <br />
            <h5 className="descr">
              I am a <b>Web/App Developer</b>. I like to code things from
              scratch, and enjoy bringing ideas to life in the browser. I myself
              develop Web Apps using React and develop Mobile Apps using the
              React-Native framework.
            </h5>
            <div className="whole-wrapper">
              <div className="btn-svg-wrapper">
                <button
                  href="mailto:pradeepmsblogspot@gmail.com"
                  className="contact-button"
                >
                  Contact
                </button>
                <div className="ae">
                  <Icon name="chevron-right" size="5em" />
                </div>
              </div>
            </div>
          </div>
        </div>{" "}
        <svg
          className="svg"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
        >
          <path
            fill="#ff004d"
            fillOpacity="1"
            d="M0,192L30,181.3C60,171,120,149,180,154.7C240,160,300,192,360,186.7C420,181,480,139,540,122.7C600,107,660,117,720,117.3C780,117,840,107,900,112C960,117,1020,139,1080,154.7C1140,171,1200,181,1260,192C1320,203,1380,213,1410,218.7L1440,224L1440,320L1410,320C1380,320,1320,320,1260,320C1200,320,1140,320,1080,320C1020,320,960,320,900,320C840,320,780,320,720,320C660,320,600,320,540,320C480,320,420,320,360,320C300,320,240,320,180,320C120,320,60,320,30,320L0,320Z"
          ></path>
        </svg>
        <div className="skills-svg">
          <h2 className="skills-heading">Skill Set</h2>
          <div className="img-grid">
            <img src={html} alt="HTML" title="HTML" />
            <img src={css} alt="" title="CSS" />
            <img src={js} alt="" title="JavaScript" />
            <img src={sass} alt="" title="Sass" />
            <img src={node} className="nodejs" alt="" title="Node" />
            <img src={react} alt="" title="React" />
            <img src={express} alt="" title="Express" />
            <img src={git} alt="" title="Git" />
            <img src={github} className="gsap" alt="" title="Github" />
            <img src={gsap} alt="" title="Greensock" />
          </div>
        </div>
        <div className="bottom-svg">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#ff004d"
              fill-opacity="1"
              d="M0,224L1440,128L1440,0L0,0Z"
            ></path>
          </svg>
        </div>
      </div>
      <Projects />
      <Footer
        buttontitle="Contact"
        image={require("../../images/wolf.svg")}
      />{" "}
    </div>
  );
}

export default Home;
