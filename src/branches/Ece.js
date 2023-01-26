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
import icon2 from "../Images/icon2.jpg";
import EDC from "../Images/EDC.jpg";
import ACAS from "../Images/ACAS.jpg";
import SignalS from "../Images/SignalS.png";
import "./branchesCss/ece.css";
import DataS from "../Images/DataStruc.png";
import MSPC from "../Images/MathematicsforSignalProcessingandCommunication.png";
import ProbabilityT from "../Images/ProbabilityTheoryandStochasticProcess.jpg";
import MicroElec from "../Images/Microelectronics.jpg";
import DigitalCS from "../Images/DigitalCircuitsandSystems.jpg";
import DBMS from "../Images/DatabaseManagementSystem.jpg";
import CompNetwork from "../Images/ComputerNetworks.jpg";
import AI from "../Images/ArtificialIntelligence.jpg";
import Cloud from "../Images/CloudComputing.jpg";
import OperatingSys from "../Images/OperatingSystem.png";
import Software from "../Images/SoftwareEngineering.jpg";
import WebT from "../Images/WebTechnology.jpg";
import ElectroMag from "../Images/Electromagnetics.jpg";
import WirelessMC from "../Images/WirelessandMobileCommunication.jpg";
import RF from "../Images/RFandMicrowaveEngineering.jpg";
import MicroControl from "../Images/MicrocontrollerforIoT.jpg";
import MultimediaC from "../Images/MultimediaCommunication.jpg";
import CongnitiveR from "../Images/CognitiveRadio.jpg";
import Speech from "../Images/SpeechandAudioSignalProcessing.jpg";
import ModernAnalog from "../Images/ModernAnalogFilterDesign.jpg";
import DSP from "../Images/DigitalSignalProcessing.jpg";
import COI from "../Images/CommunicationandOpticalInstrumentation.jpg";
import ControlSys from "../Images/ControlSystems.jpg";
import OpticalLaser from "../Images/OpticalFibreandLaserinMedicine.jpg";
import Biometric from "../Images/BiometricTechnologyandsecuritysystems.jpg";
import LVLPVLSI from "../Images/LowVoltageandLowPowerVLSIDesign.jpg";
import VSPA from "../Images/VideoSignalProcessingandApplication.jpg";
import MIMO5G from "../Images/MIMOfor5GCommunication.jpg";
import UnderwaterC from "../Images/UnderwaterCommunication.jpg";
import VLSIT from "../Images/VLSITechnology.jpg";
import Satellite from "../Images/SatelliteCommunication.jpg";
import DigitalIP from "../Images/DigitalImageProcessing.jpg";
import CMOS from "../Images/CMOSDigitalIntegratedCircuits.jpg";
import EmbeddedSys from "../Images/EmbeddedSystemDesign.jpg";
import DigitalComm from "../Images/DigitalCommunication.jpg";
import AnalogComm from "../Images/AnalogIntegratedCircuits.jpg";
import CommEngg from "../Images/CommunicationEngineering.jpg";
import ElecWork from "../Images/ElectronicWorkshop.jpg";

