import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Pdf from "../../components/Pdf";
import Img from "../../Images/pdf.png";
export default function EDC() {
    return(
        <>
        <Navbar />
        <h1 className="heading">Unit 1-5</h1>
      <div className="box-1">
      <Pdf name={"Unit1-5"} link={"https://drive.google.com/file/d/1aIVB0zWOeNBu1wQhB7x-b3IAr0ACA4mm/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit1-5"} link={"https://drive.google.com/file/d/1iYBBELjkAu_mCEtgo1qSoMgkT33ijHBw/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit1-5"} link={"https://drive.google.com/file/d/1kl-mFCsJqDbwtB9Wgox64s0DLY5uvgiN/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit1-5"} link={"https://drive.google.com/file/d/1DvgSZxo3VDBuhFj3UAOTu7ZAvHocRKiT/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit1-5"} link={"https://drive.google.com/file/d/1RYBIFzwJJSnYt2O6gDn6V3iac63GESOz/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit1-5"} link={"https://drive.google.com/file/d/1uxQqvtVL3m0IP66vE5BL_mJMpnPZj6jT/view?usp=sharing"} img={Img} /> 
      </div>

      <div className="box-1">
      <Pdf name={"Unit1-5"} link={"https://drive.google.com/file/d/1tZG9QtHesAeqseMvrx5bPVmLpe3L6f3L/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit1-5"} link={"https://drive.google.com/file/d/1zezftVrGwSFMhCys6TVTalX5lcDiBu3r/view?usp=sharing"} img={Img} /> 
      </div>
        </>
  ) ;
  }
  