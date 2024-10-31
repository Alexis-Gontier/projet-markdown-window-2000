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
    <div className="absolute bottom-20 right-3 w-96 bg-[#D7D0C8] border border-red-500 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#000]">
      <div className="">
        <div className="w-full h-8 px-2 py-0 bg-gradient-to-r from-[#000181] to-[#1084d0] flex justify-between items-center">
          <p className="text-white text-base">Blague du jour</p>
          <button onClick={fetchJoke} className="text-white">↻</button>
        </div>
        <div className="w-full h-full flex flex-col items-center p-4">
          {blague && (
            <>
            <h2 className="text-lg font-bold text-center">La blague du jour :</h2>            
              <p className="text-center">{blague.setup}</p>
              <p className="text-center font-bold">{blague.punchline}</p>
            </>
          )}
        </div>
      </div>
    </div>  
  );
};

export default BlagueDuJour;
