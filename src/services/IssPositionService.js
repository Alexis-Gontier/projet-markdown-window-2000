// Fetch pour la position de l'iss
export const fetchIssPositionApi = async () => {
    try {
      const response = await fetch("http://api.open-notify.org/iss-now.json");  
      if (!response.ok) {
        throw new Error("Erreur lors de la recpueration de la position de l'iss");
      }  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("fetchIssPosition:", error.message);
    }
};


