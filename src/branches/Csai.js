import React from "react";
import Navbar from "../components/Navbar";
import Boxes from "../components/Boxes";
import DuoBox from "../components/Duo-box";
import SoloBox from "../components/Solo-box";
import Physics from "../Images/physics.jpg";
import Maths from "../Images/Maths.jpg";
import EEE from "../Images/EEE.jpg";
import Bme from "../Images/Bme.jpg";
import Cp from "../Images/cp.jpg";
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
import OperatingSys from "../Images/OperatingSystem.png";
import TheoryofAuto from "../Images/TheoryofAutomata&FormalLanguages.jpg";
import DataComm from "../Images/DataCommunication.jpg";
import PCC from "../Images/PrincipleofCompilerConstruction.jpg";
import ML from "../Images/MachineLearning.jpg";
import Crypto from "../Images/CryptographyTechniques.jpg";
import HPC from "../Images/HighPerformanceComputing.jpg";
import CHS from "../Images/ComputerHardwareSoftware.jpg";
import PatternAI from "../Images/PatternProcessingusingAI.jpg";
import AR from "../Images/AugmentedReality.jpg";
import CompV from "../Images/ComputerVision.jpg";
import NLP from "../Images/NaturalLangaugeProcessing.jpg";
import DPS from "../Images/DataPrivacyandSecurity.jpg";
import HCI from "../Images/HumanComputerInteraction.jpg";
import KnowledgeBS from "../Images/KnowledgeBasedSystem.jpg";
import Trends from "../Images/CurrentTrendsinSoftwareDevelopment.jpg";
import AI from "../Images/ArtificialIntelligence.jpg";
import DistributedC from "../Images/DistributedComputing.jpg";
import DeepLearn from "../Images/DeepLearning.jpg";
import OptTechML from "../Images/OptimizationTechniqueForMachineLearning.jpg";
import ResponsibleAI from "../Images/ResponsibleAI.png";
import IntelliComp from "../Images/IntelligentComputing.jpg";
import AdvAlgo from "../Images/Advancedalgorithm.jpg";
import GameTheory from "../Images/GameTheoryandApplications.jpg";

import "./branchesCss/csai.css";
export default function Csai() {
  return (
    <>
      <Navbar />
      <h1 id="heading">
        Computer Science and Engineering(Artificial Intelligence)
      </h1>
      <h1>Semester 1</h1>
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
      <h1>Semester 2</h1>
      <Boxes
        img2={English}
        img3={Maths}
        img4={Chemistry}
        link1={"/English-me"}
        name1={"English"}
        link2={"/Chemistry-me"}
        name2={"Chemistry"}
        link3={"/Physics-me"}
        name3={"Physics"}
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
      <h1>Semester 3</h1>
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
      <h1>Semester 4</h1>
      <Boxes
        img2={OperatingSys}
        img3={TheoryofAuto}
        img4={AI}
        link1={"/Operatingsystem-cse"}
        name1={"Operating system"}
        link2={"/TheoryofAutomata&FormalLanguages-cse"}
        name2={"Theory of Automata & Formal Languages"}
        link3={"/Artificial Intelligence"}
        name3={"Artificial Intelligence"}
      />
      <DuoBox
        img1={DataComm}
        link1={"/DataCommunication-cse"}
        name1={"Data Communication"}
        img2={ProbabilityT}
        link2={"/ProbabilityandStochasticProcesses-ece"}
        name2={"Probability and Stochastic Processes"}
      />
      <h1>Semester 5</h1>
      <Boxes
        img2={PCC}
        img3={DistributedC}
        img4={GameTheory}
        link1={"/CurrentTrendsinSoftwareDevelopment-cse"}
        name1={"Principle of Compiler Construction"}
        link2={"/ServiceOrientedArchitecture-cse"}
        name2={"Distributed Computing"}
        link3={"/AugmentedReality-cse"}
        name3={"Game Theory and Applications"}
      />
      <DuoBox
        img1={ML}
        link1={"/KnowledgeBasedSystems"}
        name1={"Machine Learning"}
        img2={Crypto}
        link2={"/IntelligentComputing"}
        name2={"Cryptography Techniques"}
      />
      <h1>Semester 6</h1>
      <Boxes
        img2={DeepLearn}
        img3={CHS}
        img4={HPC}
        link1={"/HighPerformanceComputing-cse"}
        name1={"Deep Learning"}
        link2={"/ComputerhardwareSoftware-cse"}
        name2={"AI Hardware and Tools W/S"}
        link3={"/InternetofThings-cse"}
        name3={"High Performance Computing"}
      />
      <Boxes
        img2={DPS}
        img3={NLP}
        img4={CompV}
        link1={"/ComputerVision-cse"}
        name1={"Data Privacy and Security"}
        link2={"/NaturalLanguageProcessing-cse"}
        name2={"Natural Language Processing"}
        link3={"/DataPrivacyandSecurity-cse"}
        name3={"Computer Vision(EG)"}
      />
      <h1>Semester 7</h1>
      <Boxes
        img2={AR}
        img3={HCI}
        img4={OptTechML}
        link1={"/CurrentTrendsinSoftwareDevelopment-cse"}
        name1={"Augmented Reality"}
        link2={"/ServiceOrientedArchitecture-cse"}
        name2={"Human Computer Interaction"}
        link3={"/AugmentedReality-cse"}
        name3={"Optimization Technique For Machine Learning"}
      />
      <SoloBox
        img1={PatternAI}
        link1={"/ElectronicsDevices&Circuits-ice"}
        name1={"Pattern Processing using AI"}
      />
      <h1>Semester 8</h1>
      <Boxes
        img2={KnowledgeBS}
        img3={ResponsibleAI}
        img4={IntelliComp}
        link1={"/CurrentTrendsinSoftwareDevelopment-cse"}
        name1={"Knowledge Based Systems"}
        link2={"/ServiceOrientedArchitecture-cse"}
        name2={"Responsible AI"}
        link3={"/AugmentedReality-cse"}
        name3={"Intelligent Computing"}
      />
      <DuoBox
        img1={AdvAlgo}
        link1={"/KnowledgeBasedSystems"}
        name1={"Advanced algorithm"}
        img2={Trends}
        link2={"/IntelligentComputing"}
        name2={"Current Trends in Software Development (EG)"}
      />
    </>
  );
}
