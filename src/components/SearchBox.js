import React from "react";
import axios from "axios";

export default function SearchBox({ locationId, setLocationId, setLocations }) {
  const searchLocation = () => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${locationId}/`)
      .then((res) => setLocations(res.data))
      .catch(() => console.log("Error api"));
  };
  return (
    <div className="d-flex justify-content-center">
      <input
        className="col-10 bg-dark"
        type="text"
        onChange={(e) => {
          setLocationId(e.target.value);
        }}
        value={locationId}
      />
      <button className="bg-dark col-2" onClick={searchLocation}>
        search
      </button>
    </div>
  );
}
