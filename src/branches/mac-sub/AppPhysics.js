import React from "react";
import { Link } from "react-router-dom";
import Pdf from "../../components/Pdf";
import Img from "../../Images/pdf.png";
import Navbar from "../../components/Navbar";
export default function AppPhysics() {
    return(
        <>
        <Navbar />
        <h1 className="heading">Unit 1</h1>
      <div className="box-1">
      <Pdf name={"Unit1-1"} link={"https://drive.google.com/file/d/1NOKqnnyddHt7S1jIsmrb6w-uWpZTzUVc/view?usp=sharing"} img={Img} />
      </div>
      <h1 className="heading">Unit 2</h1>
      <div className="box-1">
      <Pdf name={"Unit2-1"} link={"https://drive.google.com/file/d/19G70NsqKfe5flW5XI4JEtD8mry6qI6KJ/view?usp=sharing"} img={Img} /> 
      </div>
      <h1 className="heading">Unit 3</h1>
      <div className="box-1">
      <Pdf name={"Unit3-1"} link={"https://drive.google.com/file/d/1zSodRqXU6QU0SLvLep4bngjKWAibhtpF/view?usp=sharing"} img={Img} />  
      </div>
      <h1 className="heading">Unit 4</h1>
      <div className="box-1">
      <Pdf name={"Unit4-1"} link={"https://drive.google.com/file/d/1FDDOK1rERTpp8nDKbRIzMZdOCbGC_heg/view?usp=sharing"} img={Img} /> 
      </div>
      <h1 className="heading">Unit 5</h1>
      <div className="box-1">
      <Pdf name={"Unit5-1"} link={"https://drive.google.com/file/d/1zaL7x--AbGLmx2uRsH0N3VhH8ua17Xy9/view?usp=sharing"} img={Img} /> 
      </div>
        </>
  ) ;
  }
  