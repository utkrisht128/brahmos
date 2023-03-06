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
import "./branchesCss/it.css";
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
import NumberTC from "../Images/NumberTheoryandCrpytography.jpg";
import MobileC from "../Images/MobileComputing.jpg";
import NND from "../Images/Networkandnetworkingdevices.jpg";
import CyberS from "../Images/CyberSecurity.jpg";
import HadoopS from "../Images/HadoopandSpark.png";
import CDS from "../Images/ComputationalDataScience.jpg";
import DRN from "../Images/DeepandReinforcementnetworks.jpg";
import WebT from "../Images/WebTechnology.jpg";
import ML from "../Images/MachineLearning.jpg";
import BigData from "../Images/BigDataAnalytics.jpg";
import SoftComp from "../Images/SoftComputing.jpg";
import CompV from "../Images/ComputerVision.jpg";
import PatternAI from "../Images/PatternProcessingusingAI.jpg";
import CyberL from "../Images/CyberLaws.jpg";
import DistributedS from "../Images/DistributedSystem.jpg";
import SocialNMA from "../Images/SocialNetworkMiningandAnalysis.jpg";
import DataWare from "../Images/DataWarehouseandData.jpg";
import ANN from "../Images/ArtificialNeuralNetworks.jpg";
export default function It() {
  return (
    <>
      <Navbar />
      <h1 id="heading">Information Technology</h1>
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
        img2={CompGraphics}
        img3={CAO}
        img4={DBMS}
        link1={"/ComputerGraphics-it"}
        name1={"Computer Graphics"}
        link2={"/ComputerArchitectureandOrganization-cse"}
        name2={"Computer System Organisation"}
        link3={"/DatabaseManagementSystems-cse"}
        name3={"Database Management System"}
      />
      <DuoBox
        img1={ProbabilityT}
        link1={"/ProbabilityTheoryandStochasticProcess-ece"}
        name1={"Probability and Stochastic Processes"}
        img2={OptPrinciple}
        link2={"/OptimizationPrinciplesandTechniques-it"}
        name2={"Optimization Principles and Techniques"}
      />
      <h1 className="sem">Semester 4</h1>
      <Boxes
        img2={OperatingSys}
        img3={DAA}
        img4={Software}
        link1={"/Operatingsystems-it"}
        name1={"Operating systems"}
        link2={"/DesignandAnalysisofAlgorithm-it"}
        name2={"Design and Analysis of Algorithm"}
        link3={"/SoftwareEngineering-it"}
        name3={"Software Engineering"}
      />
      <DuoBox
        img1={CompNetwork}
        link1={"/ComputerNetworks-it"}
        name1={"Computer Networks"}
        img2={AnalogDC}
        link2={"/AnalogandDigitalCommunication-it"}
        name2={"Analog and Digital Communication"}
      />
      <h1 className="sem">Semester 5</h1>
      <Boxes
        img2={TOC}
        img3={Cloud}
        img4={DataWare}
        link1={"/TheoryofComputation-it"}
        name1={"Theory of Computation"}
        link2={"/CloudComputing-it"}
        name2={"Cloud Computing"}
        link3={"/DataWarehouseandData-it"}
        name3={"Data Warehouse and Data"}
      />
      <Boxes
        img2={SoftComp}
        img3={NumberTC}
        img4={AI}
        link1={"/SoftComputing-it"}
        name1={"Soft Computing"}
        link2={"/NumberTheoryandCrpytography-it"}
        name2={"Number Theory and Crpytography"}
        link3={"/ArtificialIntelligence-it"}
        name3={"Artificial Intelligence"}
      />
      <SoloBox
        img1={MobileC}
        link1={"/MobileComputing-it"}
        name1={"Mobile Computing"}
      />
      <h1 className="sem">Semester 6</h1>
      <Boxes
        img2={NND}
        img3={PCC}
        img4={WebT}
        link1={"/NetworkandNetworkingDevices-it"}
        name1={"Network and Networking Devices W/S"}
        link2={"/CompilerandTranslatorDesign-it"}
        name2={"Compiler and Translator Design"}
        link3={"/WebTechnology-it"}
        name3={"Web Technology"}
      />
      <Boxes
        img2={ML}
        img3={BigData}
        img4={ANN}
        link1={"/MachineLearningandDataAnalytics-it"}
        name1={"Machine Learning and Data Analytics"}
        link2={"/BigDataScienceandTools-it"}
        name2={"Big Data Science and tools"}
        link3={"/ArtificialNeuralNetworks-it"}
        name3={"Artificial Neural Networks"}
      />
      <h1 className="sem">Semester 7</h1>
      <Boxes
        img2={CompV}
        img3={PatternAI}
        img4={SocialNMA}
        link1={"/MachineVision-it"}
        name1={"Machine Vision"}
        link2={"/PatternAnalysisandRecommenderSystem-it"}
        name2={"Pattern Analysis and Recommender System"}
        link3={"/SocialNetworkMiningandAnalysis-it"}
        name3={"Social Network Mining and Analysis"}
      />
      <DuoBox
        img1={DistributedS}
        link1={"/DistributedSystem-it"}
        name1={"Distributed System"}
        img2={CyberL}
        link2={"/CyberLaws-it"}
        name2={"Cyber Laws"}
      />
      <h1 className="sem">Semester 8</h1>
      <Boxes
        img2={CyberS}
        img3={HadoopS}
        img4={DRN}
        link1={"/CyberSecurity-it"}
        name1={"Cyber Security"}
        link2={"/HadoopandSpark-it"}
        name2={"Hadoop and Spark"}
        link3={"/DeepandReinforcementNetworks-it"}
        name3={"Deep and Reinforcement Networks"}
      />
      <SoloBox
        img1={CDS}
        link1={"/ComputationalDataScience-it"}
        name1={"Computational Data Science"}
      />
      
      
    </>
  );
}
