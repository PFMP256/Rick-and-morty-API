import React from "react";

export default function LocationInfo({ locations }) {
  return (
    <>
      <div className="d-flex justify-content-center residence">
        <h2>{locations.name}</h2>
      </div>
      <div className="row justify-content-center">
        <div className="row col-6">
          <div className="col-md-4">
            <span className="">Type: {locations.type}</span>{" "}
            <span className=""></span>
          </div>
          <div className="col-md-4">
            <span>Dimension: {locations.dimension}</span>{" "}
            <span className=""></span>
          </div>
          <div className="col-md-4">
            <span>Population: {locations.residents?.length}</span>{" "}
            <span className=""></span>
          </div>
        </div>
      </div>
    </>
  );
}
