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
import Physics from "./branches/me-sub/Semester2/Physics";
import Maths from "./branches/me-sub/Semester1/Maths";
import Maths2 from "./branches/me-sub/Semester2/Maths2";
import DataS from "./branches/cse-sub/Semester2/DataS";
import Digital from "./branches/cse-sub/Semester3/Digital";
import Discrete from "./branches/cse-sub/Semester2/Discrete";
import CAO from "./branches/cse-sub/Semester3/CAO";
import DAA from "./branches/cse-sub/Semester3/DAA";
import DBMS from "./branches/cse-sub/Semester3/DBMS";
import MicroM from "./branches/cse-sub/Semester3/MicroM";
import WebTech from "./branches/cse-sub/Semester3/WebTech";
import SS from "./branches/ice-sub/Semester2/SS"
import EDC from "./branches/ice-sub/Semester2/EDC"
import ElectricalM from "./branches/ice-sub/Semester2/ElectricalM"
import DigitalCS from "./branches/ice-sub/Semester3/DigitalCS"
import Chemistry from "./branches/me-sub/Semester1/Chemistry";
import EEE from "./branches/me-sub/Semester1/EEE";
import Cp from "./branches/me-sub/Semester2/Cp";
import English from "./branches/me-sub/Semester1/English";
import Bme from "./branches/me-sub/Semester1/Bme";
import EngMe from "./branches/me-sub/Semester2/EngME";
import Metallurgy from "./branches/me-sub/Semester2/Metallurgy";
import Fluid from "./branches/me-sub/Semester3/Fluid";
import Manufac from "./branches/me-sub/Semester3/Manufac";
import SOM from "./branches/me-sub/Semester3/SOM";
import Thermal from "./branches/me-sub/Semester3/Thermal";
import NMC_me from "./branches/me-sub/Semester3/NMC";
import ProbabilityT from "./branches/ece-sub/Semester3/ProbablityT";
import ACAS from "./branches/ece-sub/Semester2/ACAS";
import CompGraphics from "./branches/it-sub/Semester3/CompGraphics";
import AppPhysics from "./branches/mac-sub/Semester2/AppPhysics";
import ThermalII from "./branches/me-sub/Semester4/Thermal2";
import ControlSys from "./branches/me-sub/Semester4/ControlSys";
import IndustrialMang from "./branches/me-sub/Semester4/IEM";
import ManufacII from "./branches/me-sub/Semester4/Manufac2";
import TOM from "./branches/me-sub/Semester4/TOM";
import AutoEngg from "./branches/me-sub/Semester5/AutomobEng";
import AutoTrans from "./branches/me-sub/Semester5/Automotive";
import CompositeM from "./branches/me-sub/Semester5/CompositeM";
import FEV from "./branches/me-sub/Semester5/FOEV";
import MechanicalD from "./branches/me-sub/Semester5/MechD";
import Modeling from "./branches/me-sub/Semester5/Modeling";
import Robotics from "./branches/me-sub/Semester5/Robo";
import AIME from "./branches/me-sub/Semester6/AIME";
import CADM from "./branches/me-sub/Semester6/CADM";
import CAPP from "./branches/me-sub/Semester6/CAPP";
import IWM from "./branches/me-sub/Semester6/IWM";
import Mechatron from "./branches/me-sub/Semester6/Mechatron";
import MicroRob from "./branches/me-sub/Semester6/MicroRob";
import SET from "./branches/me-sub/Semester6/SET";
import ElecHybridVech from "./branches/me-sub/Semester7/ElecHybridVech";
import EnergyConv from "./branches/me-sub/Semester7/EnergyConv";
import LaserMP from "./branches/me-sub/Semester7/LaserMP";
import Reverse from "./branches/me-sub/Semester7/Reverse";
import SmartM from "./branches/me-sub/Semester7/SmartM";
import AdditiveM from "./branches/me-sub/Semester8/AdditiveM";
import EMM from "./branches/me-sub/Semester8/EMM";
import FluidPowerEng from "./branches/me-sub/Semester8/FluidPowerEng";
import ILT from "./branches/me-sub/Semester8/ILT";
import OptimizationTech from "./branches/me-sub/Semester8/OptimizationTech";
import ProjectMang from "./branches/me-sub/Semester8/ProjectMang";
import RoboAuto from "./branches/me-sub/Semester8/RoboAuto";
import DesignM from "./branches/mpae-sub/Semester7/DesignM";
import WSE from "./branches/mpae-sub/Semester7/WSE";
import CIM from "./branches/mpae-sub/Semester6/CIM";
import CADPD from "./branches/mpae-sub/Semester5/CADPD";
import ToolD from "./branches/mpae-sub/Semester5/ToolD";
import Appliedplas from "./branches/mpae-sub/Semester4/Appliedplas";
import EngMath from "./branches/mac-sub/Semester3/EngMath";
import MathStats from "./branches/mac-sub/Semester3/MathStats";
import ALA from "./branches/mac-sub/Semester4/ALA";
import OperatingSys from "./branches/mac-sub/Semester4/OperatingSys";
import RealAnal from "./branches/mac-sub/Semester4/RealAnal";
import ScienComp from "./branches/mac-sub/Semester4/ScienComp";
import TAFL from "./branches/mac-sub/Semester4/TAFL";
import CompNet from "./branches/mac-sub/Semester5/CompNet";
import FinanEngg from "./branches/mac-sub/Semester5/FinanEngg";
import OperatRes from "./branches/mac-sub/Semester5/OperatRes";
import Optimization from "./branches/mac-sub/Semester5/Optimization";
import SoftComp from "./branches/mac-sub/Semester5/SoftComp";
import SoftwareEng from "./branches/mac-sub/Semester5/SoftwareEng";
import BDA from "./branches/mac-sub/Semester6/BDA";
import CompGraph from "./branches/mac-sub/Semester6/CompGraph";
import CompTool from "./branches/mac-sub/Semester6/CompTool";
import ML from "./branches/mac-sub/Semester6/ML";
import NLP from "./branches/mac-sub/Semester6/NLP";
import Specialfunc from "./branches/mac-sub/Semester6/Specialfunc";
import ANA from "./branches/mac-sub/Semester7/ANA";
import CryptoTech from "./branches/mac-sub/Semester7/CryptoTech";
import GraphTA from "./branches/mac-sub/Semester7/GraphTA.";
import Simulation from "./branches/mac-sub/Semester7/Simulation";
import AdvaAlgo from "./branches/mac-sub/Semester8/AdvaAlgo";
import IntelliComp from "./branches/mac-sub/Semester8/IntelliComp";
import KnowledgeBS from "./branches/mac-sub/Semester8/KnowledgeBS";
import PDE from "./branches/mac-sub/Semester8/PDE";
import Queing from "./branches/mac-sub/Semester8/Queing";
import OPT_Itns from "./branches/itns-sub/Semester3/OPT";
import AnalogDC_Itns from "./branches/itns-sub/Semester4/AnalogDC";
import CompNet_Itns from "./branches/itns-sub/Semester4/CompNet";
import DAA_Itns from "./branches/itns-sub/Semester4/DAA";
import OperatingSys_Itns from "./branches/itns-sub/Semester4/OperatingSys";
import SoftEng_Itns from "./branches/itns-sub/Semester4/SoftEng";
import AI_Itns from "./branches/itns-sub/Semester5/AI";
import CloudComp_Itns from "./branches/itns-sub/Semester5/CloudComp";
import IDS_Itns from "./branches/itns-sub/Semester5/IDS";
import MobComp_Itns from "./branches/itns-sub/Semester5/MobComp";
import NTC_Itns from "./branches/itns-sub/Semester5/NTC";
import TOC_Itns from "./branches/itns-sub/Semester5/TOC";
import CTD_Itns from "./branches/itns-sub/Semester6/CTD";
import DigitalFor_Itns from "./branches/itns-sub/Semester6/DigitalFor";
import FEC_Itns from "./branches/itns-sub/Semester6/FEC";
import InfoSec_Itns from "./branches/itns-sub/Semester6/InfoSec";
import NND_Itns from "./branches/itns-sub/Semester6/NND";
import CDS_Itns from "./branches/itns-sub/Semester8/CDS";
import CyberSec_Itns from "./branches/itns-sub/Semester8/CyberSec";
import DRN_Itns from "./branches/itns-sub/Semester8/DRN";
import HadSpark_Itns from "./branches/itns-sub/Semester8/HadSpark";
import CompGraphics_It from "./branches/it-sub/Semester3/CompGraphics";
import OptPrinciple_It from "./branches/it-sub/Semester3/OptPrinciple";
import ADC_It from "./branches/it-sub/Semester4/ADC";
import CompNet_It from "./branches/it-sub/Semester4/CompNet";
import DAA_It from "./branches/it-sub/Semester4/DAA";
import OperatingSys_It from "./branches/it-sub/Semester4/OperatingSys";
import SoftEngg_It from "./branches/it-sub/Semester4/SoftEngg";
import AI_It from "./branches/it-sub/Semester5/AI";
import CloudComp_It from "./branches/it-sub/Semester5/CloudComp";
import DWD_It from "./branches/it-sub/Semester5/DWD";
import MobComp_It from "./branches/it-sub/Semester5/MobComp";
import NTC_It from "./branches/it-sub/Semester5/NTC";
import SoftComp_It from "./branches/it-sub/Semester5/SoftComp";
import TOC_It from "./branches/it-sub/Semester5/TOC";
import ANN_It from "./branches/it-sub/Semester6/ANN";
import BDST_It from "./branches/it-sub/Semester6/BDST";
import CTD_It from "./branches/it-sub/Semester6/CTD";
import MLDA_It from "./branches/it-sub/Semester6/MLDA";
import NND_It from "./branches/it-sub/Semester6/NND";
import WebT_It from "./branches/it-sub/Semester6/WebT";
import CyberL_It from "./branches/it-sub/Semester7/CyberL";
import DistributedS_It from "./branches/it-sub/Semester7/DistributedS";
import MachVision_It from "./branches/it-sub/Semester7/MachVision";
import PARS_It from "./branches/it-sub/Semester7/PARS";
import SNMA_It from "./branches/it-sub/Semester7/SNMA";
import CDS_It from "./branches/it-sub/Semester8/CDS";
import CyberSec_It from "./branches/it-sub/Semester8/CyberSec";
import DRN_It from "./branches/it-sub/Semester8/DRN";
import HadSpark_It from "./branches/it-sub/Semester8/HadSpark";
import DigitalCS_Ice from "./branches/ice-sub/Semester3/DigitalCS";
import ElecInstrumentation_Ice from "./branches/ice-sub/Semester3/ElecInstrumentation";
import Maths3_Ice from "./branches/ice-sub/Semester3/Maths3";
import PowerApp_Ice from "./branches/ice-sub/Semester3/PowerApp";
import ControlSys1_Ice from "./branches/ice-sub/Semester4/ControlSys1";
import EAD_Ice from "./branches/ice-sub/Semester4/EAD";
import MBSD_Ice from "./branches/ice-sub/Semester4/MBSD";
import SenssorT_Ice from "./branches/ice-sub/Semester4/SenssorT";
import BioMedIns_Ice from "./branches/ice-sub/Semester5/BioMedIns";
import CommOI_Ice from "./branches/ice-sub/Semester5/CommOI";
import DisTimeSys_Ice from "./branches/ice-sub/Semester5/DisTimeSys";
import MCT_Ice from "./branches/ice-sub/Semester5/MCT";
import PDC_Ice from "./branches/ice-sub/Semester5/PDC";
import Robo_Ice from "./branches/ice-sub/Semester5/Robo";
import SmartSensor_Ice from "./branches/ice-sub/Semester5/SmartSensor";
import BSP_Ice from "./branches/ice-sub/Semester6/BSP";
import CNR_Ice from "./branches/ice-sub/Semester6/CNR";
import DSP_Ice from "./branches/ice-sub/Semester6/DSP";
import IndustrialInstru_Ice from "./branches/ice-sub/Semester6/IndustrialInstru";
import IntelliControl_Ice from "./branches/ice-sub/Semester6/IntelliControl";
import OperatingSys_Ice from "./branches/ice-sub/Semester6/OperatingSys";
import PowerElecDrive_Ice from "./branches/ice-sub/Semester6/PowerElecDrive";
import SMR_Ice from "./branches/ice-sub/Semester6/SMR";
import BioMedImg_Ice from "./branches/ice-sub/Semester7/BioMedImg";
import COT_Ice from "./branches/ice-sub/Semester7/COT";
import CyberLaw_Ice from "./branches/ice-sub/Semester7/CyberLaw";
import IntelliAutoSys_Ice from "./branches/ice-sub/Semester7/IntelliAutoSys";
import Mechtron_Ice from "./branches/ice-sub/Semester7/Mechtron";
import OpticalFL_Ice from "./branches/ice-sub/Semester7/OpticalFL";
import RoboVision_Ice from "./branches/ice-sub/Semester7/RoboVision";
import WebT_Ice from "./branches/ice-sub/Semester7/WebT";
import ANN_Ice from "./branches/ice-sub/Semester8/ANN";
import BioTSS_Ice from "./branches/ice-sub/Semester8/BioTSS";
import MCTA_Ice from "./branches/ice-sub/Semester8/MCTA";
import MLACS_Ice from "./branches/ice-sub/Semester8/MLACS";
import MLH_Ice from "./branches/ice-sub/Semester8/MLH";
import RAC_Ice from "./branches/ice-sub/Semester8/RAC";
import DigitalCS_Eiot from "./branches/eiot-sub/Semester3/DigitalCS";
import MicroElec_Eiot from "./branches/eiot-sub/Semester3/MicroElec";
import OptPrinciple_Eiot from "./branches/eiot-sub/Semester3/OptPrinciple";
import ADC_Eiot from "./branches/eiot-sub/Semester4/ADC";
import ControlSys_Eiot from "./branches/eiot-sub/Semester4/ControlSys(lab)";
import ElecMag_Eiot from "./branches/eiot-sub/Semester4/ElecMag";
import MCA_Eiot from "./branches/eiot-sub/Semester4/MCA";
import PSDA_Eiot from "./branches/eiot-sub/Semester4/PSDA";
import AI_Eiot from "./branches/eiot-sub/Semester5/AI";
import CompNet_Eiot from "./branches/eiot-sub/Semester5/CompNet";
import DSPAA_Eiot from "./branches/eiot-sub/Semester5/DSPAA";
import IOTSA_Eiot from "./branches/eiot-sub/Semester5/IOTSA";
import WirelessMC_Eiot from "./branches/eiot-sub/Semester5/WirelessMC";
import CloudComp_Eiot from "./branches/eiot-sub/Semester6/CloudComp";
import IoTWorkshop_Eiot from "./branches/eiot-sub/Semester6/IoTWorkshop";
import MicroCIoT_Eiot from "./branches/eiot-sub/Semester6/MicroCIoT";
import OperatingSys_Eiot from "./branches/eiot-sub/Semester6/OperatingSys";
import RFMicroEngg_Eiot from "./branches/eiot-sub/Semester6/RFMicroEngg";
import CognitiveRadio_Eiot from "./branches/eiot-sub/Semester8/CognitiveRadio";
import MAFD_Eiot from "./branches/eiot-sub/Semester8/MAFD";
import MultimediaComm_Eiot from "./branches/eiot-sub/Semester8/MultimediaComm";
import SASP_Eiot from "./branches/eiot-sub/Semester8/SASP";
import SoftEngg_Eiot from "./branches/eiot-sub/Semester8/SoftEngg";
import WebT_Eiot from "./branches/eiot-sub/Semester8/WebT";
import DigitalCS_Ee from "./branches/ee-sub/Semester3/DigitalCS";
import ElecMachine_Ee from "./branches/ee-sub/Semester3/ElecMachine";
import EngineerAnaly_Ee from "./branches/ee-sub/Semester3/EngineerAnaly";
import Maths3_Ee from "./branches/ee-sub/Semester3/Maths3";
import ElectricalMach2_Ee from "./branches/ee-sub/Semester4/ElectricalMach2";
import ElectroField_Ee from "./branches/ee-sub/Semester4/ElectroField";
import PowerElec_Ee from "./branches/ee-sub/Semester4/PowerElec";
import PowerSys_Ee from "./branches/ee-sub/Semester4/PowerSys";
import ControlSys_Ee from "./branches/ee-sub/Semester5/ControlSys";
import EEM_Ee from "./branches/ee-sub/Semester5/EEM";
import ElecDrive_Ee from "./branches/ee-sub/Semester5/ElecDrive";
import MAEM_Ee from "./branches/ee-sub/Semester5/MAEM";
import MBSD_Ee from "./branches/ee-sub/Semester5/MBSD";
import PowerTD_Ee from "./branches/ee-sub/Semester5/PowerTD";
import RES_Ee from "./branches/ee-sub/Semester5/RES";
import EIES_Ee from "./branches/ee-sub/Semester6/EIES";
import HVDC_Ee from "./branches/ee-sub/Semester6/HVDC";
import OperatingSys_Ee from "./branches/ee-sub/Semester6/OperatingSys";
import PECRES_Ee from "./branches/ee-sub/Semester6/PECRES";
import PSA_Ee from "./branches/ee-sub/Semester6/PSA";
import SGT_Ee from "./branches/ee-sub/Semester6/SGT";
import SwitchGP_Ee from "./branches/ee-sub/Semester6/SwitchGP";
import APSA_Ee from "./branches/ee-sub/Semester7/APSA";
import BEA_Ee from "./branches/ee-sub/Semester7/BEA";
import DWDM_Ee from "./branches/ee-sub/Semester7/DWDM";
import ESS_Ee from "./branches/ee-sub/Semester7/ESS";
import ElecVT_Ee from "./branches/ee-sub/Semester7/ElecVT";
import IPED_Ee from "./branches/ee-sub/Semester7/IPED";
import PSI_Ee from "./branches/ee-sub/Semester7/PSI";
import SoftComp_Ee from "./branches/ee-sub/Semester7/SoftComp";
import AEM_Ee from "./branches/ee-sub/Semester8/AEM";
import ANN_Ee from "./branches/ee-sub/Semester8/ANN";
import BDST_Ee from "./branches/ee-sub/Semester8/BDST";
import CRES_Ee from "./branches/ee-sub/Semester8/CRES";
import PSOC_Ee from "./branches/ee-sub/Semester8/PSOC";
import PWMCA_Ee from "./branches/ee-sub/Semester8/PWMCA";
import DigitalCS_Ece from "./branches/ece-sub/Semester3/DigitalCS";
import MSPC_Ece from "./branches/ece-sub/Semester3/MSPC";
import MicroElec_Ece from "./branches/ece-sub/Semester3/MicroElec";
import CommEngg_Ece from "./branches/ece-sub/Semester4/CommEngg";
import ElecMag_Ece from "./branches/ece-sub/Semester4/ElecMag";
import ElecWorkshop_Ece from "./branches/ece-sub/Semester4/ElecWorkshop";
import MCA_Ece from "./branches/ece-sub/Semester4/MCA";
import MLAI_Ece from "./branches/ece-sub/Semester4/MLAI";
import AIC_Ece from "./branches/ece-sub/Semester5/AIC";
import CMOS_Ece from "./branches/ece-sub/Semester5/CMOS";
import DIP_Ece from "./branches/ece-sub/Semester5/DIP";
import DSP_Ece from "./branches/ece-sub/Semester5/DSP";
import DigitalComm_Ece from "./branches/ece-sub/Semester5/DigitalComm";
import ESD_Ece from "./branches/ece-sub/Semester5/ESD";
import OFC_Ece from "./branches/ece-sub/Semester5/OFC";
import CompNet_Ece from "./branches/ece-sub/Semester6/CompNet";
import ControlSys_Ece from "./branches/ece-sub/Semester6/ControlSys";
import OperatingSys_Ece from "./branches/ece-sub/Semester6/OperatingSys";
import OpticalNet_Ece from "./branches/ece-sub/Semester6/OpticalNet";
import PatternRecog_Ece from "./branches/ece-sub/Semester6/PatternRecog";
import RFMicroEngg_Ece from "./branches/ece-sub/Semester6/RFMicroEngg";
import SatComm_Ece from "./branches/ece-sub/Semester6/SatComm";
import VLSI_Ece from "./branches/ece-sub/Semester6/VLSI";
import CellMobComm_Ece from "./branches/ece-sub/Semester7/CellMobComm";
import CloudComp_Ece from "./branches/ece-sub/Semester7/CloudComp";
import LVLP_Ece from "./branches/ece-sub/Semester7/LVLP";
import MIMO_Ece from "./branches/ece-sub/Semester7/MIMO";
import UnderComm_Ece from "./branches/ece-sub/Semester7/UnderComm";
import VSPA_Ece from "./branches/ece-sub/Semester7/VSPA";
import MultiComm_ece from "./branches/ece-sub/Semester8/MultiComm";
import CognitiveR_Ece from "./branches/ece-sub/Semester8/CognitiveR";
import ModernAFD_Ece from "./branches/ece-sub/Semester8/ModernAFD";
import SASP_Ece from "./branches/ece-sub/Semester8/SASP";
import SoftEngg_Ece from "./branches/ece-sub/Semester8/SoftEngg";
import WebT_Ece from "./branches/ece-sub/Semester8/WebT";
import BDA_Csds from "./branches/csds-sub/Semester4/BDA";
import DHVT_Csds from "./branches/csds-sub/Semester5/DHVT";
import DataMin_Csds from "./branches/csds-sub/Semester5/DataMin";
import DistributedComp_Csds from "./branches/csds-sub/Semester5/DistributedComp";
import MultiAnal_Csds from "./branches/csds-sub/Semester5/MultiAnal";
import PCC_Csds from "./branches/csds-sub/Semester5/PCC";
import BuisnessIntelli_Csds from "./branches/csds-sub/Semester6/BuisnessIntelli";
import DST_Csds from "./branches/csds-sub/Semester6/DST";
import DistrbutedData_Csds from "./branches/csds-sub/Semester6/DistrbutedData";
import NLP_Csds from "./branches/csds-sub/Semester6/NLP";
import QPO_Csds from "./branches/csds-sub/Semester6/QPO";
import SMA_Csds from "./branches/csds-sub/Semester6/SMA";
import AI_Csai from "./branches/csai-sub/Semester4/AI";
import CryptoTech_Csai from "./branches/csai-sub/Semester5/CryptoTech";
import DistributedComp_Csai from "./branches/csai-sub/Semester5/DistributedComp";
import GTA_Csai from "./branches/csai-sub/Semester5/GTA.";
import ML_Csai from "./branches/csai-sub/Semester5/ML";
import PCC_Csai from "./branches/csai-sub/Semester5/PCC";
import AIHardT_Csai from "./branches/csai-sub/Semester6/AIHardT";
import CompVision_Csai from "./branches/csai-sub/Semester6/CompVision";
import DPS_Csai from "./branches/csai-sub/Semester6/DPS";
import DeepLearning_Csai from "./branches/csai-sub/Semester6/DeepLearning";
import HPC_Csai from "./branches/csai-sub/Semester6/HPC";
import NLP_Csai from "./branches/csai-sub/Semester6/NLP";
import AR_Csai from "./branches/csai-sub/Semester7/AR";
import HCI_Csai from "./branches/csai-sub/Semester7/HCI";
import OTML_Csai from "./branches/csai-sub/Semester7/OTML";
import PPAI_Csai from "./branches/csai-sub/Semester7/PPAI";
import AdvAlgo_Csai from "./branches/csai-sub/Semester8/AdvAlgo";
import CTSD_Csai from "./branches/csai-sub/Semester8/CTSD";
import IntelliComp_Csai from "./branches/csai-sub/Semester8/IntelliComp";
import KBS_Csai from "./branches/csai-sub/Semester8/KBS";
import ResponsibleAI_Csai from "./branches/csai-sub/Semester8/ResponsibleAI";
import DataComm_Cse from "./branches/cse-sub/Semester4/DataComm";
import OperatingSys_Cse from "./branches/cse-sub/Semester4/OperatingSys";
import PSP_Cse from "./branches/cse-sub/Semester4/PSP";
import SoftEngg_Cse from "./branches/cse-sub/Semester4/SoftEngg";
import TAFL_Cse from "./branches/cse-sub/Semester4/TAFL";
import CloudComp_Cse from "./branches/cse-sub/Semester5/CloudComp";
import CyptoT_Cse from "./branches/cse-sub/Semester5/CyptoT";
import DataMin_Cse from "./branches/cse-sub/Semester5/DataMin";
import ML_Cse from "./branches/cse-sub/Semester5/ML";
import OOAD_Cse from "./branches/cse-sub/Semester5/OOAD";
import PCC_Cse from "./branches/cse-sub/Semester5/PCC";
import CompHardSoft_Cse from "./branches/cse-sub/Semester6/CompHardSoft";
import CompVision_Cse from "./branches/cse-sub/Semester6/CompVision";
import DPS_Cse from "./branches/cse-sub/Semester6/DPS";
import HPC_Cse from "./branches/cse-sub/Semester6/HPC";
import IOT_Cse from "./branches/cse-sub/Semester6/IOT";
import NLP_Cse from "./branches/cse-sub/Semester6/NLP";
import CompGraphics_Cse from "./branches/cse-sub/Semester7/CompGraphics";
import HCI_Cse from "./branches/cse-sub/Semester7/HCI";
import ITInfraMang_Cse from "./branches/cse-sub/Semester7/ITInfraMang";
import KBS_Cse from "./branches/cse-sub/Semester7/KBS";
import MSF_Cse from "./branches/cse-sub/Semester7/MSF";
import SPM_Cse from "./branches/cse-sub/Semester7/SPM";
import AR_Cse from "./branches/cse-sub/Semester8/AR";
import CTSD_Cse from "./branches/cse-sub/Semester8/CTSD";
import PPAI_Cse from "./branches/cse-sub/Semester8/PPAI";
import SOA_Cse from "./branches/cse-sub/Semester8/SOA";


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
          <Route path="/NumericalMethodsandComputation-me" element={<NMC_me />} />
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
          <Route path="/ThermalEngineeringII-me" element={<ThermalII />} />
          <Route path="/ManufacturingProcessesII-me" element={<ManufacII />} />
          <Route path="/TheoryofMachines-me" element={<TOM />} />
          <Route path="/IndustrialEngineering&Management-me" element={<IndustrialMang />} />
          <Route path="/ControlSystems-me" element={<ControlSys />} />
          <Route path="/MechanicalDesign-me" element={<MechanicalD />} />
          <Route path="/AutomotiveTransmission-me" element={<AutoTrans />} />
          <Route path="/ModelingandSimulation-me" element={<Modeling />} />
          <Route path="/CompositeMaterials-me" element={<CompositeM />} />
          <Route path="/Robotics-me" element={<Robotics />} />
          <Route path="/AutomobileEngineering-me" element={<AutoEngg />} />
          <Route path="/Fundamentals&OperationsofEV-me" element={<FEV />} />
          <Route path="/ArtificialIntelligenceinMechanicalEngineering-me" element={<AIME />} />
          <Route path="/ComputerAidedDesign&Manufacturing-me" element={<CADM />} />
          <Route path="/Mechatronics-me" element={<Mechatron />} />
          <Route path="/ComputerAidedProcessPlanning-me" element={<CAPP />} />
          <Route path="/SolarEnergyTechnology-me" element={<SET />} />
          <Route path="/IndustrialWasteManagement-me" element={<IWM />} />
          <Route path="/Microrobotics-me" element={<MicroRob />} />
          <Route path="/Electric&HybridVehicles-me" element={<ElecHybridVech />} />
          <Route path="/ReverseEngineering-me" element={<Reverse />} />
          <Route path="/SmartMaterialsinRobotics-me" element={<SmartM />} />
          <Route path="/EnergyConversion&Management-me" element={<EnergyConv />} />
          <Route path="/LaserMaterialsProcessing-me" element={<LaserMP />} />
          <Route path="/FluidPowerEngineering-me" element={<FluidPowerEng />} />
          <Route path="/EngineeringMetrology&Measurements-me" element={<EMM />} />
          <Route path="/Industriallubrication&Tribology-me" element={<ILT />} />
          <Route path="/AdditiveManufacturing-me" element={<AdditiveM />} />
          <Route path="/RoboticsandAutomation-me" element={<RoboAuto />} />
          <Route path="/OptimizationTechniques-me" element={<OptimizationTech />} />
          <Route path="/ProjectManagement-me" element={<ProjectMang />} />
          <Route path="/AppliedPlasticity-mpae" element={<Appliedplas />} />
          <Route path="/CAD&ProductDesign-mpae" element={<CADPD />} />
          <Route path="/ToolDesign-mpae" element={<ToolD />} />
          <Route path="/ComputerIntegratedManufacturing-mpae" element={<CIM />} />
          <Route path="/DesignforManufacture-mpae" element={<DesignM />} />
          <Route path="/WorksStudyandErgonomics-mpae" element={<WSE />} />
          <Route path="/EngineeringMathematics-mac" element={<EngMath />} />
          <Route path="/MathematicalStatistics-mac" element={<MathStats />} />
          <Route path="/TheoryofAutomata&FormalLanguages-mac" element={<TAFL />} />
          <Route path="/ScientificComputing-mac" element={<ScienComp />} />
          <Route path="/RealAnalysis-mac" element={<RealAnal />} />
          <Route path="/AppliedLinearAlgebra-mac" element={<ALA />} />
          <Route path="/SoftwareEngineering-mac" element={<SoftwareEng />} />
          <Route path="/ComputerNetworks-mac" element={<CompNet />} />
          <Route path="/SoftComputing-mac" element={<SoftComp />} />
          <Route path="/FinancialEngineering-mac" element={<FinanEngg />} />
          <Route path="/Optimization-mac" element={<Optimization />} />
          <Route path="/OperationalResearch-mac" element={<OperatRes />} />
          <Route path="/BigDataAnalytics-mac" element={<BDA />} />
          <Route path="/ComputingTools-mac" element={<CompTool />} />
          <Route path="/MachineLearning-mac" element={<ML />} />
          <Route path="/ComputerGraphics-mac" element={<CompGraph />} />
          <Route path="/SpecialFunctions-mac" element={<Specialfunc />} />
          <Route path="/NaturalLanguageProcessing-mac" element={<NLP />} />
          <Route path="/Cryptography-mac" element={<CryptoTech />} />
          <Route path="/Simulation-mac" element={<Simulation />} />
          <Route path="/GraphTheoryandAlgorithm-mac" element={<GraphTA />} />
          <Route path="/AdvanceNumericalAnalysis-mac" element={<ANA />} />
          <Route path="/Advancedalgorithm-mac" element={<AdvaAlgo />} />
          <Route path="/PartialDifferentialEquations-mac" element={<PDE />} />
          <Route path="/QueuingTheoryandApplications-mac" element={<Queing />} />
          <Route path="/KnowledgeBasedSystems-mac" element={<KnowledgeBS />} />
          <Route path="/IntelligentComputing-mac" element={<IntelliComp />} />
          <Route path="/OptimizationPrinciplesandTechniques-itns" element={<OPT_Itns />} />
          <Route path="/Operatingsystem-itns" element={<OperatingSys_Itns />} />
          <Route path="/DesignandAnalysisofAlgorithm-itns" element={<DAA_Itns />} />
          <Route path="/SoftwareEngineering-itns" element={<SoftEng_Itns />} />
          <Route path="/ComputerNetworks-itns" element={<CompNet_Itns />} />
          <Route path="/AnalogandDigitalCommunication-itns" element={<AnalogDC_Itns />} />
          <Route path="/TheoryofComputation-itns" element={<TOC_Itns />} />
          <Route path="/ArtificialIntelligence-itns" element={<AI_Itns />} />
          <Route path="/CloudComputing-itns" element={<CloudComp_Itns />} />
          <Route path="/IntrusionDetectionSystem-itns" element={<IDS_Itns />} />
          <Route path="/NumberTheoryandCrpytography-itns" element={<NTC_Itns />} />
          <Route path="/MobileComputing-itns" element={<MobComp_Itns />} />
          <Route path="/InformationSecurity-itns" element={<InfoSec_Itns />} />
          <Route path="/NetworkandNetworkingDevices-itns" element={<NND_Itns />} />
          <Route path="/CompilerandTranslatorDesign-itns" element={<CTD_Itns />} />
          <Route path="/FogandEdgeComputing-itns" element={<FEC_Itns />} />
          <Route path="/DigitalForensics-itns" element={<DigitalFor_Itns />} />
          <Route path="/CyberSecurity-itns" element={<CyberSec_Itns />} />
          <Route path="/HadoopandSpark-itns" element={<HadSpark_Itns />} />
          <Route path="/DeepandReinforcementNetworks-itns" element={<DRN_Itns />} />
          <Route path="/ComputationalDataScience-itns" element={<CDS_Itns />} />
          <Route path="/ComputerGraphics-it" element={<CompGraphics_It />} />
          <Route path="/OptimizationPrinciplesandTechniques-it" element={<OptPrinciple_It />} />
          <Route path="/Operatingsystems-it" element={<OperatingSys_It />} />
          <Route path="/DesignandAnalysisofAlgorithm-it" element={<DAA_It />} />
          <Route path="/SoftwareEngineering-it" element={<SoftEngg_It />} />
          <Route path="/ComputerNetworks-it" element={<CompNet_It />} />
          <Route path="/AnalogandDigitalCommunication-it" element={<ADC_It />} />
          <Route path="/TheoryofComputation-it" element={<TOC_It />} />
          <Route path="/CloudComputing-it" element={<CloudComp_It />} />
          <Route path="/DataWarehouseandData-it" element={<DWD_It />} />
          <Route path="/SoftComputing-it" element={<SoftComp_It />} />
          <Route path="/NumberTheoryandCrpytography-it" element={<NTC_It />} />
          <Route path="/ArtificialIntelligence-it" element={<AI_It />} />
          <Route path="/MobileComputing-it" element={<MobComp_It />} />
          <Route path="/NetworkandNetworkingDevices-it" element={<NND_It />} />
          <Route path="/CompilerandTranslatorDesign-it" element={<CTD_It />} />
          <Route path="/WebTechnology-it" element={<WebT_It />} />
          <Route path="/MachineLearningandDataAnalytics-it" element={<MLDA_It />} />
          <Route path="/BigDataScienceandTools-it" element={<BDST_It />} />
          <Route path="/ArtificialNeuralNetworks-it" element={<ANN_It />} />
          <Route path="/MachineVision-it" element={<MachVision_It />} />
          <Route path="/PatternAnalysisandRecommenderSystem-it" element={<PARS_It />} />
          <Route path="/SocialNetworkMiningandAnalysis-it" element={<SNMA_It />} />
          <Route path="/DistributedSystem-it" element={<DistributedS_It />} />
          <Route path="/CyberLaws-it" element={<CyberL_It />} />
          <Route path="/CyberSecurity-it" element={<CyberSec_It />} />
          <Route path="/HadoopandSpark-it" element={<HadSpark_It />} />
          <Route path="/DeepandReinforcementNetworks-it" element={<DRN_It />} />
          <Route path="/ComputationalDataScience-it" element={<CDS_It />} />
          <Route path="/Maths3-ice" element={<Maths3_Ice />} />
          <Route path="/PowerApparatus-ice" element={<PowerApp_Ice />} />
          <Route path="/ElectronicInstrumentation-ice" element={<ElecInstrumentation_Ice />} />
          <Route path="/DigitalCircuitsandSystems-ice" element={<DigitalCS_Ice />} />
          <Route path="/EngineeringAnalysisandDesign-ice" element={<EAD_Ice />} />
          <Route path="/ControlSystemsI-ice" element={<ControlSys1_Ice />} />
          <Route path="/MicroprocessorBasedSystemDesign-ice" element={<MBSD_Ice />} />
          <Route path="/SensorsandTransducers-ice" element={<SenssorT_Ice />} />
          <Route path="/ModernControlTheory-ice" element={<MCT_Ice />} />
          <Route path="/ProcessDynamicsandControl-ice" element={<PDC_Ice />} />
          <Route path="/CommunicationandOpticalInstrumentation-ice" element={<CommOI_Ice />} />
          <Route path="/Robotics-ice" element={<Robo_Ice />} />
          <Route path="/SmartSensors-ice" element={<SmartSensor_Ice />} />
          <Route path="/BiomedicalInstrumentation-ice" element={<BioMedIns_Ice />} />
          <Route path="/DiscreteTimeSystems-ice" element={<DisTimeSys_Ice />} />
          <Route path="/ControlandNavigationinRobotics-ice" element={<CNR_Ice />} />
          <Route path="/BiomedicalSignalProcessing-ice" element={<BSP_Ice />} />
          <Route path="/SensoryandMotorRehabilitation-ice" element={<SMR_Ice />} />
          <Route path="/IntelligentControl-ice" element={<IntelliControl_Ice />} />
          <Route path="/PowerElectronicsandDrive-ice" element={<PowerElecDrive_Ice />} />
          <Route path="/IndustrialInstrumentation-ice" element={<IndustrialInstru_Ice />} />
          <Route path="/Operatingsystems-ice" element={<OperatingSys_Ice />} />
          <Route path="/DigitalSignalProcessing-ice" element={<DSP_Ice />} />
          <Route path="/IntelligentAutonomousSystems-ice" element={<IntelliAutoSys_Ice />} />
          <Route path="/RoboticsVision-ice" element={<RoboVision_Ice />} />
          <Route path="/OpticalFibreandLaserinMedicine-ice" element={<OpticalFL_Ice />} />
          <Route path="/BiomedicalImaging-ice" element={<BioMedImg_Ice />} />
          <Route path="/ClassicalOptimizationTechniques-ice" element={<COT_Ice />} />
          <Route path="/Mechatronics-ice" element={<Mechtron_Ice />} />
          <Route path="/CyberLaws-ice" element={<CyberLaw_Ice />} />
          <Route path="/WebTechnology-ice" element={<WebT_Ice />} />
          <Route path="/RobotAnalysisandcontrol-ice" element={<RAC_Ice />} />
          <Route path="/BiometricTechnologyandsecuritysystems-ice" element={<BioTSS_Ice />} />
          <Route path="/MachineLearningforHealthcare-ice" element={<MLH_Ice />} />
          <Route path="/MultivariableControlTheoryandApplications-ice" element={<MCTA_Ice />} />
          <Route path="/MachineLearningApplicationsinControlSystems-ice" element={<MLACS_Ice />} />
          <Route path="/ArtificialNeuralNetworks-ice" element={<ANN_Ice />} />
          <Route path="/OptimizationPrinciplesandTechniques-eiot" element={<OptPrinciple_Eiot />} />
          <Route path="/Microelectronics-eiot" element={<MicroElec_Eiot />} />
          <Route path="/DigitalCircuitsandSystems-eiot" element={<DigitalCS_Eiot />} />
          <Route path="/Controlsystems-eiot" element={<ControlSys_Eiot />} />
          <Route path="/Electromagnetics-eiot" element={<ElecMag_Eiot />} />
          <Route path="/AnalogandDigitalCommunication-eiot" element={<ADC_Eiot />} />
          <Route path="/PrinciplesofSensorsandDataAcquisition-eiot" element={<PSDA_Eiot />} />
          <Route path="/Microprocessorandcomputerarchitecture-eiot" element={<MCA_Eiot />} />
          <Route path="/IoTSystemArchitecture-eiot" element={<IOTSA_Eiot />} />
          <Route path="/DSPAlgorithmandArchitecture-eiot" element={<DSPAA_Eiot />} />
          <Route path="/ComputerNetworks-eiot" element={<CompNet_Eiot />} />
          <Route path="/WirelessandMobileCommunication-eiot" element={<WirelessMC_Eiot />} />
          <Route path="/ArtificialintelligenceinIoT-eiot" element={<AI_Eiot />} />
          <Route path="/Cloudcomputing-eiot" element={<CloudComp_Eiot />} />
          <Route path="/IoTWorkshop-eiot" element={<IoTWorkshop_Eiot />} />
          <Route path="/MicrocontrollerforIoT-eiot" element={<MicroCIoT_Eiot />} />
          <Route path="/RFandMicrowaveEngineering-eiot" element={<RFMicroEngg_Eiot />} />
          <Route path="/OperatingSystems-eiot" element={<OperatingSys_Eiot />} />
          <Route path="/MultimediaCommunication-eiot" element={<MultimediaComm_Eiot />} />
          <Route path="/CognitiveRadio-eiot" element={<CognitiveRadio_Eiot />} />
          <Route path="/SpeechandAudioSignalProcessing-eiot" element={<SASP_Eiot />} />
          <Route path="/ModernAnalogFilterDesign-eiot" element={<MAFD_Eiot />} />
          <Route path="/WebTechnologies-eiot" element={<WebT_Eiot />} />
          <Route path="/SoftwareEnginnering-eiot" element={<SoftEngg_Eiot />} />
          <Route path="/Maths3-ee" element={<Maths3_Ee />} />
          <Route path="/EngineeringAnalysisandDesignC-ee" element={<EngineerAnaly_Ee />} />
          <Route path="/ElectricalMachinesI-ee" element={<ElecMachine_Ee />} />
          <Route path="/DigitalCircuitandSystem-ee" element={<DigitalCS_Ee />} />
          <Route path="/ElectromagneticFields-ee" element={<ElectroField_Ee />} />
          <Route path="/ElectricalMachineII-ee" element={<ElectricalMach2_Ee />} />
          <Route path="/PowerSystems-ee" element={<PowerSys_Ee />} />
          <Route path="/PowerElectronics-ee" element={<PowerElec_Ee />} />
          <Route path="/MicroprocessorBasedSystemDesign-ee" element={<MBSD_Ee />} />
          <Route path="/ControlSystems-ee" element={<ControlSys_Ee />} />
          <Route path="/PowerTransmissionandDistribution-ee" element={<PowerTD_Ee />} />
          <Route path="/ElectricDrives-ee" element={<ElecDrive_Ee />} />
          <Route path="/RenewableEnergySources-ee" element={<RES_Ee />} />
          <Route path="/ElectricalEngineeringMaterials-ee" element={<EEM_Ee />} />
          <Route path="/ModellingandAnalysisofElectricalMachine-ee" element={<MAEM_Ee />} />
          <Route path="/PowerSystemAnalysis-ee" element={<PSA_Ee />} />
          <Route path="/SwitchgearandProtection-ee" element={<SwitchGP_Ee />} />
          <Route path="/HVDC-ee" element={<HVDC_Ee />} />
          <Route path="/EnvironmentalImpactofEnergySystems-ee" element={<EIES_Ee />} />
          <Route path="/SmartGridTechnologies-ee" element={<SGT_Ee />} />
          <Route path="/PowerElectronicConvertersforRenewableEnergySystems-ee" element={<PECRES_Ee />} />
          <Route path="/OperatingSystems-ee" element={<OperatingSys_Ee />} />
          <Route path="/EnergyStorageSystem-ee" element={<ESS_Ee />} />
          <Route path="/BiomassEnergyandApplication-ee" element={<BEA_Ee />} />
          <Route path="/PowerSystemInstrumentation-ee" element={<PSI_Ee />} />
          <Route path="/AdvancedPowerSystemAnalysis-ee" element={<APSA_Ee />} />
          <Route path="/InstrumentationforPowerElectronicsandDrives-ee" element={<IPED_Ee />} />
          <Route path="/ElectricVehicleTechnologies-ee" element={<ElecVT_Ee />} />
          <Route path="/SoftComputing-ee" element={<SoftComp_Ee />} />
          <Route path="/DataWarehouseandDataMining-ee" element={<DWDM_Ee />} />
          <Route path="/AdvancedEnergyManagement-ee" element={<AEM_Ee />} />
          <Route path="/ControlofRenewableEnergySystem-ee" element={<CRES_Ee />} />
          <Route path="/PowerSystemOperationandControl-ee" element={<PSOC_Ee />} />
          <Route path="/PWMConvertersandApplications-ee" element={<PWMCA_Ee />} />
          <Route path="/ArtificialNeuralNetworks-ee" element={<ANN_Ee />} />
          <Route path="/BigDataScienceandTools-ee" element={<BDST_Ee />} />
          <Route path="/MathematicsforSignalProcessingandCommunication-ece" element={<MSPC_Ece />} />
          <Route path="/ProbabilityTheoryandStochasticProcess-ece" element={<ProbabilityT />} />
          <Route path="/Microelectronics-ece" element={<MicroElec_Ece />} />
          <Route path="/DigitalCircuitsandSystems-ece" element={<DigitalCS_Ece />} />
          <Route path="/ElectronicWorkshop-ece" element={<ElecWorkshop_Ece />} />
          <Route path="/Electromagnetics-ece" element={<ElecMag_Ece />} />
          <Route path="/MachineLearningArtificialIntelligence-ece" element={<MLAI_Ece />} />
          <Route path="/MicroprocessorsandCompArchitecture-ece" element={<MCA_Ece />} />
          <Route path="/CommunicationEngineering-ece" element={<CommEngg_Ece />} />
          <Route path="/DigitalCommunication-ece" element={<DigitalComm_Ece />} />
          <Route path="/DigitalSignalProcessing-ece" element={<DSP_Ece />} />
          <Route path="/AnalogIntegratedCircuits-ece" element={<AIC_Ece />} />
          <Route path="/EmbeddedSystemDesign-ece" element={<ESD_Ece />} />
          <Route path="/OpticalFiberCommunication-ece" element={<OFC_Ece />} />
          <Route path="/DigitalImageProcessing-ece" element={<DIP_Ece />} />
          <Route path="/CMOSDigitalIntegratedCircuits-ece" element={<CMOS_Ece />} />
          <Route path="/Controlsystems-ece" element={<ControlSys_Ece />} />
          <Route path="/ComputerNetworks-ece" element={<CompNet_Ece />} />
          <Route path="/RFandMicrowaveEngineering-ece" element={<RFMicroEngg_Ece />} />
          <Route path="/SatelliteCommunication-ece" element={<SatComm_Ece />} />
          <Route path="/OpticalNetworks-ece" element={<OpticalNet_Ece />} />
          <Route path="/VLSITechnology-ece" element={<VLSI_Ece />} />
          <Route path="/PatternRecognition-ece" element={<PatternRecog_Ece />} />
          <Route path="/OperatingSystems-ece" element={<OperatingSys_Ece />} />
          <Route path="/UnderwaterCommunication-ece" element={<UnderComm_Ece />} />
          <Route path="/CellularandMobileCommunication-ece" element={<CellMobComm_Ece />} />
          <Route path="/MIMOfor5GCommunication-ece" element={<MIMO_Ece />} />
          <Route path="/VideoSignalProcessingandApplication-ece" element={<VSPA_Ece />} />
          <Route path="/LowVoltageandLowPowerVLSIDesign-ece" element={<LVLP_Ece />} />
          <Route path="/CloudComputing-ece" element={<CloudComp_Ece />} />
          <Route path="/MultimediaCommunication-ece" element={<MultiComm_ece />} />
          <Route path="/CognitiveRadio-ece" element={<CognitiveR_Ece />} />
          <Route path="/SpeechandAudioSignalProcessing-ece" element={<SASP_Ece />} />
          <Route path="/ModernAnalogFilterDesign-ece" element={<ModernAFD_Ece />} />
          <Route path="/WebTechnologies-ece" element={<WebT_Ece />} />
          <Route path="/SoftwareEnginnering-ece" element={<SoftEngg_Ece />} />
          <Route path="/BigDataAnalytics-csds" element={<BDA_Csds />} />
          <Route path="/PrincipleofCompilerConstruction-csds" element={<PCC_Csds />} />
          <Route path="/DistrbutedComputing-csds" element={<DistributedComp_Csds />} />
          <Route path="/DataMining-csds" element={<DataMin_Csds />} />
          <Route path="/MultimediaAnalytics-csds" element={<MultiAnal_Csds />} />
          <Route path="/DataHandlingandVisualizationTools-csds" element={<DHVT_Csds />} />
          <Route path="/DistributedDatabases-csds" element={<DistrbutedData_Csds />} />
          <Route path="/DataScienceTools-csds" element={<DST_Csds />} />
          <Route path="/QueryProcessingandOptimization-csds" element={<QPO_Csds />} />
          <Route path="/BusinessIntelligence-csds" element={<BuisnessIntelli_Csds />} />
          <Route path="/SocialMediaAnalytics-csds" element={<SMA_Csds />} />
          <Route path="/NaturalLanguageProcessing-csds" element={<NLP_Csds />} />
          <Route path="/ArtificialIntelligence-csai" element={<AI_Csai />} />
          <Route path="/PrincipleofCompilerConstruction-csai" element={<PCC_Csai />} />
          <Route path="/DistributedComputing-csai" element={<DistributedComp_Csai />} />
          <Route path="/GameTheoryandApplications-csai" element={<GTA_Csai />} />
          <Route path="/MachineLearning-csai" element={<ML_Csai />} />
          <Route path="/CryptographyTechniques-csai" element={<CryptoTech_Csai />} />
          <Route path="/DeepLearning-csai" element={<DeepLearning_Csai />} />
          <Route path="/AIHardwareandTools-csai" element={<AIHardT_Csai />} />
          <Route path="/HighPerformanceComputing-csai" element={<HPC_Csai />} />
          <Route path="/DataPrivacyandSecurity-csai" element={<DPS_Csai />} />
          <Route path="/NaturalLanguageProcessing-csai" element={<NLP_Csai />} />
          <Route path="/ComputerVision-csai" element={<CompVision_Csai />} />
          <Route path="/AugmentedReality-csai" element={<AR_Csai />} />
          <Route path="/HumanComputerInteraction-csai" element={<HCI_Csai />} />
          <Route path="/OptimizationTechniqueForMachineLearning-csai" element={<OTML_Csai />} />
          <Route path="/PatternProcessingusingAI-csai" element={<CDS_Itns />} />
          <Route path="/KnowledgeBasedSystems-csai" element={<KBS_Csai />} />
          <Route path="/ResponsibleAI-csai" element={<ResponsibleAI_Csai />} />
          <Route path="/IntelligentComputing-csai" element={<IntelliComp_Csai />} />
          <Route path="/AdvancedAlgorithm-csai" element={<AdvAlgo_Csai />} />
          <Route path="/CurrentTrendsinSoftwareDevelopment-csai" element={<CTSD_Csai />} />
          <Route path="/Operatingsystem-cse" element={<OperatingSys_Cse />} />
          <Route path="/TheoryofAutomataandFormalLanguages-cse" element={<TAFL_Cse />} />
          <Route path="/SoftwareEngineering-cse" element={<SoftEngg_Cse />} />
          <Route path="/DataCommunication-cse" element={<DataComm_Cse />} />
          <Route path="/PrincipleofCompilerConstruction-cse" element={<PCC_Cse />} />
          <Route path="/CloudComputing-cse" element={<CloudComp_Cse />} />
          <Route path="/DataMining-cse" element={<DataMin_Cse />} />
          <Route path="/MachineLearning-cse" element={<ML_Cse />} />
          <Route path="/ObjectorientedAnalysisandDesign-cse" element={<OOAD_Cse />} />
          <Route path="/CryptographyTechniques-cse" element={<CyptoT_Cse />} />
          <Route path="/HighPerformanceComputing-cse" element={<HPC_Cse />} />
          <Route path="/ComputerhardwareSoftware-cse" element={<CompHardSoft_Cse />} />
          <Route path="/InternetofThings-cse" element={<IOT_Cse />} />
          <Route path="/ComputerVision-cse" element={<CompVision_Cse />} />
          <Route path="/NaturalLanguageProcessing-cse" element={<NLP_Cse />} />
          <Route path="/DataPrivacyandSecurity-cse" element={<DPS_Cse />} />
          <Route path="/ITInfrastructureandManagement-cse" element={<ITInfraMang_Cse />} />
          <Route path="/HumanComputerInteraction-cse" element={<HCI_Cse />} />
          <Route path="/ComputerGraphics-cse" element={<CompGraphics_Cse />} />
          <Route path="/KnowledgeBasedSystem-cse" element={<KBS_Cse />} />
          <Route path="/MultimediaSecurityandForensic-cse" element={<MSF_Cse />} />
          <Route path="/SoftwareProjectManagement-cse" element={<SPM_Cse />} />
          <Route path="/CurrentTrendsinSoftwareDevelopment-cse" element={<CTSD_Cse />} />
          <Route path="/ServiceOrientedArchitecture-cse" element={<SOA_Cse />} />
          <Route path="/AugmentedReality-cse" element={<AR_Cse />} />
          <Route path="/PatternProcessingAI-cse" element={<PPAI_Cse />} />
        </Routes>
    </BrowserRouter>
);
reportWebVitals();
