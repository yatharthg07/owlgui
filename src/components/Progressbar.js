import React from "react";
import "./Progressbar.css";

export default function Progressbar({ value = 0 }) {
  return (
    <div className="progressbar-container">
      <div className="progressbar">
        <div
          className="progressbar-fill"
          style={{ width: `${value}%` }}
        ></div>
        <div className="progressbar-text">{value} %</div>
      </div>
    </div>
  );
}
