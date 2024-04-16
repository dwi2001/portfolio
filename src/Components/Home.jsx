import React from "react";
import { Link } from "react-router-dom";
import Type from "./Type.jsx";
import Tilt from "react-parallax-tilt";
import luffy from "../assets/luffy.png";
import { CgPhone } from "react-icons/cg";
import { BsPerson } from "react-icons/bs";
import avatar from "../assets/avatar-3d.png";

const Home = () => {
  return (
    <div>
      <div className="HomePage">
        <div className="HomeText">
          <h1>Hello</h1>
          <h1>
            I'M <b>Dwi Nugraha Fauzi</b>
          </h1>
          <Type />
          <Link to="/About">
            <button>
              About Me
              <BsPerson />
            </button>
          </Link>

          <Link to="/Contact">
            <button>
              Contact <CgPhone />
            </button>
          </Link>
        </div>
        <Tilt>
          <img className="Avatar" src={avatar} alt="" />
        </Tilt>
      </div>
    </div>
  );
};

export default Home;
