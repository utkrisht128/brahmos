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
import Chemistry from "./branches/me-sub/Chemistry";
import EEE from "./branches/me-sub/EEE";
import Cp from "./branches/me-sub/Cp";
import English from "./branches/me-sub/English";
import Bme from "./branches/me-sub/Bme";
import EngMe from "./branches/me-sub/EngME";
import Metallurgy from "./branches/me-sub/Metallurgy";
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
          <Route path="/Chemistry-me" element={<Chemistry />} />
          <Route path="/EEE-me" element={<EEE />} />
          <Route path="/Cp-me" element={<Cp />} />
          <Route path="/English-me" element={<English />} />
          <Route path="/Bme-me" element={<Bme />} />
          <Route path="/EngMe-me" element={<EngMe />} />
          <Route path="/Metallurgy-me" element={<Metallurgy />} />
          <Route path="/videos" element={<Videos />} />
          <Route path="/notices" element={<Notices />} />
        </Routes>
    </BrowserRouter>
);
reportWebVitals();
