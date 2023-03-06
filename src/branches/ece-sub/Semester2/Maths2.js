import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Pdf from "../../../components/Pdf";
import Img from "../../../Images/pdf.png";
export default function Maths() {
    return(
        <>
        <Navbar />
        <h1 className="heading">Unit 1-5</h1>
      <div className="box-1">
      <Pdf name={"Unit1-5"} link={"https://drive.google.com/file/d/1wGePaHlKncGY3lOtmB1E_pzX6uRim9kF/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit1-5"} link={"https://drive.google.com/file/d/1EvxKkLFOKO2TIYEAfUpGNGYPIwwRpTZB/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit1-5"} link={"https://drive.google.com/file/d/1WqrsRzF8g-aMMjntp1Z1lkMc6elMYidN/view?usp=share_link"} img={Img} /> 
      <Pdf name={"Unit1-5"} link={"https://drive.google.com/file/d/1ix-cqMrutdU7L-liHfYOMF_qQuwTi3PI/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit1-5"} link={"https://drive.google.com/file/d/118sD8_0HnJGmg6eIfiN2i8XJ6SqTo6XK/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit1-5"} link={"https://drive.google.com/file/d/1laTcN_8HYezhrJH4rEJi9OisIPWYsXdF/view?usp=sharing"} img={Img} /> 
      </div>

      <div className="box-1">
      <Pdf name={"Unit1-5"} link={"https://drive.google.com/file/d/14ScBvPAjLV8aIrvGKl6zvnkRPWxvJAgZ/view?usp=sharing"} img={Img} /> 
      </div>
        </>
  ) ;
  }
  