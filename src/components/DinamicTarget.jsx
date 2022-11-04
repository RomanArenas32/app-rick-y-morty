import axios from "axios";
import { useEffect, useState } from "react";

const DinamicTarget = ({ resident }) => {
  const [character, setCharacter] = useState({});

  useEffect(() => {
    axios.get(resident).then((res) => setCharacter(res.data));
  }, []);

  console.log(character);

  return (
    <div className="targetCharacter">
      <img src={character.image} alt="" />
      <div>
        <h2>{character.name}</h2>
        <h3>{character.status}</h3>
        <h3>{character.origin.name}</h3>
        <p>Episodes where appear {character.episode.length}</p>
      </div>
    </div>
  );
};

export default DinamicTarget;
