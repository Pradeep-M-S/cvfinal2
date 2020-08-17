import React, { Component } from "react";

import ecommerce from "../../images/project_1.png";

import { Text, Button } from "@chakra-ui/core";
import "./Projects.styles.scss";

export class Projects extends Component {
  render() {
    return (
      <div className="project-grid">
        <div className="project-1">
          <img src={ecommerce} className="image-prj" />
          <div className="p-details">
            <Text
              className="heading"
              fontSize="5xl"
              style={{ fontFamily: "Poppins" }}
            >
              E-Commerce Application
            </Text>
            <Text
              className="description"
              fontSize="3xl"
              style={{ fontFamily: "Poppins" }}
            >
              An E-Commerce Site for mainly Clothes,Apparels,Jackets..etc named
              "CLAW CLOTHING" made by using React and Redux{" "}
            </Text>
            <Text
              className="description"
              fontSize="3xl"
              style={{ fontFamily: "Poppins" }}
            >
              Tech Stack used :
            </Text>{" "}
            <Text
              className="description"
              fontSize="3xl"
              style={{ fontFamily: "Poppins" }}
            >
              React , Redux , React-Persist , Chakra UI , React Reselect{" "}
            </Text>
            <button className="button">Live Demo</button>
          </div>
        </div>
        <div className="project-2"></div>
        <div className="project-3"></div>
      </div>
    );
  }
}

export default Projects;
