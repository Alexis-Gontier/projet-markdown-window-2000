// Fetch pour un fait random sur le chats
export const fetchCatFactApi = async () => {
    try {
      const response = await fetch("https://catfact.ninja/fact");  
      if (!response.ok) {
        throw new Error("Erreur lors de la recpueration des events historique a la date actuelle");
      }  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("fetchCatFactApi:", error.message);
    }
};


