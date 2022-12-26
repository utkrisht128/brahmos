import React from "react";
import { Link } from "react-router-dom";
import "./Solo-box.css";
export default function SoloBox(props) {
  return (
    <>
      <section className="Smid">
        <div className="Smid-boxes">
          <div className="Smid-box">
            <img src={props.img1} alt="Loading" />
            <Link to={props.link1}>
              <h3 className="Stext">{props.name1}</h3>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
