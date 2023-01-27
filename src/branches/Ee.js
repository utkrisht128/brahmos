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
import EngineerAnaly from "../Images/EngineeringAnalysis.jpg";
import ElecMachine from "../Images/ElectricalMachines.jpg";
import DBMS from "../Images/DatabaseManagementSystem.jpg";
import "./branchesCss/ee.css";
import SoftComp from "../Images/SoftComputing.jpg";
import DataWare from "../Images/DataWarehouseandData.jpg";
import FEV from "../Images/Fundamentals&OperationsofElectricVehicles.jpg";
import ControlSys from "../Images/ControlSystems.jpg";
import BigData from "../Images/BigDataAnalytics.jpg";
import ANN from "../Images/ArtificialNeuralNetworks.jpg";
import OperatingSys from "../Images/OperatingSystem.png";
import PWM from "../Images/PWMConvertersandApplications.jpg";
import PSOC from "../Images/PowerSystemOperationandControl.jpg";
import CRE from "../Images/ControlofRenewableEnergySystem.jpg";
import AdvEnergyM from "../Images/AdvancedEnergyManagement.png";
import InstruPowerE from "../Images/InstrumentationforPowerElectronicsandDrives.jpg";
import AdvPowerSys from "../Images/AdvancedPowerSystemAnalysis.jpg";
import PowerSysInstru from "../Images/PowerSystemInstrumentation.jpg";
import Biomass from "../Images/BiomassEnergyandApplication.jpg";
import EnergyStorage from "../Images/EnergyStorageSystem.jpg";
import EnvImpact from "../Images/EnvironmentalImpactofEnergySystems.jpg";
import HVDC from "../Images/HVDC.jpg";
import Switchgear from "../Images/SwitchgearandProtection.jpg";
import PowerSysAnalysis from "../Images/PowerSystemAnalysis.jpg";
import ModellingAnaly from "../Images/Modelling&AnalysisofElectricalMachine.jpg";
import ElectricalEnggM from "../Images/ElectricalEngineeringMaterials.jpg";
import RenewableEnergyS from "../Images/RenewableEnergySources.jpg";
import ElectricDrive from "../Images/ElectricDrives.jpg";
import PowerTrans from "../Images/PowerTransmissionandDistribution.jpg";
import PowerElect from "../Images/PowerElectronics.jpg";
import PowerSystem from "../Images/PowerSystems.jpg";
import MicroSystemD from "../Images/MicroprocessorBasedSystemDesign.jpg";
import SmartGT from "../Images/SmartGridTechnologies.jpg";
import PowerElectronicsCRE from "../Images/PowerElectronicConvertersforRenewableEnergySystems.jpg";
import ElectroMag from "../Images/Electromagnetics.jpg";

