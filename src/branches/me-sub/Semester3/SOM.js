import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Pdf from "../../../components/Pdf";
import Img from "../../../Images/pdf.png";
export default function Maths2() {
    return(
        <>
        <Navbar />
        <h1 className="heading">Unit 1-5</h1>
      <div className="box-1">
      <Pdf name={"Unit1-5"} link={"https://drive.google.com/file/d/1KG-DKEkj625WRJwfe5mu76ZalEmg2uwZ/view?usp=sharing"} img={Img} /> 
      </div>
        </>
  ) ;
  }
  