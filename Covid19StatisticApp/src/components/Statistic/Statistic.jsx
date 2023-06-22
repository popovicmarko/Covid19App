import React, { useState } from "react";
import "./Statistic.css";

const data = [{
  infected: 5,
  cured: 5,
  died: 5
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