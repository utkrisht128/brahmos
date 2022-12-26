import react from "react";
import Boxes from "./Boxes";
import SoloBox from "./Solo-box";
import Navbar from "./Navbar";
import icon2 from "../Images/icon2.jpg";
import icon3 from "../Images/icon3.jpg";
import icon4 from "../Images/icon4.jpg";
import icon5 from "../Images/icon5.jpg";
import icon6 from "../Images/icon6.jpg";
import icon7 from "../Images/icon7.jpg";
import icon8 from "../Images/icon8.jpg";
import icon9 from "../Images/icon9.jpg";
import icon10 from "../Images/icon10.jpg";
import icon11 from "../Images/icon11.jpg";
import icon12 from "../Images/icon12.jpg";
import icon13 from "../Images/icon13.jpg";
import icon14 from "../Images/icon14.jpg";
import icon15 from "../Images/icon15.jpg";
import icon17 from "../Images/icon17.jpg";
import icon16 from "../Images/icon16.jpg";
import icon18 from "../Images/icon18.jpg";
import icon19 from "../Images/icon19.jpg";
import icon20 from "../Images/iconx.jpg";
import { Link } from "react-router-dom";
import "./Notes.css";
export default function Notes() {
  return (
    <>
      <Navbar />
      {/* <img src="" alt="Loading" /> */}
      <section className="branches">
        <Boxes
          img2={icon5}
          img3={icon6}
          img4={icon7}
          link1={"/Bio-Technology"}
          name1={"Bio Technology"}
          link2={"/Civil-Engineering"}
          name2={"Civil Engineering"}
          link3={"/Computer-Engineering"}
          name3={"Computer Engineering"}
        />
      </section>
      <section className="branches">
        <Boxes
          img2={icon8}
          img3={icon9}
          img4={icon10}
          link1={"/csai"}
          name1={"Computer Science and Engineering(Artificial Intelligence)"}
          link2={"/csda"}
          name2={"Computer Science and Engineering(Big Data Analytics)"}
          link3={"/csds"}
          name3={"Computer Science and Engineering(Data Science)"}
        />
      </section>
      <section className="branches">
        <Boxes
          img2={icon4}
          img3={icon12}
          img4={icon13}
          link1={"/ee"}
          name1={"Electrical Engineering"}
          link2={"/ecam"}
          name2={"Electrical and Communication Engineering(AI and ML"}
          link3={"/eiot"}
          name3={"Electrical and Communication Engineering(Internet of Things)"}
        />
      </section>

      <section className="branches">
        <Boxes
          img2={icon11}
          img3={icon20}
          img4={icon14}
          link1={"/ece"}
          name1={"Electrical and Communication Engineering"}
          link2={"/gi"}
          name2={"Geoinformatics"}
          link3={"/iiot"}
          name3={"Information Technology (Internet of Things)"}
        />
      </section>

      <section className="branches">
        <Boxes
          img2={icon16}
          img3={icon15}
          img4={icon3}
          link1={"/itns"}
          name1={"Information Technology (Network and Information Security)"}
          link2={"/it"}
          name2={"Information Technology"}
          link3={"/ice"}
          name3={"Intrumentation and Control Engineering"}
        />
      </section>

      <section className="branches">
        <Boxes
          img2={icon17}
          img3={icon18}
          img4={icon19}
          link1={"/mpae"}
          name1={"Manufacturing Processes and Automation Engineering"}
          link2={"/mac"}
          name2={"Mathematics and Computing"}
          link3={"/meev"}
          name3={"Mechanical Engineering(Electric Vehicles)"}
        />
      </section>
      <section className="branches">
        <SoloBox
          img1={icon2}
          link1={"/me"}
          name1={"Mechanical Engineering"}
        />
      </section>
    </>
  );
}
