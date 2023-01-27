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
import icon2 from "../Images/icon2.jpg";
import "./branchesCss/itns.css";
import Discrete from "../Images/discrete.png";
import DataS from "../Images/DataStruc.png";
import DLD from "../Images/DLD.jpg";
import ProbabilityT from "../Images/ProbabilityTheoryandStochasticProcess.jpg";
import DBMS from "../Images/DatabaseManagementSystem.jpg";
import CompGraphics from "../Images/ComputerGraphics.jpg";
import CAO from "../Images/ComputerArchitectureandOrganization.png";
import OptPrinciple from "../Images/OptimizationPrinciplesandTechniques.jpg";
import DAA from "../Images/Design&AnalysisOfAlgo.jpg";
import OperatingSys from "../Images/OperatingSystem.png";
import Software from "../Images/SoftwareEngineering.jpg";
import Cloud from "../Images/CloudComputing.jpg";
import CompNetwork from "../Images/ComputerNetworks.jpg";
import PCC from "../Images/PrincipleofCompilerConstruction.jpg";
import AI from "../Images/ArtificialIntelligence.jpg";
import AnalogDC from "../Images/AnalogandDigitalCommunication.jpg";
import TOC from "../Images/TheoryofComputation.jpg";
import IDS from "../Images/IntrusionDetectionSystem.jpg";
import NumberTC from "../Images/NumberTheoryandCrpytography.jpg";
import MobileC from "../Images/MobileComputing.jpg";
import InformationS from "../Images/InformationSecurity.jpg";
import NND from "../Images/Networkandnetworkingdevices.jpg";
import Fog from "../Images/FogandEdgeComputing.jpg";
import DigitalF from "../Images/DigitalForensics.jpg";
import CyberS from "../Images/CyberSecurity.jpg";
import HadoopS from "../Images/HadoopandSpark.png";
import CDS from "../Images/ComputationalDataScience.jpg";
import DRN from "../Images/DeepandReinforcementnetworks.jpg";

export default function Itns() {
  return (
    <>
      <Navbar />
      <h1 id="heading">Information Technology(Network and Information Security)</h1>
      <h1 className="sem">Semester 1</h1>
      <Boxes
        img2={English}
        img3={Maths}
        img4={Chemistry}
        link1={"/English-me"}
        name1={"English"}
        link2={"/Maths-me"}
        name2={"Maths"}
        link3={"/Chemistry-me"}
        name3={"Chemistry"}
      />
      <DuoBox
        img1={EEE}
        link1={"/EEE-me"}
        name1={"Electrical and Electronics Engineering"}
        img2={Bme}
        link2={"/Bme-me"}
        name2={"Basic of Mechanical Engineering"}
      />
      <h1 className="sem">Semester 2</h1>
      <Boxes
        img2={Cp}
        img3={Maths}
        img4={Physics}
        link1={"/Cp-me"}
        name1={"Computer Programming"}
        link2={"/Maths2-me"}
        name2={"Maths-2"}
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
      <h1 className="sem">Semester 3</h1>
      <Boxes
        img2={DBMS}
        img3={CompGraphics}
        img4={CAO}
        link1={"/DatabaseManagementSystems-cse"}
        name1={"Database Management System"}
        link2={"/ComputerGraphics-it"}
        name2={"Computer Graphics"}
        link3={"/ComputerArchitectureandOrganization-cse"}
        name3={"Computer System Organisation"}
      />
      <DuoBox
        img1={ProbabilityT}
        link1={"/ProbabilityTheoryandStochasticProcess-ece"}
        name1={"Probability and Stochastic Processes"}
        img2={OptPrinciple}
        link2={"/OptimizationPrinciplesandTechniques"}
        name2={"Optimization Principles and Techniques"}
      />
      <h1 className="sem">Semester 4</h1>
      <Boxes
        img2={OperatingSys}
        img3={DAA}
        img4={Software}
        link1={"/ComputerArchitectureandOrganization-cse"}
        name1={"Operating system"}
        link2={"/ProbabilityTheoryandStochasticProcess-ece"}
        name2={"Design and Analysis of Algorithm"}
        link3={"/OptimizationPrinciplesandTechniques"}
        name3={"Software Engineering"}
      />
      <DuoBox
        img1={CompNetwork}
        link1={"/ComputerArchitectureandOrganization-cse"}
        name1={"Computer Networks"}
        img2={AnalogDC}
        link2={"/ProbabilityTheoryandStochasticProcess-ece"}
        name2={"Analog and Digital Communication"}
      />
      <h1 className="sem">Semester 5</h1>
      <Boxes
        img2={TOC}
        img3={AI}
        img4={Cloud}
        link1={"/OptimizationPrinciplesandTechniques"}
        name1={"Theory of Computation"}
        link2={"/ComputerArchitectureandOrganization-cse"}
        name2={"Artificial Intelligence"}
        link3={"/ProbabilityTheoryandStochasticProcess-ece"}
        name3={"Cloud Computing"}
      />
      <Boxes
        img2={IDS}
        img3={NumberTC}
        img4={MobileC}
        link1={"/OptimizationPrinciplesandTechniques"}
        name1={"Intrusion Detection System"}
        link2={"/ComputerArchitectureandOrganization-cse"}
        name2={"Number Theory and Crpytography"}
        link3={"/ProbabilityTheoryandStochasticProcess-ece"}
        name3={"Mobile Computing"}
      />
      <h1 className="sem">Semester 6</h1>
      <Boxes
        img2={InformationS}
        img3={NND}
        img4={PCC}
        link1={"/OptimizationPrinciplesandTechniques"}
        name1={"Information Security"}
        link2={"/ComputerArchitectureandOrganization-cse"}
        name2={"Network and Networking Devices W/S"}
        link3={"/ProbabilityTheoryandStochasticProcess-ece"}
        name3={"Compiler and Translator Design"}
      />
      <DuoBox
        img1={Fog}
        link1={"/ComputerArchitectureandOrganization-cse"}
        name1={"Fog and Edge Computing"}
        img2={DigitalF}
        link2={"/ProbabilityTheoryandStochasticProcess-ece"}
        name2={"Digital Forensics"}
      />
      <h1 className="sem">Semester 8</h1>
      <Boxes
        img2={CyberS}
        img3={HadoopS}
        img4={DRN}
        link1={"/OptimizationPrinciplesandTechniques"}
        name1={"Cyber Security"}
        link2={"/ComputerArchitectureandOrganization-cse"}
        name2={"Hadoop and Spark"}
        link3={"/ProbabilityTheoryandStochasticProcess-ece"}
        name3={"Deep and Reinforcement Networks"}
      />
      <SoloBox
        img1={CDS}
        link1={"/ElectronicsDevices&Circuits-ice"}
        name1={"Computational Data Science"}
      />
    </>
  );
}
