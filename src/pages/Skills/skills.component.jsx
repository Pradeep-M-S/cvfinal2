import React from "react";
import "./skills.styles.scss";

function Skills() {
  return (
    <div style={{ backgroundColor: "#ff004d", height: "110vh" }}>
      <div className="skills-wrapper">
        <div className="basic-skills">
          <h2 className="heading">Basic</h2>

          <ul>
            <li>HTML</li>
            <li>CSS</li>
            <li>Javascript</li>
          </ul>
        </div>

        <div className="vl"></div>

        <div className="libraries-and-frameworks">
          <h2 className="heading">Libraries and Frameworks</h2>

          <ul>
            <li>React</li>
            <li>React Native</li>
            <li>Bootstrap</li>
            <li>Sass/Scss</li>
            <li>Bulma</li>
            <li>Material UI for React</li>
          </ul>
        </div>

        <div className="vl"></div>

        <div className="misc">
          <h2 className="heading">Other </h2>
          <ul>
            <li>Git</li>
            <li>Github</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Skills;
