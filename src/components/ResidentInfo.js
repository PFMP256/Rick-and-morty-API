import axios from "axios";
import React, { useEffect, useState } from "react";

export default function ResidentInfo({ residentUrl }) {
  const [residents, setResidents] = useState();
  useEffect(() => {
    axios
      .get(residentUrl)
      .then((res) => setResidents(res.data))
      .catch(console.log("error api residente"));
  }, [residentUrl]);
  return (
    <div
      className="row align-items-center col-md-6 card-resident"
      key={residents?.id}
    >
      <div className="col-4">
        <img className="img-fluid" src={residents?.image} alt="" srcset="" />
      </div>
      <div className="col-8">
        <span className="h3 d-block">{residents?.name}</span>
        <span className="h4 d-block">
          {residents?.status} - {residents?.species}
        </span>
        <span className="h6 d-block specifications">Origin</span>{" "}
        <span className="h4 d-block">{residents?.origin.name}</span>{" "}
        <span className="h6 d-block specifications">Episodes where appear</span>
        <span className="h4 d-block">{residents?.episode.length}</span>
      </div>
    </div>
  );
}
