import React from "react";
import Navbar from "../components/Navbar";
import Boxes from "../components/Boxes";
import DuoBox from "../components/Duo-box"
import SoloBox from "../components/Solo-box"
import Physics from "../Images/physics.jpg";
import Maths from "../Images/Maths.jpg";
import Bme from "../Images/Bme.jpg";
import EEE from "../Images/EEE.jpg";
import Cp from "../Images/cp.jpg";
import Chemistry from "../Images/chemistry.jpg";
import English from "../Images/english.jpg";
import icon2 from "../Images/icon2.jpg";
import Discrete from "../Images/discrete.png";
import DLD from "../Images/DLD.jpg";
import DataS from "../Images/DataStruc.png";
import WebT from "../Images/WebTechnology.jpg";
import DBMS from "../Images/DatabaseManagementSystem.jpg";
import DAA from "../Images/Design&AnalysisOfAlgo.jpg";
import CAO from "../Images/ComputerArchitectureandOrganization.png";
import MM from "../Images/MicroprocessorsandMicrocontrollers.jpg";
import ProbabilityT from "../Images/ProbabilityTheoryandStochasticProcess.jpg";
import OperatingSys from "../Images/OperatingSystem.png";
import TheoryofAuto from "../Images/TheoryofAutomata&FormalLanguages.jpg";
import DataComm from "../Images/DataCommunication.jpg";
import PCC from "../Images/PrincipleofCompilerConstruction.jpg";
import DataM from "../Images/DataMining.jpg";
import NLP from "../Images/NaturalLangaugeProcessing.jpg";
import Multimedia from "../Images/MultimediaSecurityandForensic.jpg";
import DistributedC from "../Images/DistributedComputing.jpg";
import BigData from "../Images/BigDataAnalytics.jpg";
import DistributedData from "../Images/DistributedDatabases.jpg";
import DataScienceT from "../Images/DataScienceTools.jpg";
import QueryPO from "../Images/QueryProcessingandOptimization.jpg";
import BI from "../Images/BusinessIntelligence.jpg";
import SocialA from "../Images/SocialMediaAnalytics.jpg";
import DataHVT from "../Images/DataHandlingandVisualizationTools.png";
import "./branchesCss/csds.css";

export default function Csds() {
  return (
    <>
      <Navbar />
      <h1 id="heading">Computer Science and Engineering(Data Science)</h1>
      <h1 className="sem">Semester 1</h1>
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
      <DuoBox
        img1={EEE}
        link1={"/EEE-me"}
        name1={"Electrical and Electronics Engineering"}
        img2={Cp}
        link2={"/Cp-me"}
        name2={"Computer Programming"}
      />
      <h1 className="sem">Semester 2</h1>
      <Boxes
        img2={English}
        img3={Chemistry}
        img4={Maths}
        link1={"/English-me"}
        name1={"English"}
        link2={"/Chemistry-me"}
        name2={"Chemistry"}
        link3={"/Maths2-me"}
        name3={"Maths-2"}
      />
      <Boxes
        img2={DLD}
        img3={DataS}
        img4={Discrete}
        link1={"/DigitalLogicalDesign-cse"}
        name1={"Digital Logical Design"}
        link2={"/DataStructure-cse"}
        name2={"Data Structure"}
        link3={"/DiscreteStructure-cse"}
        name3={"Discrete Structure"}
      />
      <h1 className="sem">Semester 3</h1>
      <Boxes
        img2={DBMS}
        img3={WebT}
        img4={CAO}
        link1={"/DatabaseManagementSystems-cse"}
        name1={"Database Management Systems"}
        link2={"/WebTechnology-cse"}
        name2={"Web Technology"}
        link3={"/ComputerArchitectureandOrganization-cse"}
        name3={"Computer Architecture and Organization"}
      />
      <DuoBox
        img1={DAA}
        link1={"/DesignandAnalysisofAlgorithms-cse"}
        name1={"Design and Analysis of Algorithms"}
        img2={MM}
        link2={"/MicroprocessorsandMicrocontrollers-cse"}
        name2={"Microprocessors and Microcontrollers"}
      />
      <h1 className="sem">Semester 4</h1>
      <Boxes
        img2={OperatingSys}
        img3={TheoryofAuto}
        img4={BigData}
        link1={"/Operatingsystem-cse"}
        name1={"Operating system"}
        link2={"/TheoryofAutomata&FormalLanguages-cse"}
        name2={"Theory of Automata & Formal Languages"}
        link3={"/BigDataAnalytics-csds"}
        name3={"Big Data Analytics"}
      />
      <DuoBox
        img1={DataComm}
        link1={"/DataCommunication-cse"}
        name1={"Data Communication"}
        img2={ProbabilityT}
        link2={"/ProbabilityandStochasticProcesses-ece"}
        name2={"Probability and Stochastic Processes"}
      />
      <h1 className="sem">Semester 5</h1>
      <Boxes
        img2={PCC}
        img3={DistributedC}
        img4={DataM}
        link1={"/PrincipleofCompilerConstruction-csds"}
        name1={"Principle of Compiler Construction"}
        link2={"/DistrbutedComputing-csds"}
        name2={"Distrbuted Computing"}
        link3={"/DataMining-csds"}
        name3={"Data Mining"}
      />
      <DuoBox
        img1={Multimedia}
        link1={"/MultimediaAnalytics-csds"}
        name1={"Multimedia Analytics"}
        img2={DataHVT}
        link2={"/DataHandlingandVisualizationTools-csds"}
        name2={"Data Handling and Visualization Tools"}
      />
      <h1 className="sem">Semester 6</h1>
      <Boxes
        img2={DistributedData}
        img3={DataScienceT}
        img4={QueryPO}
        link1={"/DistributedDatabases-csds"}
        name1={"Distributed Databases"}
        link2={"/DataScienceTools-csds"}
        name2={"Data Science Tools W/S"}
        link3={"/QueryProcessingandOptimization-csds"}
        name3={"Query Processing and Optimization"}
      />
      <Boxes
        img2={BI}
        img3={SocialA}
        img4={NLP}
        link1={"/BusinessIntelligence-csds"}
        name1={"Business Intelligence"}
        link2={"/SocialMediaAnalytics-csds"}
        name2={"Social Media Analytics"}
        link3={"/NaturalLanguageProcessing-csds"}
        name3={"Natural Language Processing(EG)"}
      />
      
    </>
  );
}
