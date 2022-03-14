import React from "react";
import ResidentInfo from "./ResidentInfo";

export default function ResidentsList({ locations }) {
  return (
    <div className="row justify-content-center ">
      <div className="row col-md-8 residents">
        <span className="h2"> Residents </span>
        {locations?.residents?.map((resident) => (
          <ResidentInfo residentUrl={resident} />
        ))}
      </div>
    </div>
  );
}
