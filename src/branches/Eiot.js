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
import DataS from "../Images/DataStruc.png";
import EDC from "../Images/EDC.jpg";
import ACAS from "../Images/ACAS.jpg";
import SignalS from "../Images/SignalS.png";
import DigitalCS from "../Images/DigitalCircuitsandSystems.jpg";
import MicroElec from "../Images/Microelectronics.jpg";
import ProbabilityT from "../Images/ProbabilityTheoryandStochasticProcess.jpg";
import OptPrinciple from "../Images/OptimizationPrinciplesandTechniques.jpg";
import ControlSys from "../Images/ControlSystems.jpg";
import AnalogDC from "../Images/AnalogandDigitalCommunication.jpg";
import MicroSystemD from "../Images/MicroprocessorBasedSystemDesign.jpg";
import CompNetwork from "../Images/ComputerNetworks.jpg";
import DBMS from "../Images/DatabaseManagementSystem.jpg";
import AI from "../Images/ArtificialIntelligence.jpg";
import Cloud from "../Images/CloudComputing.jpg";
import OperatingSys from "../Images/OperatingSystem.png";
import Software from "../Images/SoftwareEngineering.jpg";
import WebT from "../Images/WebTechnology.jpg";
import ElectroMag from "../Images/Electromagnetics.jpg";
import PSDA from "../Images/PrinciplesofSensorsandDataAcquisition.jpg";
import IotSystemArch from "../Images/IoTSystemArchitecture.jpg";
import IotWorkshop from "../Images/IoTWorkshop.jpg";
import DSPAA from "../Images/DSPAlgorithmandArchitecture.jpg";
import WirelessMC from "../Images/WirelessandMobileCommunication.jpg";
import RF from "../Images/RFandMicrowaveEngineering.jpg";
import MicroControl from "../Images/MicrocontrollerforIoT.jpg";
import MultimediaC from "../Images/MultimediaCommunication.jpg";
import CongnitiveR from "../Images/CognitiveRadio.jpg";
import Speech from "../Images/SpeechandAudioSignalProcessing.jpg";
import ModernAnalog from "../Images/ModernAnalogFilterDesign.jpg";

import "./branchesCss/eiot.css";
export default function Eiot() {
  return (
    <>
      <Navbar />
      <h1 id="heading">Electronics and Communication Engineering(AI and ML)</h1>
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
        img2={ACAS}
        img3={EDC}
        img4={DataS}
        link1={"/ActiveCircuitAnalysisandSynthesis-ece"}
        name1={"Active Circuit Analysis and Synthesis"}
        link2={"/ElectronicsDevices&Circuits-ice"}
        name2={"Electronics Devices & Circuits"}
        link3={"/DataStructure-cse"}
        name3={"Data Structures and Algorithms"}
      />
      <h1 className="sem">Semester 3</h1>
      <Boxes
        img2={OptPrinciple}
        img3={SignalS}
        img4={MicroElec}
        link1={"/OptimizationPrinciplesandTechniques-eiot"}
        name1={"Optimization Principles and Techniques"}
        link2={"/Signal&Systems-ice"}
        name2={"Signals and Systems"}
        link3={"/Microelectronics-eiot"}
        name3={"Microelectronics"}
      />
      <DuoBox
        img1={DigitalCS}
        link1={"/DigitalCircuitsandSystems-eiot"}
        name1={"Digital Circuits and Systems"}
        img2={ProbabilityT}
        link2={"/ProbabilityTheoryandStochasticProcess-ece"}
        name2={"Probability Theory and Stochastic Process"}
      />
      <h1 className="sem">Semester 4</h1>
      <Boxes
        img2={ControlSys}
        img3={ElectroMag}
        img4={AnalogDC}
        link1={"/Controlsystems-eiot"}
        name1={"Control Systems (Lab)"}
        link2={"/Electromagnetics-eiot"}
        name2={"Electromagnetics"}
        link3={"/AnalogandDigitalCommunication-eiot"}
        name3={"Analog and Digital Communication"}
      />
        <DuoBox
        img1={PSDA}
        link1={"/PrinciplesofSensorsandDataAcquisition-eiot"}
        name1={"Principles of Sensors and Data Acquisition"}
        img2={MicroSystemD}
        link2={"/Microprocessorandcomputerarchitecture-eiot"}
        name2={"Microprocessor and Computer Architecture"}
      />
      <h1 className="sem">Semester 5</h1>
      <Boxes
        img2={IotSystemArch}
        img3={DSPAA}
        img4={CompNetwork}
        link1={"/IoTSystemArchitecture-eiot"}
        name1={"IoT System Architecture"}
        link2={"/DSPAlgorithmandArchitecture-eiot"}
        name2={"DSP Algorithm and Architecture"}
        link3={"/ComputerNetworks-eiot"}
        name3={"Computer Networks"}
      />
      <Boxes
        img2={WirelessMC}
        img3={AI}
        img4={DBMS}
        link1={"/WirelessandMobileCommunication-eiot"}
        name1={"Wireless and Mobile Communication"}
        link2={"/ArtificialintelligenceinIoT-eiot"}
        name2={"Artificial Intelligence in IoT"}
        link3={"/DatabaseManagementSystem-cse"}
        name3={"Database Management System"}
      />
      <h1 className="sem">Semester 6</h1>
      <Boxes
        img2={Cloud}
        img3={IotWorkshop}
        img4={RF}
        link1={"/Cloudcomputing-eiot"}
        name1={"Cloud Computing"}
        link2={"/IoTWorkshop-eiot"}
        name2={"IoT Workshop"}
        link3={"/-eiot"}
        name3={"RF and Microwave Engineering"}
      />
        <DuoBox
        img1={MicroControl}
        link1={"/MicrocontrollerforIoT-eiot"}
        name1={"Microcontroller for IoT"}
        img2={OperatingSys}
        link2={"/OperatingSystems-eiot"}
        name2={"Operating Systems"}
      />
      <h1 className="sem">Semester 8</h1>
      <Boxes
        img2={MultimediaC}
        img3={CongnitiveR}
        img4={Speech}
        link1={"/MultimediaCommunication-eiot"}
        name1={"Multimedia Communication"}
        link2={"/CognitiveRadio-eiot"}
        name2={"Cognitive Radio"}
        link3={"/SpeechandAudioSignalProcessing-eiot"}
        name3={"Speech and Audio Signal Processing"}
      />
      <Boxes
        img2={ModernAnalog}
        img3={WebT}
        img4={Software}
        link1={"/ModernAnalogFilterDesign-eiot"}
        name1={"Modern Analog Filter Design"}
        link2={"/WebTechnologies-eiot"}
        name2={"Web Technologies"}
        link3={"/SoftwareEnginnering-eiot"}
        name3={"Software Enginnering"}
      />
    </>
  );
}
