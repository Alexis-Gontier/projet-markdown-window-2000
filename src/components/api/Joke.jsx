import React, { useState, useEffect } from "react";
import { fetchJokeApi } from '../../services/JokeService';

const BlagueDuJour = () => {
  const [blague, setBlague] = useState(null);
  const fetchJoke = async () => {
    const data = await fetchJokeApi(); 
    setBlague(data); 
  };
  useEffect(() => {
    fetchJoke(); 
  }, []);

  return (
    <div>
      <h2>La blague du jour :</h2>
      {blague && (
        <div>
          <p>{blague.setup}</p>
          <p>{blague.punchline}</p>
        </div>
      )}
    </div>
  );
};

export default BlagueDuJour;
