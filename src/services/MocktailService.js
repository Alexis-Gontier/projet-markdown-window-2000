// Fetch pour le mocktail du jour
export const fetchMocktailApi = async () => {
    try {
      const response = await fetch("https://www.thecocktaildb.com/api/json/v1/1/filter.php?a=Non_Alcoholic");  
      if (!response.ok) {
        throw new Error("Erreur lors de la recpueration du mocktail");
      }  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("fetchMocktailApi:", error.message);
    }
};


