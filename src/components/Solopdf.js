import React from "react";
import { Link } from "react-router-dom";
import { Worker } from "@react-pdf-viewer/core";
import "@react-pdf-viewer/core/lib/styles/index.css";
import { Viewer } from "@react-pdf-viewer/core";
import "./solo-pdf.css";
export default function Solopdf(props) {
  return (
    <>
      <Worker workerUrl="https://cdnjs.cloudflare.com/ajax/libs/pdf.js/2.14.305/pdf.worker.min.js">
        <div className="solo-pdf">
          <div className="solo-pdf-box">
            <Viewer fileUrl={`${props.pdf1}`} />
          </div>
        </div>
      </Worker>
    </>
  );
}