export default function Ee() {
  return (
    <>
      <Navbar />
      <h1 id="heading">Electrical Engineering</h1>
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
      <h1 className="sem">Semester 3</h1>
      <Boxes
        img2={Maths}
        img3={DataS}
        img4={EngineerAnaly}
        link1={"/ElectronicsDevices&Circuits-ice"}
        name1={"Maths-3"}
        link2={"/DataStructure-cse"}
        name2={"Data Structure and Algorithms"}
        link3={"/ElectricalMeasurements-ice"}
        name3={"Engineering Analysis & Design C"}
      />
       <DuoBox
        img1={ElecMachine}
        link1={"/KnowledgeBasedSystems"}
        name1={"Electrical Machines-I"}
        img2={DigitalCS}
        link2={"/IntelligentComputing"}
        name2={"Digital Circuit and System"}
      />
      <h1 className="sem">Semester 4</h1>
      <Boxes
        img2={DBMS}
        img3={ElectroMag}
        img4={ElecMachine}
        link1={"/ElectronicsDevices&Circuits-ice"}
        name1={"Data Base Management System"}
        link2={"/Signal&Systems-ice"}
        name2={"Electromagnetic Fields"}
        link3={"/ElectricalMeasurements-ice"}
        name3={"Electrical Machine-II"}
      />
      <DuoBox
        img1={PowerSystem}
        link1={"/KnowledgeBasedSystems"}
        name1={"Power Systems"}
        img2={PowerElect}
        link2={"/IntelligentComputing"}
        name2={"Power Electronics"}
      />
      <h1 className="sem">Semester 5</h1>
      <Boxes
        img2={MicroSystemD}
        img3={ControlSys}
        img4={PowerTrans}
        link1={"/ElectronicsDevices&Circuits-ice"}
        name1={"Microprocessor Based System Design"}
        link2={"/Signal&Systems-ice"}
        name2={"Control Systems"}
        link3={"/ElectricalMeasurements-ice"}
        name3={"Power Transmission and Distribution"}
      />
      <SoloBox
        img1={ElectricDrive}
        link1={"/ElectronicsDevices&Circuits-ice"}
        name1={"Electric Drives"}
      />
        <h1 className="sem">Semester 5(Elective)</h1>
      <Boxes
        img2={RenewableEnergyS}
        img3={ElectricalEnggM}
        img4={ModellingAnaly}
        link1={"/ElectronicsDevices&Circuits-ice"}
        name1={"Renewable Energy Sources"}
        link2={"/Signal&Systems-ice"}
        name2={"Electrical Engineering Materials"}
        link3={"/ElectricalMeasurements-ice"}
        name3={"Modelling & Analysis of Electrical Machine"}
      />
      <h1 className="sem">Semester 6</h1>
      <Boxes
        img2={PowerSysAnalysis}
        img3={Switchgear}
        img4={HVDC}
        link1={"/ElectronicsDevices&Circuits-ice"}
        name1={"Power System Analysis"}
        link2={"/Signal&Systems-ice"}
        name2={"Switchgear and Protection"}
        link3={"/ElectricalMeasurements-ice"}
        name3={"HVDC"}
      />
      <h1 className="sem">Semester 6(Elective)</h1>
      <Boxes
        img2={EnvImpact}
        img3={SmartGT}
        img4={PowerElectronicsCRE}
        link1={"/ElectronicsDevices&Circuits-ice"}
        name1={"Environmental Impact of Energy Systems"}
        link2={"/Signal&Systems-ice"}
        name2={"Smart Grid Technologies"}
        link3={"/ElectricalMeasurements-ice"}
        name3={"Power Electronic Converters for Renewable Energy Systems"}
      />
      <SoloBox
        img1={OperatingSys}
        link1={"/ElectronicsDevices&Circuits-ice"}
        name1={"Operating Systems"}
      />
      <h1 className="sem">Semester 7</h1>
      <Boxes
        img2={EnergyStorage}
        img3={Biomass}
        img4={PowerSysInstru}
        link1={"/ElectronicsDevices&Circuits-ice"}
        name1={"Energy Storage System"}
        link2={"/Signal&Systems-ice"}
        name2={"Biomass Energy and Application"}
        link3={"/ElectricalMeasurements-ice"}
        name3={"Power System Instrumentation"}
      />
      <Boxes
        img2={AdvPowerSys}
        img3={InstruPowerE}
        img4={FEV}
        link1={"/ElectronicsDevices&Circuits-ice"}
        name1={"Advanced Power System Analysis"}
        link2={"/Signal&Systems-ice"}
        name2={"Instrumentation for Power Electronics and Drives"}
        link3={"/ElectricalMeasurements-ice"}
        name3={"Electric Vehicle Technologies"}
      />
      <DuoBox
        img1={SoftComp}
        link1={"/KnowledgeBasedSystems"}
        name1={"Soft Computing"}
        img2={DataWare}
        link2={"/IntelligentComputing"}
        name2={"Data Warehouse and Data Mining"}
      />
      <h1 className="sem">Semester 8</h1>
      <Boxes
        img2={AdvEnergyM}
        img3={CRE}
        img4={PSOC}
        link1={"/ElectronicsDevices&Circuits-ice"}
        name1={"Advanced Energy Management"}
        link2={"/Signal&Systems-ice"}
        name2={"Control of Renewable Energy System"}
        link3={"/ElectricalMeasurements-ice"}
        name3={"Power System Operation and Control"}
      />
      <Boxes
        img2={PWM}
        img3={ANN}
        img4={BigData}
        link1={"/ElectronicsDevices&Circuits-ice"}
        name1={"PWM Converters and Applications"}
        link2={"/Signal&Systems-ice"}
        name2={"Artificial Neural Networks"}
        link3={"/ElectricalMeasurements-ice"}
        name3={"Big Data Science and Tools"}
      />
      
    </>
  );
}
