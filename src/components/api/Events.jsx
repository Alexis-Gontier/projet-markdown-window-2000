import React, { useState, useEffect } from "react";
import { fetchEventsApi } from "../../services/EventServices";

const EventsDuJour = () => {
  const [events, setEvents] = useState(null);

  const fetchEvents = async () => {
    const data = await fetchEventsApi(); 
    setEvents(data); 
  };

  useEffect(() => {
    fetchEvents(); 
  }, []);

  return (
    <div>
      <h2>Quelques événements historiques survenus le {events && events.date} :</h2>
      {events && (
        <div>
          {events.data.Events.slice(0, 5).map((event, index) => (
            <div key={index}>
              <p>{event.year} - {event.text}</p>
            </div>
          ))}
        </div>
      )}
      {!events && <p>Erreur lors du chargement des événements</p>}
    </div>
  );
};

export default EventsDuJour;
