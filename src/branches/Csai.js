import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import Boxes from "../components/Boxes";
import DuoBox from "../components/Duo-box"
import Physics from "../Images/physics.jpg";
import Maths from "../Images/Maths.jpg";
import EEE from "../Images/EEE.jpg";
import Bme from "../Images/Bme.jpg";
import Cp from "../Images/cp.jpg";
import Chemistry from "../Images/chemistry.jpg";
import English from "../Images/english.jpg";
import icon2 from "../Images/icon2.jpg";
import Discrete from "../Images/discrete.png"
import DataS from "../Images/DataStruc.png";
import DLD from "../Images/DLD.jpg";
import "./branchesCss/csai.css"
export default function Csai() {
  return (
    <>
      <Navbar />
      <h1 id="heading">Computer Science and Engineering(Artificial Intelligence)</h1>
      <Boxes
        img2={Physics}
        img3={Maths}
        img4={Bme}
        link1={"/Physics-me"}
        name1={"Physics"}
        link2={"/Maths-me"}
        name2={"Maths"}
        link3={"/Bme-me"}
        name3={"Basic of Mechanical Engineering"}
      />
      <Boxes
        img2={EEE}
        img3={Cp}
        img4={Maths}
        link1={"/EEE-me"}
        name1={"Electrical and Electronics Engineering"}
        link2={"/Cp-me"}
        name2={"Computer Programming"}
        link3={"/Maths2-me"}
        name3={"Maths-2"}
      />
      <Boxes
        img2={English}
        img3={Chemistry}
        img4={Discrete}
        link1={"/English-me"}
        name1={"English"}
        link2={"/Chemistry-me"}
        name2={"Chemistry"}
        link3={"/DiscreteStructure-cse"}
        name3={"Discrete Structure"}
      />
      <DuoBox img1={DLD} link1={"/DigitalLogicalDesign-cse"} name1={"Digital Logical Design"}
      img2={DataS} link2={"/DataStructure-cse"} name2={"Data Structure"}/>
    </>
  );
}
