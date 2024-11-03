import { useState, useEffect } from "react";
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
    <div className="min-h-10">
      <h2 className="text-lg font-bold text-center">Position actuelle de l&apos;ISS :</h2>
      {issPosition && (
        <div className="flex justify-between item-center space-x-4">
          <p className="font-bold">Latitude : {issPosition.latitude}</p>
          <p className="font-bold">Longitude : {issPosition.longitude}</p>
        </div>
      )}
    </div>
  );
};

export default IssPositionNow;
