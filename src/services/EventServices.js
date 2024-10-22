// Fetch pour les evenements historiques a la date actuelle
export const fetchEventsApi = async () => {
    try {
      const response = await fetch("http://history.muffinlabs.com/date");  
      if (!response.ok) {
        throw new Error("Erreur lors de la recpueration des events historique a la date actuelle");
      }  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("fetchEventsApi:", error.message);
    }
};


