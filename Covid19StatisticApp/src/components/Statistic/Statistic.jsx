import React, { useEffect, useState } from "react";
import "./Statistic.css";
import { useGetAllCases } from "../../hooks/useGetAllCases";
import { useCases } from "../../hooks/useCases";
import NavBar from "../NavBar/NavBar";

function Statistic() {
  const { cases } = useCases()

  const { getAllCases } = useGetAllCases()

  useEffect( () => {
    getAllCases()
  }, [] )

  return (
    <>
    <NavBar/>
    <div className="Statistic">
      <div className="statisticCoi infeced">
        <span className="info">INFECED: {cases && cases.active}</span>
      </div>
      <div className="statisticCoi recovered">
        <span className="info">CVURED: {cases && cases.recovered}</span>
      </div>
      <div className="statisticCoi died">
        <span className="info">DIED: {cases && cases.deaths}</span>
      </div>
    </div>
    </>
  );
}
export default Statistic;