// Fetch pour la citation du jour
export const fetchQuoteApi = async () => {
    try {
      const response = await fetch("https://api.adviceslip.com/advice");  
      if (!response.ok) {
        throw new Error("Erreur lors de la recpueration de la citation");
      }  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("fetchQuoteApi:", error.message);
    }
};


