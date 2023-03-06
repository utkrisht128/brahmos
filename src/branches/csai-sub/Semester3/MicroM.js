import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Pdf from "../../../components/Pdf";
import Img from "../../../Images/pdf.png";
export default function MicroM() {
    return(
        <>
        <Navbar />
        <h1 className="heading">Unit 1-5</h1>
      <div className="box-1">
      <Pdf name={"Unit1-5"} link={"https://drive.google.com/file/d/1oh6_L5dTlp4Y5RaW2wvJoj4ENSHZlDJQ/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit1-5"} link={"https://docs.google.com/presentation/d/15U7S4VkKh3bm7HB-9KF8tWuk-6ETIjVt/edit?usp=sharing&ouid=115988180847881203793&rtpof=true&sd=true"} img={Img} /> 
      <Pdf name={"Unit1-5"} link={"https://drive.google.com/file/d/19w9TZo7Wxi--zO4-KwaI4aAEzDr_4OXM/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit1-5"} link={"https://drive.google.com/file/d/1-0BqdkKecO0RovMmMVQ1HCyjzukm5Zr0/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit1-5"} link={"https://docs.google.com/presentation/d/18m2iX805855OkmI28VuLMGSg5LK9gCS7/edit?usp=sharing&ouid=115988180847881203793&rtpof=true&sd=true"} img={Img} /> 
      <Pdf name={"Unit1-5"} link={"https://drive.google.com/file/d/1ids_QGm2QoUZ23X5ElOH7LExrInZDH72/view?usp=sharing"} img={Img} /> 
      </div>

      <div className="box-1">
      <Pdf name={"Unit1-5"} link={"https://drive.google.com/file/d/1BUoqs8JPGiuC2Dl-nvWzkR8ROw5QsELb/view?usp=sharing"} img={Img} /> 
      </div>
        </>
  ) ;
  }
  