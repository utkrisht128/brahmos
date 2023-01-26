import React from "react";
import Navbar from "../components/Navbar";
import Boxes from "../components/Boxes";
import SoloBox from "../components/Solo-box";
import DuoBox from "../components/Duo-box";
import Physics from "../Images/physics.jpg";
import Maths from "../Images/Maths.jpg";
import EEE from "../Images/EEE.jpg";
import Cp from "../Images/cp.jpg";
import Chemistry from "../Images/chemistry.jpg";
import English from "../Images/english.jpg";
import Bme from "../Images/Bme.jpg";
import Metallurgy from "../Images/metallurgy.jpg";
import icon2 from "../Images/icon2.jpg";
import Fluid from "../Images/FluidMechanicsandMachines.jpg";
import NMC from "../Images/NumericalMethodsandComputation.jpg";
import Manufacturing from "../Images/ManufacturingProcesses.jpg";
import SOM from "../Images/Strengthofmaterials.jpg";
import Thermal from "../Images/ThermalEngineering.jpg";
import TOM from "../Images/TheoryofMachines.jpg";
import IndustrialMang from "../Images/IndustrialEngineering&Management.jpg";
import ControlSys from "../Images/ControlSystems.jpg";
import MechanicalD from "../Images/MechanicalDesign.jpg";
import AutoTrans from "../Images/AutomotiveTransmission.jpg";
import Modeling from "../Images/ModelingandSimulation.jpg";
import CompositeM from "../Images/CompositeMaterials.jpg";
import Robotics from "../Images/Robotics.jpg";
import AutoEngg from "../Images/AutomobileEngineering.jpg";
import FEV from "../Images/Fundamentals&OperationsofElectricVehicles.jpg";
import AIME from "../Images/ArtificialIntelligenceinMechanicalEngineering.jpg";
import CADM from "../Images/ComputerAidedDesign&Manufacturing.jpg";
import CAPP from "../Images/ComputerAidedProcessPlanning.jpg";
import Mechatronics from "../Images/Mechatronics.jpg";
import Solar from "../Images/SolarEnergyTechnology.jpg";
import IndustrialWM from "../Images/IndustrialWasteManagement.jpg";
import MicroRobotics from "../Images/Microrobotics.jpg";
import EHV from "../Images/Electric&HybridVehicles.jpg";
import Reverse from "../Images/ReverseEngineering.jpg";
import SmartMR from "../Images/SmartMaterialsinRobotics.jpg";
import ECM from "../Images/EnergyConversion&Management.jpg";
import Laser from "../Images/LaserMaterialsProcessing.jpg";
import FluidP from "../Images/FluidPowerEngineering.jpg";
import Lubrication from "../Images/Industriallubrication&Tribology.jpg";
import EMM from "../Images/EngineeringMetrology&Measurements.jpg";
import AddManufac from "../Images/AdditiveManufacturing.jpg";
import RoboAuto from "../Images/RoboticsandAutomation.jpg";
import Project from "../Images/ProjectManagement.jpg";
import OptTech from "../Images/OptimizationTechniques.jpg";
import "./branchesCss/me.css";
export default function Me() {
  return (
    <>
      <Navbar />
      <h1 id="heading">Mechanical Engineering</h1>
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
      <DuoBox img1={Bme} link1={"/EngMe-me"} name1={"Engineering Mechanics"}
       img2={Metallurgy} link2={"/Metallurgy-me"} name2={"Metals and Metallurgy"}/>
      <h1>Semester 3</h1>
      <Boxes
        img2={Manufacturing}
        img3={Fluid}
        img4={NMC}
        link1={"/ManufacturingProcessesI-me"}
        name1={"Manufacturing Processes - I"}
        link2={"/FluidMechanicsandMachines-me"}
        name2={"Fluid Mechanics and Machines"}
        link3={"/NumericalMethodsandComputation-me"}
        name3={"Numerical Methods and Computation"}
      />
      <DuoBox
        img1={SOM}
        link1={"/StrengthofMaterials-me"}
        name1={"Strength of Materials"}
        img2={Thermal}
        link2={"/ThermalEngineeringI-me"}
        name2={"Thermal Engineering - I"}
      />
      <h1>Semester 4</h1>
      <Boxes
        img2={Thermal}
        img3={Manufacturing}
        img4={TOM}
        link1={"/ThermalEngineeringII-me"}
        name1={"Thermal Engineering-II"}
        link2={"ManufacturingProcessesII-me"}
        name2={"Manufacturing Processes-II"}
        link3={"/ThermalEngineeringI-me"}
        name3={"Theory of Machines"}
      />
      <DuoBox
        img1={IndustrialMang}
        link1={"/KnowledgeBasedSystems"}
        name1={"Industrial Engineering & Management"}
        img2={ControlSys}
        link2={"/IntelligentComputing"}
        name2={"Control Systems"}
      />
      <h1>Semester 5</h1>
      <Boxes
        img2={MechanicalD}
        img3={AutoTrans}
        img4={Modeling}
        link1={"/ManufacturingProcessesI-me"}
        name1={"Mechanical Design"}
        link2={"/StrengthofMaterials-me"}
        name2={"Automotive Transmission"}
        link3={"/ThermalEngineeringI-me"}
        name3={"Modeling and Simulation"}
      />
      <Boxes
        img2={CompositeM}
        img3={Robotics}
        img4={AutoEngg}
        link1={"/ManufacturingProcessesI-me"}
        name1={"Composite Materials"}
        link2={"/StrengthofMaterials-me"}
        name2={"Robotics"}
        link3={"/ThermalEngineeringI-me"}
        name3={"Automobile Engineering"}
      />
      <SoloBox
        img1={FEV}
        link1={"/ElectronicsDevices&Circuits-ice"}
        name1={"Fundamentals & Operations of Electric Vehicles"}
      />
      <h1>Semester 6</h1>
      <Boxes
        img2={AIME}
        img3={CADM}
        img4={Mechatronics}
        link1={"/ManufacturingProcessesI-me"}
        name1={"Artificial Intelligence in Mechanical Engineering"}
        link2={"/StrengthofMaterials-me"}
        name2={"Computer-Aided Design & Manufacturing (CAD & CAM)"}
        link3={"/ThermalEngineeringI-me"}
        name3={"Mechatronics"}
      />
      <h1>Semester 6(Electives)</h1>
      <Boxes
        img2={CAPP}
        img3={Solar}
        img4={IndustrialWM}
        link1={"/ManufacturingProcessesI-me"}
        name1={"Computer Aided Process Planning (CAPP)"}
        link2={"/StrengthofMaterials-me"}
        name2={"Solar Energy Technology"}
        link3={"/ThermalEngineeringI-me"}
        name3={"Industrial Waste Management"}
      />
      <SoloBox
        img1={MicroRobotics}
        link1={"/ElectronicsDevices&Circuits-ice"}
        name1={"Microrobotics"}
      />
      <h1>Semester 7</h1>
      <Boxes
        img2={EHV}
        img3={Reverse}
        img4={SmartMR}
        link1={"/ManufacturingProcessesI-me"}
        name1={"Electric & Hybrid Vehicles"}
        link2={"/StrengthofMaterials-me"}
        name2={"Reverse Engineering"}
        link3={"/ThermalEngineeringI-me"}
        name3={"Smart Materials in Robotics"}
      />
      <DuoBox
        img1={ECM}
        link1={"/KnowledgeBasedSystems"}
        name1={"Energy Conversion & Management"}
        img2={Laser}
        link2={"/IntelligentComputing"}
        name2={"Laser Materials Processing"}
      />
      <h1>Semester 8(Electives)</h1>
      <Boxes
        img2={FluidP}
        img3={EMM}
        img4={Lubrication}
        link1={"/ManufacturingProcessesI-me"}
        name1={"Fluid Power Engineering"}
        link2={"/StrengthofMaterials-me"}
        name2={"Engineering Metrology & Measurements"}
        link3={"/ThermalEngineeringI-me"}
        name3={"Industrial lubrication & Tribology"}
      />
      <Boxes
        img2={AddManufac}
        img3={RoboAuto}
        img4={OptTech}
        link1={"/ManufacturingProcessesI-me"}
        name1={"Additive Manufacturing"}
        link2={"/StrengthofMaterials-me"}
        name2={"Robotics and Automation"}
        link3={"/ThermalEngineeringI-me"}
        name3={"Optimization Techniques"}
      />
      <SoloBox
        img1={Project}
        link1={"/ElectronicsDevices&Circuits-ice"}
        name1={"Project Management"}
      />
    </>
  );
}
