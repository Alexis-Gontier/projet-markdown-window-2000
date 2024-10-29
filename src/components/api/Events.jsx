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
    <div className="absolute bottom-13 left-4 w-96 bg-[#D7D0C8] border border-red-500 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#000]">
      <div className="p-px">
        <div className="w-full h-8 px-2 py-0 bg-gradient-to-r from-[#000181] to-[#1084d0] flex justify-between items-center">
          <p className="text-white text-base">Événements du jour</p>
          <button onClick={fetchEvents} className="text-white">↻</button>
        </div>
        <div className="w-full h-full flex flex-col items-center p-4">
          <h2 className="text-lg font-bold text-center">
            Quelques événements historiques survenus le {events && events.date} :
          </h2>
          {events && events.data.Events.slice(0, 5).map((event, index) => (
            <div key={index}>
              <p>{event.year} - {event.text}</p>
            </div>
          ))}
          {!events && <p>Erreur lors du chargement des événements</p>}
        </div>
      </div>
    </div>
  );
};

export default EventsDuJour;
