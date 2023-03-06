import React from "react";
import { Link } from "react-router-dom";
import Pdf from "../../../components/Pdf";
import Img from "../../../Images/pdf.png";
import Navbar from "../../../components/Navbar";
export default function Discrete() {
    return(
        <>
        <Navbar />
        <h1 className="heading">Unit 1-5</h1>
      <div className="box-1">
      <Pdf name={"Unit 1-5"} link={"https://drive.google.com/file/d/1S-dS2s8c8zah-fb6dHd-l7BWgJYE4_g8/view?usp=sharing"} img={Img} />
      </div>
        </>
  ) ;
  }
  