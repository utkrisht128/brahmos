import React from "react";
import ReactDOM from "react-dom/client";
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import App from "./App";
import Notes from "./components/Notes";
import Me from "./branches/Me";
import Meev from "./branches/Meev";
import Mpae from "./branches/Mpae";
import Mac from "./branches/Mac";
import Itns from "./branches/Itns";
import It from "./branches/It";
import Iiot from "./branches/Iiot";
import Ice from "./branches/Ice";
import Gi from "./branches/Gi";
import Eiot from "./branches/Eiot";
import Ee from "./branches/Ee";
import Ece from "./branches/Ece";
import Ecam from "./branches/Ecam";
import Csds from "./branches/Csds";
import Csda from "./branches/Csda";
import Csai from "./branches/Csai";
import ComputerEng from "./branches/ComputerEng";
import CivilEngineering from "./branches/CivilEngineering";
import BioTechnology from "./branches/BioTechnology";
import Physics from "./branches/me-sub/Physics";
import Maths from "./branches/me-sub/Maths";
import Maths2 from "./branches/me-sub/Maths2";
import DataS from "./branches/cse-sub/DataS";
import Digital from "./branches/cse-sub/Digital";
import Discrete from "./branches/cse-sub/Discrete";
import CAO from "./branches/cse-sub/CAO";
import DAA from "./branches/cse-sub/DAA";
import DBMS from "./branches/cse-sub/DBMS";
import MicroM from "./branches/cse-sub/MicroM";
import WebTech from "./branches/cse-sub/WebTech";
import SS from "./branches/ice-sub/SS"
import EDC from "./branches/ice-sub/EDC"
import ElectricalM from "./branches/ice-sub/ElectricalM"
import DigitalCS from "./branches/ice-sub/DigitalCS"
import Chemistry from "./branches/me-sub/Chemistry";
import EEE from "./branches/me-sub/EEE";
import Cp from "./branches/me-sub/Cp";
import English from "./branches/me-sub/English";
import Bme from "./branches/me-sub/Bme";
import EngMe from "./branches/me-sub/EngME";
import Metallurgy from "./branches/me-sub/Metallurgy";
import Fluid from "./branches/me-sub/Fluid";
import Manufac from "./branches/me-sub/Manufac";
import SOM from "./branches/me-sub/SOM";
import Thermal from "./branches/me-sub/Thermal";
import NMC from "./branches/me-sub/NMC";
import ProbabilityT from "./branches/ece-sub/ProbablityT";
import ACAS from "./branches/ece-sub/ACAS";
import CompGraphics from "./branches/it-sub/CompGraphics";
import AppPhysics from "./branches/mac-sub/AppPhysics";
import Videos from "./Videos";
import Notices from "./Notices"
import reportWebVitals from "./reportWebVitals";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    <BrowserRouter>
    <Routes>
          <Route path="/" element={<App />} />
          <Route path="/home" element={<App />} />
          <Route path="/notes" element={<Notes />} />
          <Route path="/me" element={<Me />} />
          <Route path="/mpae" element={<Mpae />} />
          <Route path="/meev" element={<Meev />} />
          <Route path="/mac" element={<Mac />} />
          <Route path="/itns" element={<Itns />} />
          <Route path="/it" element={<It />} />
          <Route path="/iiot" element={<Iiot />} />
          <Route path="/ice" element={<Ice />} />
          <Route path="/gi" element={<Gi />} />
          <Route path="/eiot" element={<Eiot />} />
          <Route path="/ee" element={<Ee />} />
          <Route path="/ece" element={<Ece />} />
          <Route path="/ecam" element={<Ecam />} />
          <Route path="/csds" element={<Csds />} />
          <Route path="/csda" element={<Csda />} />
          <Route path="/csai" element={<Csai />} />
          <Route path="/Computer-Engineering" element={<ComputerEng />} />
          <Route path="/Civil-Engineering" element={<CivilEngineering />} />
          <Route path="/Bio-Technology" element={<BioTechnology />} />
          <Route path="/Physics-me" element={<Physics />} />
          <Route path="/Maths-me" element={<Maths />} />
          <Route path="/Maths2-me" element={<Maths2 />} />
          <Route path="/Chemistry-me" element={<Chemistry />} />
          <Route path="/EEE-me" element={<EEE />} />
          <Route path="/Cp-me" element={<Cp />} />
          <Route path="/English-me" element={<English />} />
          <Route path="/Bme-me" element={<Bme />} />
          <Route path="/EngMe-me" element={<EngMe />} />
          <Route path="/Metallurgy-me" element={<Metallurgy />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/notices" element={<Notices />} />
          <Route path="/DataStructure-cse" element={<DataS />} />
          <Route path="/ElectronicDevicesandCircuits-ice" element={<EDC />} />
          <Route path="/ElectricalMeasurements-ice" element={<ElectricalM />} />
          <Route path="/Signal&Systems-ice" element={<SS />} />
          <Route path="/AppliedPhysics-mac" element={<AppPhysics />} />
          <Route path="/ComputerGraphics-it" element={<CompGraphics />} />
          <Route path="/FluidMechanicsandMachines-me" element={<Fluid />} />
          <Route path="/NumericalMethodsandComputation-me" element={<NMC />} />
          <Route path="/ManufacturingProcessesI-me" element={<Manufac />} />
          <Route path="/StrengthofMaterials-me" element={<SOM />} />
          <Route path="/ThermalEngineeringI-me" element={<Thermal />} />
          <Route path="/DigitalCircuitsandSystems-ice" element={<DigitalCS />} />
          <Route path="/ProbabilityTheoryandStochasticProcess-ece" element={<ProbabilityT />} />
          <Route path="/ActiveCircuitAnalysisandSynthesis-ece" element={<ACAS />} />
          <Route path="/DiscreteStructure-cse" element={<Discrete />} />
          <Route path="/DigitalLogicalDesign-cse" element={<Digital />} />
          <Route path="/DatabaseManagementSystems-cse" element={<DBMS />} />
          <Route path="/DatabaseManagementSystems-cse" element={<DBMS />} />
          <Route path="/DesignandAnalysisofAlgorithms-cse" element={<DAA />} />
          <Route path="/ComputerArchitectureandOrganization-cse" element={<CAO />} />
          <Route path="/MicroprocessorsandMicrocontrollers-cse" element={<MicroM />} />
          <Route path="/WebTechnology-cse" element={<WebTech />} />
          <Route path="/ElectronicsDevices&Circuits-ice" element={<EDC />} />
        </Routes>
    </BrowserRouter>
);
reportWebVitals();
