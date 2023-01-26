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
import ElectricalM from "../Images/ElectricalM.jpg";
import EDC from "../Images/EDC.jpg";
import SignalS from "../Images/SignalS.png";
import DataS from "../Images/DataStruc.png";
import DigitalCS from "../Images/DigitalCircuitsandSystems.jpg";
import PowerApp from "../Images/PowerApparatus.jpg";
import ElecInstrumentation from "../Images/ElectronicInstrumentation.jpg";
import WebT from "../Images/WebTechnology.jpg";
import CyberL from "../Images/CyberLaws.jpg";
import Mechatronics from "../Images/Mechatronics.jpg";
import Robotics from "../Images/Robotics.jpg";
import ANN from "../Images/ArtificialNeuralNetworks.jpg";
import OperatingSys from "../Images/OperatingSystem.png";
import DBMS from "../Images/DatabaseManagementSystem.jpg";
import ControlSys from "../Images/ControlSystems.jpg";
import EnggAD from "../Images/EngineeringAnalysis&Design.jpg";
import MicroSystemD from "../Images/MicroprocessorBasedSystemDesign.jpg";
import SensorT from "../Images/SensorsandTransducers.jpg";
import ControlNavR from "../Images/ControlandNavigationinRobotics.jpg";
import BSP from "../Images/BiomedicalSignalProcessing.jpg";
import SMR from "../Images/SensoryandMotorRehabilitation.jpg";
import IntelliControl from "../Images/IntelligentControl.jpg";
import PED from "../Images/PowerElectronics&Drive.jpg";
import IndustrialIntru from "../Images/IndustrialInstrumentation.jpg";
import DSP from "../Images/DigitalSignalProcessing.jpg";
import RobotAS from "../Images/RobotAnalysisandcontrol.jpg";
import Biometric from "../Images/BiometricTechnologyandsecuritysystems.jpg";
import MLHealth from "../Images/Machinelearningforhealthcare.jpg";
import MultiVar from "../Images/multivariablecontroltheoryandapplications.jpg";
import MLControl from "../Images/MachineLearningApplicationsinControlSystems.jpg";
import ModernControl from "../Images/ModernControlTheory.jpg";
import PDC from "../Images/Processdynamicsandcontrol.jpg";
import COI from "../Images/CommunicationandOpticalInstrumentation.jpg";
import BioMedicalInstru from "../Images/BiomedicalInstrumentation.jpg";
import DiscreteTS from "../Images/DiscreteTimeSystems.jpg";
import IAS from "../Images/IntelligentAutonomoussystems.jpg";
import OpticalLaser from "../Images/OpticalFibreandLaserinMedicine.jpg";
import BioImg from "../Images/BiomedicalImaging.jpg";
import CompV from "../Images/ComputerVision.jpg";
import OptTech from "../Images/OptimizationTechniques.jpg";

