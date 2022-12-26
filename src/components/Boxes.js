import React from "react";
import { Link } from "react-router-dom";
import "./boxes.css";
export default function Boxes(props) {
  return (
    <>
      <section className="Tmid">
        <div className="Tmid-boxes">
          <div className="Tmid-box">
            <img src={props.img2} alt="Loading" />
            <Link to={props.link1}>
              <h3 className="Ttext">{props.name1}</h3>
            </Link>
          </div>
          <div className="Tmid-box">
            <img src={props.img3} alt="Loading" />
            <Link to={props.link2}>
              <h3 className="Ttext">{props.name2}</h3>
            </Link>
          </div>
          <div className="Tmid-box">
            <img src={props.img4} alt="Loading" />
            <Link to={props.link3}>
              <h3 className="Ttext">{props.name3}</h3>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
