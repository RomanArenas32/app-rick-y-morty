import axios from "axios";
import { useEffect, useState } from "react";
import DinamicTarget from "./components/DinamicTarget";

function App() {
  const [location, setLocation] = useState({});
  const randomId = Math.floor(Math.random() * 126) + 1;
  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then((res) => setLocation(res.data));
  }, []);

  return (
    <>
      <div className="card">
        <section className="descripcion">
          <h1>{location.name}</h1>
          <div className="descripcion_location">
            <h3>type: {location.type}</h3>
            <h3>dimension: {location.dimension}</h3>
            <h3>Residents: {location.residents.length}</h3>
          </div>
        </section>
        <div>
          {location.residents.map(resident => (
            <DinamicTarget resident={resident} key={resident} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
