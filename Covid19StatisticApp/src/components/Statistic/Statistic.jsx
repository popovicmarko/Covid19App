import React, { useState } from "react";
import "./Statistic.css";


function Statistic() {
  const data = [{
    infected: 5,
    cured: 5,
    died: 5
  }]
  return (
    <div className="Statistic">
      <div className="statisticCoi infeced">
        <span className="info">INFECED: {data[0].infected}</span>
      </div>
      <div className="statisticCoi recovered">
        <span className="info">CVURED: {data[0].cured}</span>
      </div>
      <div className="statisticCoi died">
        <span className="info">DIED: {data[0].died}</span>
      </div>
    </div>
  );
}
export default Statistic;