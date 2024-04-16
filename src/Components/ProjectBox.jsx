import React from "react";
import { FaAndroid, FaApple } from "react-icons/fa";
import { FcAndroidOs } from "react-icons/fc";
import Jobdesc from "./JobDesc";

const ProjectBox = ({ projectPhoto, projectName }) => {
  const desc = {
    OlxDesc:
      "OLX is an online marketplace application where users can buy and sell various goods, including electronics, vehicles, furniture, and more. It provides a platform for individuals and businesses to connect and trade items locally, simplifying the process of buying and selling second-hand items.",
    OlxJobdesc: [
      "Front End Development using java & Kotlin.",
      "Make Sure Team Have access for development",
      "Bug Fixing in the Application",
      "Creating New Features",
      "Optimization",
      "Deploy App to Google Playstore",
    ],
    OlxIos: "https://apps.apple.com/in/app/olx-buy-sell-near-you/id913492792",
    OlxAndroid:
      "https://play.google.com/store/apps/details?id=com.app.tokobagus.betterb&hl=en&gl=US",

    MobbiDesc:
      "The Mobbi mobile app is incredibly useful for helping you find your dream used car, from purchase to trade-in and even test drives.",
    MobbiJobdesc: [
      "Front End Development using React Native.",
      "RESTful API",
      "Manage Management State Using Redux",
      "Bug Fixing in the Application",
      "Creating New Features",
      "Optimization (upgrading React version, RND library for future use)",
    ],
    MobbiAndroid:
      "https://play.google.com/store/apps/details?id=com.astra.mobil88&hl=en&gl=US",
    MobbiIos:
      "https://apps.apple.com/id/app/mobbi-jual-beli-mobil-bekas/id1450923542",

    HalalpediaDesc:
      "Halalpedia is an application that provides information about halal products, including product directories, halal certification, articles.",
    HalalpediaJobdesc: [
      "Front End Development using React Native.",
      "RESTful API",
      "Manage Management State Using Redux",
      "Bug Fixing in the Application",
      "Creating New Features",
      "Optimization (upgrading React version, RND library for future use)",
      "Deploy App to Google Playstore and app store ",
    ],
    HalalpediaAndroid:
      "https://play.google.com/store/apps/details?id=com.bti.halalpedia&hl=in",
    HalalpediaIos: "https://apps.apple.com/id/app/halalpedia/id1509193416",

    PilihMarketDesc:
      "This webpageis was made for an ecommerce brand showcasing their backpacks.The project taught me how to use custom cursors and arrange text in a much better way",
    PilihMarketJobdesc: [
      "Development Front End using React Native, ",
      "RESTfulAPI",
      "Manage Management State Using Redux Saga",
      "Bug Fixing Appliaction",
      "Create New Feature",
    ],
  };

  return (
    <div className="projectBox">
      {projectPhoto ? (
        <img
          className="projectPhoto"
          src={projectPhoto}
          alt="Project display"
        />
      ) : (
        <div className="projectPhoto">
          <FaAndroid size={150} color="green" />
        </div>
      )}
      <div>
        <br />
        <h3>{projectName}</h3>
        <br />
        {desc[projectName + "Desc"]}
        <br />
        <br />
        <h3
          style={{
            marginTop: 10,
            // marginLeft: 10,
            textAlign: "left",
          }}
        >
          {"job description :"}
        </h3>
        <br />
        <div style={{ textAlign: "justify", marginLeft: 10 }}>
          <Jobdesc jobdesc={desc[projectName + "Jobdesc"]} />
        </div>
        <br />
        {desc[projectName + "Android"] && (
          <a href={desc[projectName + "Android"]} target="_blank">
            <button className="projectbtn">
              <FaAndroid size={30} />
            </button>
          </a>
        )}
        {desc[projectName + "Ios"] && (
          <a href={desc[projectName + "Ios"]} target="_blank">
            <button className="projectbtn">
              <FaApple size={30} />
            </button>
          </a>
        )}
      </div>
    </div>
  );
};
export default ProjectBox;