export default function Ece() {
  return (
    <>
      <Navbar />
      <h1 id="heading">Electronics and Communication Engineering</h1>
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
      <h1>Semester 3</h1>
      <Boxes
        img2={MSPC}
        img3={SignalS}
        img4={ProbabilityT}
        link1={"/ElectronicDevicesandCircuits-ice"}
        name1={"Mathematics for Signal Processing and Communication"}
        link2={"/Signal&Systems-ice"}
        name2={"Signals and Systems"}
        link3={"/ProbabilityTheoryandStochasticProcess-ece"}
        name3={"Probability Theory and Stochastic Process"}
      />
      <DuoBox
        img1={MicroElec}
        link1={"/EEE-me"}
        name1={"Microelectronics"}
        img2={DigitalCS}
        link2={"/DigitalCircuitsandSystems-ice"}
        name2={"Digital Circuits and Systems"}
      />
      <h1>Semester 4</h1>
      <Boxes
        img2={ElecWork}
        img3={ElectroMag}
        img4={AI}
        link1={"/DigitalCircuitsandSystems-ice"}
        name1={"Electronic Workshop"}
        link2={"/ProbabilityTheoryandStochasticProcess-ece"}
        name2={"Electromagnetics"}
        link3={"/ActiveCircuitAnalysisandSynthesis-ece"}
        name3={"Machine Learning / Artificial Intelligence"}
      />
      <DuoBox
        img1={MicroControl}
        link1={"/EEE-me"}
        name1={"Microprocessors and Comp. Architecture"}
        img2={CommEngg}
        link2={"/DigitalCircuitsandSystems-ice"}
        name2={"Communication Engineering"}
      />
      <h1>Semester 5</h1>
      <Boxes
        img2={DigitalComm}
        img3={DSP}
        img4={AnalogComm}
        link1={"/DigitalCircuitsandSystems-ice"}
        name1={"Digital Communication"}
        link2={"/ProbabilityTheoryandStochasticProcess-ece"}
        name2={"Digital Signal Processing"}
        link3={"/ActiveCircuitAnalysisandSynthesis-ece"}
        name3={"Analog Integrated Circuits"}
      />
      <SoloBox
        img1={EmbeddedSys}
        link1={"/ElectronicsDevices&Circuits-ice"}
        name1={"Embedded System Design"}
      />
      <h1>Semester 5(Elective)</h1>
      <Boxes
        img2={COI}
        img3={DigitalIP}
        img4={CMOS}
        link1={"/DigitalCircuitsandSystems-ice"}
        name1={"Optical Fiber Communication"}
        link2={"/ProbabilityTheoryandStochasticProcess-ece"}
        name2={"Digital Image Processing"}
        link3={"/ActiveCircuitAnalysisandSynthesis-ece"}
        name3={"CMOS Digital Integrated Circuits"}
      />
      <SoloBox
        img1={DBMS}
        link1={"/ElectronicsDevices&Circuits-ice"}
        name1={"Database Management System"}
      />
      <h1>Semester 6</h1>
      <Boxes
        img2={ControlSys}
        img3={CompNetwork}
        img4={RF}
        link1={"/DigitalCircuitsandSystems-ice"}
        name1={"Control systems"}
        link2={"/ProbabilityTheoryandStochasticProcess-ece"}
        name2={"Computer Networks"}
        link3={"/ActiveCircuitAnalysisandSynthesis-ece"}
        name3={"RF and Microwave Engineering"}
      />
      <h1>Semester 6(Elective)</h1>
      <Boxes
        img2={Satellite}
        img3={OpticalLaser}
        img4={VLSIT}
        link1={"/DigitalCircuitsandSystems-ice"}
        name1={"Satellite Communication"}
        link2={"/ProbabilityTheoryandStochasticProcess-ece"}
        name2={"Optical networks"}
        link3={"/ActiveCircuitAnalysisandSynthesis-ece"}
        name3={"VLSI Technology"}
      />
      <DuoBox
        img1={Biometric}
        link1={"/EEE-me"}
        name1={"Pattern Recognition"}
        img2={OperatingSys}
        link2={"/DigitalCircuitsandSystems-ice"}
        name2={"Operating Systems"}
      />
            <h1>Semester 7</h1>
      <Boxes
        img2={UnderwaterC}
        img3={WirelessMC}
        img4={MIMO5G}
        link1={"/DigitalCircuitsandSystems-ice"}
        name1={"Underwater Communication"}
        link2={"/ProbabilityTheoryandStochasticProcess-ece"}
        name2={"Cellular and Mobile Communication"}
        link3={"/ActiveCircuitAnalysisandSynthesis-ece"}
        name3={"MIMO for 5G Communication"}
      />
      <Boxes
        img2={VSPA}
        img3={LVLPVLSI}
        img4={Cloud}
        link1={"/DigitalCircuitsandSystems-ice"}
        name1={"Video Signal Processing and Application"}
        link2={"/ProbabilityTheoryandStochasticProcess-ece"}
        name2={"Low Voltage and Low Power VLSI Design"}
        link3={"/ActiveCircuitAnalysisandSynthesis-ece"}
        name3={"Cloud Computing"}
      />
      <h1>Semester 8</h1>
      <Boxes
        img2={MultimediaC}
        img3={CongnitiveR}
        img4={Speech}
        link1={"/DigitalCircuitsandSystems-ice"}
        name1={"Multimedia Communication"}
        link2={"/ProbabilityTheoryandStochasticProcess-ece"}
        name2={"Cognitive Radio"}
        link3={"/ActiveCircuitAnalysisandSynthesis-ece"}
        name3={"Speech and Audio Signal Processing"}
      />
      <Boxes
        img2={ModernAnalog}
        img3={WebT}
        img4={Software}
        link1={"/DigitalCircuitsandSystems-ice"}
        name1={"Modern Analog Filter Design"}
        link2={"/ProbabilityTheoryandStochasticProcess-ece"}
        name2={"Web Technologies"}
        link3={"/ActiveCircuitAnalysisandSynthesis-ece"}
        name3={"Software Enginnering"}
      />
    </>
  );
}
