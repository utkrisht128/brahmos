import React from "react";
import Navbar from "../components/Navbar";
import Boxes from "../components/Boxes";
import DuoBox from "../components/Duo-box";
import SoloBox from "../components/Solo-box";
import Physics from "../Images/physics.jpg";
import Maths from "../Images/Maths.jpg";
import Bme from "../Images/Bme.jpg";
import EEE from "../Images/EEE.jpg";
import Cp from "../Images/cp.jpg";
import Chemistry from "../Images/chemistry.jpg";
import English from "../Images/english.jpg";
import Discrete from "../Images/discrete.png";
import DataS from "../Images/DataStruc.png";
import AppliedP from "../Images/AppliedP.png";
import icon2 from "../Images/icon2.jpg";
import DBMS from "../Images/DatabaseManagementSystem.jpg";
import CAO from "../Images/ComputerArchitectureandOrganization.png";
import DAA from "../Images/Design&AnalysisOfAlgo.jpg";
import EnggMaths from "../Images/EngineeringMathematics.jpg";
import MathsStats from "../Images/MathematicalStatistics.jpg";
import IntelliComp from "../Images/IntelligentComputing.jpg";
import TheoryofAuto from "../Images/TheoryofAutomata&FormalLanguages.jpg";
import Software from "../Images/SoftwareEngineering.jpg";
import OperatingSys from "../Images/OperatingSystem.png";
import CompGraphics from "../Images/ComputerGraphics.jpg";
import NLP from "../Images/NaturalLangaugeProcessing.jpg";
import OptTech from "../Images/OptimizationTechniques.jpg";
import BigData from "../Images/BigDataAnalytics.jpg";
import ML from "../Images/MachineLearning.jpg";
import Crypto from "../Images/CryptographyTechniques.jpg";
import AdvAlgo from "../Images/Advancedalgorithm.jpg";
import KnowledgeBS from "../Images/KnowledgeBasedSystem.jpg";
import ScienComp from "../Images/ScientificComputing.jpg";
import Real from "../Images/RealAnalysis.jpg";
import ALA from "../Images/AppliedLinearAlgebra.jpg";
import CompNetwork from "../Images/ComputerNetworks.jpg";
import SoftComp from "../Images/SoftComputing.jpg";
import Financial from "../Images/FinancialEngineering.jpg";
import OperationalR from "../Images/OperationalResearch.jpg";
import CompTools from "../Images/ComputingTools.jpg";
import SpecialFunc from "../Images/SpecialFunctions.jpg";
import Simulation from "../Images/Simulation.jpg";
import Graph from "../Images/GraphTheoryandAlgorithm.jpg";
import AdvNumerical from "../Images/AdvanceNumericalAnalysis.jpg";
import PDE from "../Images/PartialDifferentialEquations.jpg";
import Queing from "../Images/Queuingtheoryandapplications.jpg";

import "./branchesCss/mac.css";
export default function Mac() {
  return (
    <>
      <Navbar />
      <h1 id="heading">Mathematics and Computing</h1>
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
      <h2>Semester 2</h2>
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
        img2={DataS}
        img3={AppliedP}
        img4={Discrete}
        link1={"/DataStructure-cse"}
        name1={"Data Structure"}
        link2={"/AppliedPhysics-mac"}
        name2={"Applied Physics"}
        link3={"/DiscreteStructure-cse"}
        name3={"Discrete Structure"}
      />
      <h1>Semester 3</h1>
      <Boxes
        img2={EnggMaths}
        img3={DBMS}
        img4={MathsStats}
        link1={"/DataStructure-cse"}
        name1={"Engineering Mathematics"}
        link2={"/DatabaseManagementSystems-cse"}
        name2={"Database Mangement Systems"}
        link3={"/DiscreteStructure-cse"}
        name3={"Mathematical Statistics"}
      />
      <DuoBox
        img1={DAA}
        link1={"/DesignandAnalysisofAlgorithms-cse"}
        name1={"Design and Analysis of Algorithms"}
        img2={CAO}
        link2={"/ComputerArchitectureandOrganization-cse"}
        name2={"Computer Architecture and Organization"}
      />
      <h1>Semester 4</h1>
      <Boxes
        img2={OperatingSys}
        img3={TheoryofAuto}
        img4={ScienComp}
        link1={"/Operatingsystem-cse"}
        name1={"Operating system"}
        link2={"/TheoryofAutomata&FormalLanguages"}
        name2={"Theory of Automata & Formal Languages"}
        link3={"/ScientificComputing"}
        name3={"Scientific Computing"}
      />
      <DuoBox
        img1={Real}
        link1={"/RealAnalysis"}
        name1={"Real Analysis"}
        img2={ALA}
        link2={"/AppliedLinearAlgebra"}
        name2={"Applied Linear Algebra"}
      />
      <h1>Semester 5</h1>
      <Boxes
        img2={Software}
        img3={CompNetwork}
        img4={SoftComp}
        link1={"/NaturalLanguageProcessing"}
        name1={"Software Engineering"}
        link2={"/ComputerGraphics"}
        name2={"Computer Networks"}
        link3={"/SpecialFunctions"}
        name3={"Soft Computing"}
      />
      <Boxes
        img2={Financial}
        img3={OptTech}
        img4={OperationalR}
        link1={"/NaturalLanguageProcessing"}
        name1={"Financial Engineering"}
        link2={"/ComputerGraphics"}
        name2={"Optimization"}
        link3={"/SpecialFunctions"}
        name3={"Operational Research"}
      />
      <h1>Semester 6</h1>
      <Boxes
        img2={BigData}
        img3={CompTools}
        img4={ML}
        link1={"/BigDataAnalytics"}
        name1={"Big Data Analytics"}
        link2={"/ComputingTools"}
        name2={"Computing Tools W/S"}
        link3={"/MachineLearning"}
        name3={"Machine Learning"}
      />
      <Boxes
        img2={CompGraphics}
        img3={SpecialFunc}
        img4={NLP}
        link1={"/ComputerGraphics"}
        name1={"Computer Graphics"}
        link2={"/SpecialFunctions"}
        name2={"Special Functions"}
        link3={"/NaturalLanguageProcessing"}
        name3={"Natural Language Processing(EG)"}
      />
      <h1>Semester 7</h1>
      <Boxes
        img2={Crypto}
        img3={Simulation}
        img4={Graph}
        link1={"/NaturalLanguageProcessing"}
        name1={"Cryptography"}
        link2={"/ComputerGraphics"}
        name2={"Simulation"}
        link3={"/SpecialFunctions"}
        name3={"Graph Theory and Algorithm"}
      />
      <SoloBox
        img1={AdvNumerical}
        link1={"/ElectronicsDevices&Circuits-ice"}
        name1={"Advance Numerical Analysis"}
      />
      <h1>Semester 8</h1>
      <Boxes
        img2={AdvAlgo}
        img3={PDE}
        img4={Queing}
        link1={"/NaturalLanguageProcessing"}
        name1={"Advanced algorithm"}
        link2={"/ComputerGraphics"}
        name2={"Partial Differential Equations"}
        link3={"/SpecialFunctions"}
        name3={"Queuing Theory and Applications"}
      />
      <DuoBox
        img1={KnowledgeBS}
        link1={"/KnowledgeBasedSystems"}
        name1={"Knowledge Based Systems"}
        img2={IntelliComp}
        link2={"/IntelligentComputing"}
        name2={"Intelligent Computing"}
      />
    </>
  );
}
