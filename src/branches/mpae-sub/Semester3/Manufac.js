import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Pdf from "../../../components/Pdf";
import Img from "../../Images/pdf.png";
export default function Manufac() {
    return(
        <>
        <Navbar />
        <h1 className="heading">Unit 1-5</h1>
      <div className="box-1">
      <Pdf name={"Unit1-5"} link={"https://drive.google.com/file/d/1WHnr3ALYNoUzyQB1iHtaOQEAvMLGp0R3/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit1-5"} link={"https://drive.google.com/file/d/1KwBGhjmBRJXQjvNGUu1h85weJlhjbi-g/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit1-5"} link={"https://drive.google.com/file/d/1pIIp3OiNBk4WqQr5I7EbftdG2BKsBQMq/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit1-5"} link={"https://drive.google.com/file/d/1AAELN4JCKZ-tuxAP0LDa8fLsOh0zrTfu/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit1-5"} link={"https://drive.google.com/file/d/1dqK0R3DjGaSpfNRcBzwyvMmVStM_mH9V/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit1-5"} link={"https://drive.google.com/file/d/1qqf1D1s7_mgwUnzAyRfBpM3cr7w9HOTv/view?usp=sharing"} img={Img} /> 
      </div>

      <div className="box-1">
      <Pdf name={"Unit1-5"} link={"https://drive.google.com/file/d/1qEzi11tC2t9xlXkIC_-vutpmoEghqvj7/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit1-5"} link={"https://drive.google.com/file/d/116lqHO9BfKJPLR2FZyhxpOFFwZvV__k9/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit1-5"} link={"https://drive.google.com/file/d/15ncGkoISuOrV-TeEkTPEQGGL7FSo9G7-/view?usp=sharing"} img={Img} /> 
      </div>
        </>
  ) ;
  }
  