// Fetch pour la recette du jour
export const fetchRecipeApi = async () => {
    try {
      const response = await fetch("https://www.themealdb.com/api/json/v1/1/random.php");  
      if (!response.ok) {
        throw new Error("Erreur lors de la recpueration de la recette");
      }  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("techRecipeApi:", error.message);
    }
};