import "./branchesCss/ice.css";
export default function Ice() {
  return (
    <>
      <Navbar />
      <h1 id="heading">Intrumental and Cntrol Engineering</h1>
      <h1>Semester 1</h1>
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
      <h1>Semester 2</h1>
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
        img2={ElectricalM}
        img3={EDC}
        img4={SignalS}
        link1={"/ElectricalMeasurements-ice"}
        name1={"Electrical Measurements"}
        link2={"/ElectronicsDevices&Circuits-ice"}
        name2={"Electronics Devices & Circuits"}
        link3={"/Signal&Systems-ice"}
        name3={"Signal & Systems"}
      />
      <h1>Semester 3</h1>
      <Boxes
        img2={DataS}
        img3={Maths}
        img4={PowerApp}
        link1={"/DataStructure-cse"}
        name1={"Data Structure and Algorithms"}
        link2={"/ElectronicsDevices&Circuits-ice"}
        name2={"Maths-3"}
        link3={"/Signal&Systems-ice"}
        name3={"Power Apparatus"}
      />
      <DuoBox
        img1={ElecInstrumentation}
        link1={"/ComputerArchitectureandOrganization-cse"}
        name1={"Electronic Instrumentation"}
        img2={DigitalCS}
        link2={"/ProbabilityTheoryandStochasticProcess-ece"}
        name2={"Digital Circuits and Systems"}
      />
      <h1>Semester 4</h1>
      <Boxes
        img2={EnggAD}
        img3={ControlSys}
        img4={MicroSystemD}
        link1={"/DigitalCircuitsandSystems-ice"}
        name1={"Engineering Analysis & Design"}
        link2={"/Signal&Systems-ice"}
        name2={"Control Systems- I"}
        link3={"/DataStructure-cse"}
        name3={"Microprocessor Based System Design"}
      />
      <DuoBox
        img1={SensorT}
        link1={"/ComputerArchitectureandOrganization-cse"}
        name1={"Sensors and Transducers"}
        img2={DBMS}
        link2={"/ProbabilityTheoryandStochasticProcess-ece"}
        name2={"Database Management System"}
      />
      <h1>Semester 5</h1>
      <Boxes
        img2={ModernControl}
        img3={PDC}
        img4={COI}
        link1={"/DigitalCircuitsandSystems-ice"}
        name1={"Modern Control Theory"}
        link2={"/Signal&Systems-ice"}
        name2={"Process Dynamics and Control"}
        link3={"/DataStructure-cse"}
        name3={"Communication and Optical Instrumentation"}
      />
      <Boxes
        img2={Robotics}
        img3={SensorT}
        img4={BioMedicalInstru}
        link1={"/DigitalCircuitsandSystems-ice"}
        name1={"Robotics"}
        link2={"/Signal&Systems-ice"}
        name2={"Smart Sensors"}
        link3={"/DataStructure-cse"}
        name3={"Biomedical Instrumentation"}
      />
      <SoloBox
        img1={DiscreteTS}
        link1={"/ElectronicsDevices&Circuits-ice"}
        name1={"Discrete Time Systems"}
      />
      <h1>Semester 6</h1>
      <Boxes
        img2={ControlNavR}
        img3={BSP}
        img4={SMR}
        link1={"/DigitalCircuitsandSystems-ice"}
        name1={"Control and Navigation in Robotics"}
        link2={"/Signal&Systems-ice"}
        name2={"Biomedical Signal Processing"}
        link3={"/DataStructure-cse"}
        name3={"Sensory and Motor Rehabilitation"}
      />
      <Boxes
        img2={IntelliControl}
        img3={PED}
        img4={IndustrialIntru}
        link1={"/DigitalCircuitsandSystems-ice"}
        name1={"Intelligent Control"}
        link2={"/Signal&Systems-ice"}
        name2={"Power Electronics & Drive"}
        link3={"/DataStructure-cse"}
        name3={"Industrial Instrumentation"}
      />
      <DuoBox
        img1={OperatingSys}
        link1={"/ComputerArchitectureandOrganization-cse"}
        name1={"Operating systems"}
        img2={DSP}
        link2={"/ProbabilityTheoryandStochasticProcess-ece"}
        name2={"Digital Signal Processing"}
      />
            <h1>Semester 7</h1>
      <Boxes
        img2={IAS}
        img3={CompV}
        img4={OpticalLaser}
        link1={"/DigitalCircuitsandSystems-ice"}
        name1={"Intelligent Autonomous Systems"}
        link2={"/Signal&Systems-ice"}
        name2={"Robotics Vision"}
        link3={"/DataStructure-cse"}
        name3={"Optical Fibre and Laser in Medicine"}
      />
      <Boxes
        img2={BioImg}
        img3={OptTech}
        img4={Mechatronics}
        link1={"/DigitalCircuitsandSystems-ice"}
        name1={"Biomedical Imaging"}
        link2={"/Signal&Systems-ice"}
        name2={"Classical Optimization Techniques"}
        link3={"/DataStructure-cse"}
        name3={"Mechatronics"}
      />
      <DuoBox
        img1={CyberL}
        link1={"/KnowledgeBasedSystems"}
        name1={"Cyber Laws"}
        img2={WebT}
        link2={"/IntelligentComputing"}
        name2={"Web Technology"}
      />
      <h1>Semester 8</h1>
      <Boxes
        img2={RobotAS}
        img3={Biometric}
        img4={MLHealth}
        link1={"/DigitalCircuitsandSystems-ice"}
        name1={"Robot Analysis and control"}
        link2={"/Signal&Systems-ice"}
        name2={"Biometric Technology and security systems"}
        link3={"/DataStructure-cse"}
        name3={"Machine learning for healthcare"}
      />
      <Boxes
        img2={MultiVar}
        img3={MLControl}
        img4={ANN}
        link1={"/DigitalCircuitsandSystems-ice"}
        name1={"Multivariable Control Theory and Applications"}
        link2={"/Signal&Systems-ice"}
        name2={"Machine Learning Applications in Control Systems"}
        link3={"/DataStructure-cse"}
        name3={"Artificial Neural Networks"}
      />
    </>
  );
}
