import "./styles.css";
import { useEffect, useState } from "react";
import axios from "axios";
import cover from "./assets/cover.jpg";
import SearchBox from "./components/SearchBox";
import LocationInfo from "./components/LocationInfo";
import ResidentsList from "./components/ResidentsList";

export default function App() {
  const [locations, setLocations] = useState({});
  useEffect(() => {
    const random = Math.floor(Math.random() * 20) + 1;
    axios
      .get(`https://rickandmortyapi.com/api/location/${random}/`)
      .then((res) => setLocations(res.data))
      .catch(() => console.log("Error api"));
  }, []);

  const [locationId, setLocationId] = useState("");

  return (
    <>
      <div>
        <img className="img-fluid" src={cover} alt="" srcset="" />
      </div>
      <div className="container">
        <h1>Rick and Morty wiki</h1>
        <SearchBox
          locationId={locationId}
          setLocationId={setLocationId}
          setLocations={setLocations}
        />
        <LocationInfo locations={locations} />
        <ResidentsList locations={locations} />
      </div>
    </>
  );
}
