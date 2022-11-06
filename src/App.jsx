import axios from "axios";
import { useEffect, useState } from "react";
import DinamicTarget from "./components/DinamicTarget";
import Header from "./components/Header";

function App() {
  const [location, setLocation] = useState({});
  let randomId = Math.floor(Math.random() * 126) + 1;
  const [newValor, setNewValor] = useState(0);

  useEffect(() => {
    axios
      .get(`https://rickandmortyapi.com/api/location/${randomId}`)
      .then((res) => setLocation(res.data));
  }, []);

  const cambiaId = () => {
    if(newValor > 126 || newValor < 0){
      alert("Ingrese un numero valido de 1 a 126")
    }else {
       axios
      .get(`https://rickandmortyapi.com/api/location/${newValor}`)
      .then((res) => setLocation(res.data));
    }
   
  };

  return (
    <>
      <div className="card">
        <Header />
        <div className="changeButton">
          <input
            type="text"
            value={newValor}
            onChange={(e) => setNewValor(Number(e.target.value))}
          />
          <button onClick={cambiaId}>Change</button>
        </div>
        <section className="descripcion">
          <h1>{location?.name}</h1>
          <div className="descripcion_location">
            <h3>type: {location?.type}</h3>
            <h3>dimension: {location?.dimension}</h3>
            <h3>Residents: {location?.residents?.length}</h3>
          </div>
        </section>
        <div className="container">
          {location?.residents?.map((resident) => (
            <DinamicTarget resident={resident} key={resident} />
          ))}
        </div>
      </div>
    </>
  );
}

export default App;
