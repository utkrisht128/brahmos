import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Pdf from "../../../components/Pdf";
import Img from "../../../Images/pdf.png";
export default function WebT() {
    return(
        <>
        <Navbar />
        <h1 className="heading">Unit 1-5</h1>
      <div className="box-1">
      <Pdf name={"Unit1-5"} link={"https://docs.google.com/presentation/d/1ADd_iTd9pEEpjnhpu4nP9VhMDQaN3oov/edit?usp=sharing&ouid=115988180847881203793&rtpof=true&sd=true"} img={Img} /> 
      <Pdf name={"Unit1-5"} link={"https://drive.google.com/file/d/1GXlVWDfZRyO9VTbiVPqkHIXwApZNMLI7/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit1-5"} link={"https://drive.google.com/file/d/1Qc9zmFuuH5u2QXRgaQMQ1amKkGyC8kaH/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit1-5"} link={"https://drive.google.com/file/d/1hK7m33ievbYcjGCg5Z5F32BFakXXOdG4/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit1-5"} link={"https://docs.google.com/presentation/d/1oaOG5L71ruOWICVa2aFOIV_bDZ0VJGNb/edit?usp=sharing&ouid=115988180847881203793&rtpof=true&sd=true"} img={Img} /> 
      <Pdf name={"Unit1-5"} link={"https://drive.google.com/file/d/1lFpfUGE_euR5hBG8j0d_4MU_VUgQ4HKw/view?usp=sharing"} img={Img} /> 
      </div>

      <div className="box-1">
      <Pdf name={"Unit1-5"} link={"https://docs.google.com/presentation/d/1uAOSBol4mmT1PnPkKuLYsK9aZ_2TDpHp/edit?usp=sharing&ouid=115988180847881203793&rtpof=true&sd=true"} img={Img} /> 
      <Pdf name={"Unit1-5"} link={"https://docs.google.com/presentation/d/1x3jwoYwe7lJP_KQ2-iFRxCAjUjJoh-DA/edit?usp=sharing&ouid=115988180847881203793&rtpof=true&sd=true"} img={Img} /> 
      <Pdf name={"Unit1-5"} link={"https://docs.google.com/presentation/d/1xCcOh8qShcKyxpJGGF45OcD9lecy4XbM/edit?usp=sharing&ouid=115988180847881203793&rtpof=true&sd=true"} img={Img} /> 
      <Pdf name={"Unit1-5"} link={"https://docs.google.com/presentation/d/1DCKo-XtdUb3E5YzwsDuSEmBvNIceL0mC/edit?usp=sharing&ouid=115988180847881203793&rtpof=true&sd=true"} img={Img} /> 
      </div>
        </>
  ) ;
  }
  