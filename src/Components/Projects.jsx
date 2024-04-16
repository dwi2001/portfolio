import React from "react";
import ProjectBox from "./ProjectBox";
import Mobbi from "../assets/mobbilogo.png";
import HalalPedia from "../assets/halalpedia.webp";
import olx from "../assets/olx.png";
import android from "../assets/android.png";

const Projects = () => {
  return (
    <div>
      <h1 className="projectHeading">
        My <b>Projects</b>
      </h1>
      <div className="project">
        <ProjectBox projectPhoto={olx} projectName="Olx" />
        <ProjectBox projectPhoto={Mobbi} projectName="Mobbi" />
        <ProjectBox projectPhoto={HalalPedia} projectName="Halalpedia" />
        <ProjectBox projectName="PilihMarket" />
      </div>
    </div>
  );
};

export default Projects;
