import React from "react";
import { Link } from "react-router-dom";
import { Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Viewer } from "@react-pdf-viewer/core";
import "./pdf.css";
export default function Pdf(props) {
  return (
    <>
          <div className="mid-box">
            <img src={props.img} alt="Loading" />
            <a href={props.link} target="_blank">
              <h3 className="text">{props.name}</h3>
            </a>
          </div>
    </>
  );
}
