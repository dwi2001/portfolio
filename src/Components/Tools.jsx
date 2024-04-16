import React from "react";
import { FaJira, FaFigma } from "react-icons/fa";
import {
  SiPostman,
  SiVisualstudio,
  SiAndroidstudio,
  SiXcode,
} from "react-icons/si";

const Tools = ({ Tools }) => {
  const iconTools = {
    JIRA: <FaJira />,
    Postman: <SiPostman />,
    "Visual Studio Code": <SiVisualstudio />,
    "Android Studio": <SiAndroidstudio />,
    Xcode: <SiXcode />,
    Figma: <FaFigma />,
  };

  return (
    <div title={Tools} className="SkillBox">
      {iconTools[Tools] && <div>{iconTools[Tools]}</div>}
      <a className="SkillTitle">{Tools}</a>
    </div>
  );
};

export default Tools;
