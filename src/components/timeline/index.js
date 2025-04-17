import React from "react";
import "./style.css";

export const Timeline = ({ data }) => {
  return (
    <div className="timeline">
      {data.map((item, index) => (
        <div key={index} className="timeline-item">
          <div className="timeline-content">
            <h3>{item.jobtitle}</h3>
            <p className="where">{item.where}</p>
            <p className="date">{item.date}</p>
          </div>
        </div>
      ))}
    </div>
  );
}; 