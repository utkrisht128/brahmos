import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import Pdf from "../../../components/Pdf";
import Img from "../../../Images/pdf.png";
export default function Maths() {
    return(
        <>
        <Navbar />
        <h1 className="heading">Unit 1</h1>
      <div className="box-1">
      <Pdf name={"Unit1-1"} link={"https://drive.google.com/file/d/1W_NrVbUwI2x0dvFVRxqTK-p80SWRwJx1/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit1-2"} link={"https://drive.google.com/file/d/1pzKbN8q3w8rsNVN0RAFh-Ispl9mgOZtC/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit1-3"} link={"https://drive.google.com/file/d/17mFYyjnUqeCKdGe967P7SNouL_TjgNnt/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit1-4"} link={"https://drive.google.com/file/d/1q9ZLZRafB7Ws0xmmTsQL7zlJkdCDCuDf/view?usp=sharing"} img={Img} /> 
      </div>
      <h1 className="heading">Unit 2</h1>
      <div className="box-1">
      <Pdf name={"Unit2-1"} link={"https://drive.google.com/file/d/1VWYZpePiKqk8WQtWOdXvjl7cVAYd-eLy/view?usp=sharing"} img={Img} /> 
      </div>
      <h1 className="heading">Unit 3</h1>
      <div className="box-1">
      <Pdf name={"Unit3-1"} link={"https://drive.google.com/file/d/1fkn1_tiCuMmrY0YGtvlLrkJsEqVkzVBQ/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit3-2"} link={"https://drive.google.com/file/d/1JZFtxQ1hQdZBk3N0xZyUn3QzGhfifDxT/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit3-3"} link={"https://drive.google.com/file/d/1HgSadY61VfDZsnINNRKj7AtZgRx6FDWh/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit3-4"} link={"https://drive.google.com/file/d/1mJdeZoPuiYC5sMMiulYWttji_PIWGs7P/view?usp=sharing"} img={Img} /> 
      </div>
      <h1 className="heading">Unit 4</h1>
      <div className="box-1">
      <Pdf name={"Unit4-1"} link={"https://drive.google.com/file/d/1hwlneCIYQQ28LPNJ44gPDjkDLGSukY6S/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit4-2"} link={"https://drive.google.com/file/d/1Uh5ZvNZvBE9REq8o4Q-gLwH3TxWBqILj/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit4-3"} link={"https://drive.google.com/file/d/15feK7tslHntKBpoHEbWIIyyaj2cyFDxQ/view?usp=sharing"} img={Img} /> 
      </div>
      <h1 className="heading">Unit 5</h1>
      <div className="box-1">
      <Pdf name={"Unit5-1"} link={"https://drive.google.com/file/d/1vXfg3wwcbITCeYwJyHMm527Xl0VQVUqg/view?usp=sharing"} img={Img} /> 
      </div>
        </>
  ) ;
  }
  