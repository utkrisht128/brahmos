import React from "react";
import Navbar from "../components/Navbar";
import Boxes from "../components/Boxes";
import DuoBox from "../components/Duo-box";
import SoloBox from "../components/Solo-box";
import Physics from "../Images/physics.jpg";
import Maths from "../Images/Maths.jpg";
import EEE from "../Images/EEE.jpg";
import Cp from "../Images/cp.jpg";
import Bme from "../Images/Bme.jpg";
import Chemistry from "../Images/chemistry.jpg";
import English from "../Images/english.jpg";
import icon2 from "../Images/icon2.jpg";
import Discrete from "../Images/discrete.png";
import DataS from "../Images/DataStruc.png";
import DLD from "../Images/DLD.jpg";
import WebT from "../Images/WebTechnology.jpg";
import DBMS from "../Images/DatabaseManagementSystem.jpg";
import DAA from "../Images/Design&AnalysisOfAlgo.jpg";
import CAO from "../Images/ComputerArchitectureandOrganization.png";
import MM from "../Images/MicroprocessorsandMicrocontrollers.jpg";
import ProbabilityT from "../Images/ProbabilityTheoryandStochasticProcess.jpg";
import Software from "../Images/SoftwareEngineering.jpg";
import OperatingSys from "../Images/OperatingSystem.png";
import TheoryofAuto from "../Images/TheoryofAutomata&FormalLanguages.jpg";
import DataComm from "../Images/DataCommunication.jpg";
import PCC from "../Images/PrincipleofCompilerConstruction.jpg";
import Cloud from "../Images/CloudComputing.jpg";
import ML from "../Images/MachineLearning.jpg";
import DataM from "../Images/DataMining.jpg";
import OOAD from "../Images/ObjectorientedAnalysisandDesign.jpg";
import Crypto from "../Images/CryptographyTechniques.jpg";
import HPC from "../Images/HighPerformanceComputing.jpg";
import CHS from "../Images/ComputerHardwareSoftware.jpg";
import Internet from "../Images/InternetofThings.jpg";
import CompGraphics from "../Images/ComputerGraphics.jpg";
import PatternAI from "../Images/PatternProcessingusingAI.jpg";
import AR from "../Images/AugmentedReality.jpg";
import CompV from "../Images/ComputerVision.jpg";
import NLP from "../Images/NaturalLangaugeProcessing.jpg";
import DPS from "../Images/DataPrivacyandSecurity.jpg";
import ITInfra from "../Images/ITInfrastructureandManagement.jpg";
import HCI from "../Images/HumanComputerInteraction.jpg";
import KnowledgeBS from "../Images/KnowledgeBasedSystem.jpg";
import Multimedia from "../Images/MultimediaSecurityandForensic.jpg";
import SProjectMang from "../Images/SoftwareProjectManagement.jpg";
import SOA from "../Images/ServiceOrientedArchitecture.jpg";
import Trends from "../Images/CurrentTrendsinSoftwareDevelopment.jpg";
import "./branchesCss/computereng.css";
export default function ComputerEng() {
  return (
    <>
      <Navbar />
      <h1 id="heading">Computer Engineering</h1>
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
        img4={Software}
        link1={"/Operatingsystem-cse"}
        name1={"Operating system"}
        link2={"/TheoryofAutomataandFormalLanguages-cse"}
        name2={"Theory of Automata & Formal Languages"}
        link3={"/SoftwareEngineering-cse"}
        name3={"Software Engineering"}
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
        img3={Cloud}
        img4={DataM}
        link1={"/PrincipleofCompilerConstruction-cse"}
        name1={"Principle of Compiler Construction"}
        link2={"/CloudComputing-cse"}
        name2={"Cloud Computing"}
        link3={"/DataMining-cse"}
        name3={"Data Mining"}
      />
      <Boxes
        img2={ML}
        img3={OOAD}
        img4={Crypto}
        link1={"/MachineLearning-cse"}
        name1={"Machine Learning"}
        link2={"/ObjectorientedAnalysisandDesign-cse"}
        name2={"Object Oriented Analysis and Design"}
        link3={"/CryptographyTechniques-cse"}
        name3={"Cryptography Techniques"}
      />
      <h1 className="sem">Semester 6</h1>
      <Boxes
        img2={HPC}
        img3={CHS}
        img4={Internet}
        link1={"/HighPerformanceComputing-cse"}
        name1={"High Performance Computing"}
        link2={"/ComputerhardwareSoftware-cse"}
        name2={"Computer hardware Software W/S"}
        link3={"/InternetofThings-cse"}
        name3={"Internet of Things"}
      />
      <Boxes
        img2={CompV}
        img3={NLP}
        img4={DPS}
        link1={"/ComputerVision-cse"}
        name1={"Computer Vision"}
        link2={"/NaturalLanguageProcessing-cse"}
        name2={"Natural Language Processing"}
        link3={"/DataPrivacyandSecurity-cse"}
        name3={"Data Privacy and Security (EG)"}
      />
      <h1 className="sem">Semester 7</h1>
      <Boxes
        img2={ITInfra}
        img3={HCI}
        img4={CompGraphics}
        link1={"/ITInfrastructureandManagement-cse"}
        name1={"IT Infrastructure and Management"}
        link2={"/HumanComputerInteraction-cse"}
        name2={"Human Computer Interaction"}
        link3={"/ComputerGraphics-cse"}
        name3={"Computer Graphics"}
      />
      <Boxes
        img2={KnowledgeBS}
        img3={Multimedia}
        img4={SProjectMang}
        link1={"/KnowledgeBasedSystem-cse"}
        name1={"Knowledge Based System"}
        link2={"/MultimediaSecurityandForensic-cse"}
        name2={"Multimedia Security and Forensic"}
        link3={"/SoftwareProjectManagement-cse"}
        name3={"Software Project Management"}
      />
      <h1 className="sem">Semester 8</h1>
      <Boxes
        img2={Trends}
        img3={SOA}
        img4={AR}
        link1={"/CurrentTrendsinSoftwareDevelopment-cse"}
        name1={"Current Trends in Software Development"}
        link2={"/ServiceOrientedArchitecture-cse"}
        name2={"Service Oriented Architecture"}
        link3={"/AugmentedReality-cse"}
        name3={"Augmented Reality"}
      />
      <SoloBox
        img1={PatternAI}
        link1={"/PatternProcessingAI-cse"}
        name1={"Pattern Processing using AI"}
      />
    </>
  );
}
