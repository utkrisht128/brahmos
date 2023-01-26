import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Pdf from "../../components/Pdf";
import Img from "../../Images/pdf.png";
export default function Maths2() {
    return(
        <>
        <Navbar />
        <h1 className="heading">Unit 1</h1>
      <div className="box-1">
      <Pdf name={"Unit1-1"} link={"https://drive.google.com/file/d/13Japl7-3bPkoJMVkNGL7Lc4uH1djFRxi/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit1-2"} link={"https://drive.google.com/file/d/1w-k-iEZqktGvuoS9Ivi287oXQzctHYxG/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit1-3"} link={"https://drive.google.com/file/d/1yRhHWcct9a9CXfsp4_saTqITR71kUIBx/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit1-4"} link={"https://drive.google.com/file/d/1OGguCsfRetRI7i5R34cp5W0hYGH5s-c8/view?usp=sharing"} img={Img} /> 
      </div>

        <h1 className="heading">Unit 2</h1>
      <div className="box-1">
      <Pdf name={"Unit2-1"} link={"https://drive.google.com/file/d/1rgsmeDnaESAg1ukDiPmP2AKz2JyDNVRc/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit2-2"} link={"https://drive.google.com/file/d/1eeh-pcI2MuZ3dQgiSWVBS-eIuSbSBeIe/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit2-3"} link={"https://drive.google.com/file/d/1KNy1INHzO2ge-Kfds7hQk0ngi-BMnqM-/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit3-4"} link={"https://drive.google.com/file/d/1m-pomM-YGppBytBd8nlhI5do18TQzk1w/view?usp=sharing"} img={Img} /> 
      </div>
        <h1 className="heading">Unit 3</h1>
      <div className="box-1">
      <Pdf name={"Unit3-1"} link={"https://drive.google.com/file/d/1u3NHwDNcOi3Z_8duq3jAGVB2lUOWj27m/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit3-2"} link={"https://drive.google.com/file/d/1Dt9ot3IAruuP_I3tuIohdp718QDWPVud/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit3-3"} link={"https://drive.google.com/file/d/1gGUicrw_PSw00TXGuAqjhrCwhdGALeRJ/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit3-4"} link={"https://drive.google.com/file/d/1px-XA-8TuVq354_jGCLYu9yuJW7rZnC3/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit3-5"} link={"https://drive.google.com/file/d/12icrPrYF3CRCSsrhuhApio255YkiAC4h/view?usp=sharing"} img={Img} />  
      </div>
        <h1 className="heading">Unit 4</h1>
      <div className="box-1">
      <Pdf name={"Unit4"} link={"https://drive.google.com/file/d/1EofjOr6p1_KtzlnkXxJ5JL2lGi_c80Sv/view?usp=sharing"} img={Img} /> 
      </div>
        <h1 className="heading">Unit 5</h1>
      <div className="box-1">
      <Pdf name={"Unit5"} link={"https://drive.google.com/file/d/1XPrQ5wVZcGdOaxHYtJU2lWmKVyTOIy21/view?usp=sharing"} img={Img} /> 
      </div>
        </>
  ) ;
  }
  