import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Pdf from "../../../components/Pdf";
import Img from "../../../Images/pdf.png";
export default function Fluid() {
    return(
        <>
        <Navbar />
        <h1 className="heading">Unit 1</h1>
      <div className="box-1">
      <Pdf name={"Unit-1"} link={"https://drive.google.com/file/d/1lhGykpUWsl0hP-kfLSZZ1AUCeuhFsl74/view?usp=sharing"} img={Img} />  
      </div>
        <h1 className="heading">Unit 2</h1>
      <div className="box-1">
      <Pdf name={"Unit-2"} link={"https://drive.google.com/file/d/11vEsC7gRcNUW-CCeEKVHdX6LsiwMBFvb/view?usp=sharing"} img={Img} />  
      </div>
        <h1 className="heading">Unit 3</h1>
      <div className="box-1">
      <Pdf name={"Unit-3"} link={"https://drive.google.com/file/d/1MTpCfqVbZ0v3s4vLYN6DxHeZdNNoEM5I/view?usp=sharing"} img={Img} />  
      </div>
        <h1 className="heading">Unit 4</h1>
      <div className="box-1">
      <Pdf name={"Unit4-1"} link={"https://drive.google.com/file/d/15GacjpbJGaLAj-ESgeZY9YGk2FT1qSRl/view?usp=sharing"} img={Img} />  
      <Pdf name={"Unit4-2"} link={"https://drive.google.com/file/d/1VOKYvsRd1Vft2NDKDUwGs9lhna7oRd8O/view?usp=sharing"} img={Img} />  
      </div>
        <h1 className="heading">Unit 5</h1>
      <div className="box-1">
      <Pdf name={"Unit5"} link={"https://drive.google.com/file/d/1CbZpvlOeiSCykSgPV9OEHNTMkF1auioZ/view?usp=sharing"} img={Img} /> 
      </div>
        </>
  ) ;
  }
  