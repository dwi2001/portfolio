import React from "react";
import Skills from "./Skills.jsx";
import { FaFileDownload } from "react-icons/fa";
import Tools from "./Tools.jsx";
import vscode from "../assets/vscode.png";

const About = () => {
  return (
    <>
      <div className="AboutPage">
        <div className="AboutText">
          <h1 className="AboutTextHeading">
            Get to <b>know</b> me!
          </h1>
          <p>
            Hi, my name is <b>dwi nugraha fauzi</b> and I am from Bandung,
            Indonesia. I'm a <b>React Native developer</b> <br />
            <br />I am <b>open</b> to new collaborations or work where I can
            contribute and grow. Feel free to connect with me, links are in the
            footer.
            <br />
            <br />
            Apart from coding I love playing games and riding motorcycle.
          </p>
          <button
            onClick="window.open('https://drive.google.com/drive/my-drive?hl=id','_blank')"
            className="buttonDownload"
          >
            Download Resume
            <div className="buttonIcon">
              <FaFileDownload></FaFileDownload>
            </div>
          </button>
        </div>
      </div>

      <h1 className="SkillsHeading"> Skillset</h1>
      <div className="skills">
        <Skills skill="HTML" />
        <Skills skill="CSS" />
        <Skills skill="Bootstrap" />
        <Skills skill="Javascript" />
        <Skills skill="React" />
        <Skills skill="Git" />
        <Skills skill="Github" />
        <Skills skill="Figma" />
        <Skills skill="Npm" />
      </div>

      <h1 className="ToolsHeading"> Working Tools</h1>
      <div className="skills">
        <Tools Tools={"JIRA"} />
        <Tools Tools={"Visual Studio Code"} />
        <Tools Tools={"Postman"} />
        <Tools Tools={"Android Studio"} />
        <Tools Tools={"Xcode"} />
        <Tools Tools={"Figma"} />
      </div>
    </>
  );
};

export default About;
