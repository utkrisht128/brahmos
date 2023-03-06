import React from "react";
import { Link } from "react-router-dom";
import Navbar from "../../../components/Navbar";
import "../physics.css";
import Pdf from "../../../components/Pdf";
import Img from "../../../Images/pdf.png";
export default function Physics() {
  return (
    <>
      <Navbar />
      <h1 className="heading">Unit 1</h1>
      <div className="box-1">
      <Pdf name={"Unit1-1"} link={"https://drive.google.com/file/d/1BaiCF-GcLPWlPBO72xY7yEWw1eQD26pi/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit1-2"} link={"https://drive.google.com/file/d/1meC_eYLuZScRry-jnOoGqTT-QUT8UggL/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit1-3"} link={"https://drive.google.com/file/d/1WfgSPe2dWqiGBrPWGtO9qWngH8OGvmrA/view?usp=sharing"} img={Img} /> 
      </div>
      <h1 className="heading">Unit 2</h1>
      <div className="box-1">
      <Pdf name={"Unit2-1"} link={"https://drive.google.com/file/d/1-4oznyUXGw2ovy6omLXStTrHHdO6eVUG/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit2-2"} link={"https://drive.google.com/file/d/1Vnwmqfl7U3FdIGvzdgk1mE67siXbA-0Q/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit2-3"} link={"https://drive.google.com/file/d/11lsQE9MfRsyGKc-3gchfWBR77_Wa61qo/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit2-4"} link={"https://drive.google.com/file/d/179zV9MrbpxLaYrpp46WU8I6wovZLWwDw/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit2-5"} link={"https://drive.google.com/file/d/1Jrf4ZHzUcYjgTZjB6_vPKjm7eELu4Tbx/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit2-6"} link={"https://drive.google.com/file/d/1qQl4t0aMTa6reOP66F33LYuN4IZWxVwU/view?usp=sharing"} img={Img} /> 
      </div>
      <div className="box-1">
      <Pdf name={"Unit2-7"} link={"https://drive.google.com/file/d/1sSPyWAFamO3_ixiWHSGLGcrXUVhVqmgR/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit2-8"} link={"https://drive.google.com/file/d/1EAbMNqbsyN-e2dJqqoTewGVc-eMqZ0Oy/view?usp=sharing"} img={Img} /> 
      </div>
      <h1 className="heading">Unit 3</h1>
      <div className="box-1">
      <Pdf name={"Unit3-1"} link={"https://drive.google.com/file/d/1z_99Nd1Vku6RQRtYAulRq8Xeizl0rRCy/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit3-2"} link={"https://drive.google.com/file/d/1z_99Nd1Vku6RQRtYAulRq8Xeizl0rRCy/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit3-3"} link={"https://drive.google.com/file/d/1OUj8EYcleEP5O28wI5VBIQ0Wt8MdYuIp/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit3-4"} link={"https://drive.google.com/file/d/1j3x_I_JwJy2A7mSBDgNeZw9Jt4kq6kFr/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit3-5"} link={"https://drive.google.com/file/d/1-jyw7YfcS_F2VVKfqLv8pwVIC65Dpe0t/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit3-6"} link={"https://drive.google.com/file/d/1HwYWdrFgDwoOFMxq3HJ6MmRPthvhyzwR/view?usp=sharing"} img={Img} /> 
      </div>
      <div className="box-1">
      <Pdf name={"Unit3-7"} link={"https://drive.google.com/file/d/145n8lWd6yqit_-tSKydOGZtWo2Avf7s0/view?usp=sharing"} img={Img} /> 
      </div>
      <h1 className="heading">Unit 4</h1>
      <div className="box-1">
      <Pdf name={"Unit4-1"} link={"https://drive.google.com/file/d/1Zb-1HA5tM0dLlTWDpT-bg5_Oy6eFSIBh/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit4-2"} link={"https://drive.google.com/file/d/12jwsxyWiz4jLkR-A4CPEo63JS5MaodLG/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit4-3"} link={"https://drive.google.com/file/d/13DZ6tbKcvKS5Zq8BKPrRi3Gjp81PGZui/view?usp=sharing"} img={Img} /> 
      <Pdf name={"Unit4-4"} link={"https://drive.google.com/file/d/1lLdBbbsLfhjuxMWyqlXBQTfsK6uj03TK/view?usp=sharing"} img={Img} /> 
      </div>
      <h1 className="heading">Unit 5</h1>
      <div className="box-1">
      <Pdf name={"Unit5-1"} link={"https://drive.google.com/file/d/1NIg7XrFWU8X_HsghB2mWWU8ToCvjkRcN/view?usp=sharing"} img={Img} /> 
      </div>
    </>
  );
}
