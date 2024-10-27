export const fetchCardApi = async () => {
    try {
      const response = await fetch("https://deckofcardsapi.com/api/deck/new/draw/?count=1");  
      if (!response.ok) {
        throw new Error("Erreur lors de la récupération de la carte");
      }
      const data = await response.json();
      return data.cards[0];
    } catch (error) {
      console.error("fetchCardApi:", error.message);
    }
  };
  