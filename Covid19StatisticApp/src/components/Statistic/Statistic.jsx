import React, { useState } from "react";
import "./Statistic.css";

const data = [{
  infected:1,
  cured:2,
  died:3
}]
function Statistic() {
  return (
    <div className="Statistic">
      <div className="statisticCoi">
        <span className="info">infected</span>
      </div>
      <div className="statisticCoi">
        <span className="info">cured</span>

      </div>
      <div className="statisticCoi">
        <span className="info">died</span>
      </div>
    </div>
  );
}
export default Statistic;