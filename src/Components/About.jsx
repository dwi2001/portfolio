import React from "react";
import Skills from "./Skills.jsx";
import { FaFileDownload } from "react-icons/fa";
import Tools from "./Tools.jsx";

const About = () => {
  const handleDownload = () => {
    const baseUrl =
      "https://drive.google.com/file/d/1enfBVLj8-rd6viWJPUEgsUL3nMKnmFLP/view?usp=sharing";
    const pdfUrl = baseUrl;
    const link = document.createElement("a");
    link.href = pdfUrl;
    link.setAttribute("download", "DWINUGRAHAFAUZI.pdf");
    link.style.display = "none";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

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
          <button onClick={handleDownload} className="buttonDownload">
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
