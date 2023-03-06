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
import MechanicalS from "../Images/MechanicalS.png";
import Metallurgy from "../Images/metallurgy.jpg";
import icon2 from "../Images/icon2.jpg";
import NMC from "../Images/NumericalMethodsandComputation.jpg";
import Manufacturing from "../Images/ManufacturingProcesses.jpg";
import SOM from "../Images/Strengthofmaterials.jpg";
import TOM from "../Images/TheoryofMachines.jpg";
import IndustrialMang from "../Images/IndustrialEngineering&Management.jpg";
import ControlSys from "../Images/ControlSystems.jpg";
import MechanicalD from "../Images/MechanicalDesign.jpg";
import Modeling from "../Images/ModelingandSimulation.jpg";
import CompositeM from "../Images/CompositeMaterials.jpg";
import Robotics from "../Images/Robotics.jpg";
import AIME from "../Images/ArtificialIntelligenceinMechanicalEngineering.jpg";
import CADM from "../Images/ComputerAidedDesign&Manufacturing.jpg";
import CAPP from "../Images/ComputerAidedProcessPlanning.jpg";
import Mechatronics from "../Images/Mechatronics.jpg";
import Solar from "../Images/SolarEnergyTechnology.jpg";
import IndustrialWM from "../Images/IndustrialWasteManagement.jpg";
import MicroRobotics from "../Images/Microrobotics.jpg";
import Reverse from "../Images/ReverseEngineering.jpg";
import Laser from "../Images/LaserMaterialsProcessing.jpg";
import FluidP from "../Images/FluidPowerEngineering.jpg";
import Lubrication from "../Images/Industriallubrication&Tribology.jpg";
import EMM from "../Images/EngineeringMetrology&Measurements.jpg";
import AddManufac from "../Images/AdditiveManufacturing.jpg";
import RoboAuto from "../Images/RoboticsandAutomation.jpg";
import Project from "../Images/ProjectManagement.jpg";
import OptTech from "../Images/OptimizationTechniques.jpg";
import MM from "../Images/MicroprocessorsandMicrocontrollers.jpg";
import AppliedPlas from "../Images/AppliedPlasticity.jpg";
import Tools from "../Images/ToolsDesign.jpg";
import CIM from "../Images/ComputerIntegratedManufacturing.jpg";
import WorkSE from "../Images/WorksStudyandErgonomics.jpg";
import "./branchesCss/mpae.css";
export default function Mpae() {
  return (
    <>
      <Navbar />
      <h1 id="heading">Manufacturing Processes and Automation Engineering</h1>
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
        img2={Bme}
        img3={MechanicalS}
        img4={Metallurgy}
        link1={"/EngMe-me"}
        name1={"Engineering Mechanics"}
        link2={"/MechanicalSciences-mpae"}
        name2={"Mechanical Sciences"}
        link3={"/Metallurgy-me"}
        name3={"Metals and Metallurgy"}
      />
      <h1 className="sem">Semester 3</h1>
      <Boxes
        img2={NMC}
        img3={Manufacturing}
        img4={SOM}
        link1={"/NumericalMethodsandComputation-me"}
        name1={"Numerical Methods and Computation"}
        link2={"/ManufacturingProcessesI-me"}
        name2={"Manufacturing Processes - I"}
        link3={"/StrengthofMaterials-me"}
        name3={"Strength of materials"}
      />
      <SoloBox
        img1={MM}
        link1={"/MicroprocessorsandMicrocontrollers-cse"}
        name1={"Microprocessor and Microcontroller"}
      />
      <h1 className="sem">Semester 4</h1>
      <Boxes
        img2={IndustrialMang}
        img3={ControlSys}
        img4={TOM}
        link1={"/IndustrialEngineering&Management-me"}
        name1={"Industrial Engineering & Management"}
        link2={"/ControlSystems-me"}
        name2={"Control Systems"}
        link3={"/TheoryofMachines-me"}
        name3={"Theory of Machines"}
      />
      <DuoBox
        img1={Manufacturing}
        link1={"/ManufacturingProcessesII-me"}
        name1={"Manufacturing Processes-II"}
        img2={AppliedPlas}
        link2={"/AppliedPlasticity-mpae"}
        name2={"Applied Plasticity"}
      />
      <h1 className="sem">Semester 5</h1>
      <Boxes
        img2={MechanicalD}
        img3={Modeling}
        img4={CompositeM}
        link1={"/MechanicalDesign-me"}
        name1={"Mechanical Design"}
        link2={"/ModelingandSimulation-me"}
        name2={"Modeling and Simulation"}
        link3={"CompositeMaterials-me"}
        name3={"Composite Materials"}
      />
      <Boxes
        img2={CADM}
        img3={Tools}
        img4={Robotics}
        link1={"/CAD&ProductDesign-mpae"}
        name1={"CAD & Product Design"}
        link2={"/ToolDesign-mpae"}
        name2={"Tool Design"}
        link3={"/Robotics-me"}
        name3={"Robotics"}
      />
      <h1 className="sem">Semester 6</h1>
      <Boxes
        img2={CIM}
        img3={Mechatronics}
        img4={AIME}
        link1={"/ComputerIntegratedManufacturing-mpae"}
        name1={"Computer Integrated Manufacturing(CIM)"}
        link2={"/Mechatronics-me"}
        name2={"Mechatronics"}
        link3={"/ArtificialIntelligenceinMechanicalEngineering-me"}
        name3={"Artificial Intelligence in Mechanical Engineering"}
      />
      <h1 className="sem">Semester 6(Electives)</h1>
      <Boxes
        img2={CAPP}
        img3={Solar}
        img4={IndustrialWM}
        link1={"/ComputerAidedProcessPlanning-me"}
        name1={"Computer Aided Process Planning(CAPP)"}
        link2={"/SolarEnergyTechnology-me"}
        name2={"Solar Energy Technology"}
        link3={"/IndustrialWasteManagement-me"}
        name3={"Industrial Waste Management"}
      />
      <SoloBox
        img1={MicroRobotics}
        link1={"/Microrobotics-me"}
        name1={"Microrobotics"}
      />
      <h1 className="sem">Semester 7</h1>
      <Boxes
        img2={Reverse}
        img3={MechanicalD}
        img4={WorkSE}
        link1={"/ReverseEngineering-me"}
        name1={"Reverse Engineering"}
        link2={"/DesignforManufacture-mpae"}
        name2={"Design for Manufacture"}
        link3={"/WorksStudyandErgonomics-mpae"}
        name3={"Works Study and Ergonomics"}
      />
      <SoloBox
        img1={Laser}
        link1={"/LaserMaterialsProcessing-me"}
        name1={"Laser Materials Processing"}
      />
      <h1 className="sem">Semester 8</h1>
      <Boxes
        img2={FluidP}
        img3={EMM}
        img4={Lubrication}
        link1={"/FluidPowerEngineering-me"}
        name1={"Fluid Power Engineering"}
        link2={"/EngineeringMetrology&Measurements-me"}
        name2={"Engineering Metrology & Measurements"}
        link3={"/Industriallubrication&Tribology-me"}
        name3={"Industrial lubrication & Tribology"}
      />
      <Boxes
        img2={AddManufac}
        img3={RoboAuto}
        img4={OptTech}
        link1={"/AdditiveManufacturing-me"}
        name1={"Additive Manufacturing"}
        link2={"/RoboticsandAutomation-me"}
        name2={"Robotics and Automation"}
        link3={"/OptimizationTechniques-me"}
        name3={"Optimization Techniques"}
      />
      <SoloBox
        img1={Project}
        link1={"/ProjectManagement-me"}
        name1={"Project Management"}
      />
    </>
  );
}
