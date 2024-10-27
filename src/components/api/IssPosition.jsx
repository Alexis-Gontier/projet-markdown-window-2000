import React, { useState, useEffect } from "react";
import { fetchIssPositionApi } from '../../services/IssPositionService';

const IssPositionNow = () => {
  const [issPosition, setIssPosition] = useState(null);

  const fetchIssPosition = async () => {
    const data = await fetchIssPositionApi(); 
    setIssPosition(data.iss_position);
  };

  useEffect(() => {
    // mettre a jour la position de l'iss chauque secondes
    setInterval(() => {
      fetchIssPosition();
    }, 1000); 

  }, []);

  return (
    <div>
      <h2>Position actuelle de l'ISS :</h2>
      {issPosition && (
        <div>
          <p>Latitude : {issPosition.latitude}</p>
          <p>Longitude : {issPosition.longitude}</p>
        </div>
      )}
    </div>
  );
};

export default IssPositionNow;
