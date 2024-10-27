// Fetch pour la valeur du bitcoin
export const fetchBitcoinApi = async () => {
    try {
      const response = await fetch("https://api.coindesk.com/v1/bpi/currentprice.json");  
      if (!response.ok) {
        throw new Error("Erreur lors de la recpueration de la valeur du bitcoin");
      }  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("fetchBitcoinApi:", error.message);
    }
};


