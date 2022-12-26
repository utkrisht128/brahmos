import React from "react";
import { Link } from "react-router-dom";
import "./DuoBox.css";
export default function DuoBox(props) {
  return (
    <>
      <section className="Dmid">
        <div className="Dmid-boxes">
          <div className="Dmid-box">
            <img src={props.img1} alt="Loading" />
            <Link to={props.link1}>
              <h3 className="Dtext">{props.name1}</h3>
            </Link>
          </div>
          <div className="Dmid-box">
            <img src={props.img2} alt="Loading" />
            <Link to={props.link2}>
              <h3 className="Dtext">{props.name2}</h3>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
