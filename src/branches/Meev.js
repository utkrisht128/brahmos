import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Boxes from "../components/Boxes";
import SoloBox from "../components/Solo-box"
import Physics from "../Images/physics.jpg";
import Maths from "../Images/Maths.jpg";
import EEE from "../Images/EEE.jpg";
import Cp from "../Images/cp.jpg";
import Chemistry from "../Images/chemistry.jpg";
import English from "../Images/english.jpg";
import icon2 from "../Images/icon2.jpg";
import "./branchesCss/meev.css"
export default function Meev() {
  return (
    <>
      <Navbar />
      <h1 id="heading">Mechanical Engineering(Electric Vechicle)</h1>
      <Boxes
        img2={Physics}
        img3={Maths}
        img4={Chemistry}
        link1={"/Physics-me"}
        name1={"Physics"}
        link2={"/Maths-me"}
        name2={"Maths"}
        link3={"/Chemistry-me"}
        name3={"Chemistry"}
      />
      <Boxes
        img2={EEE}
        img3={Cp}
        img4={English}
        link1={"/EEE-me"}
        name1={"Electrical and Electronics Engineering"}
        link2={"/Cp-me"}
        name2={"Computer Programming"}
        link3={"/English-me"}
        name3={"English"}
      />
      <SoloBox img1={icon2} link1={"/Bme-me"} name1={"BME"}/>
    </>
  );
}
