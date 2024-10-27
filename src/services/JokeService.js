// Fetch pour la blague du jour
export const fetchJokeApi = async () => {
    try {
      const response = await fetch("https://official-joke-api.appspot.com/random_joke");  
      if (!response.ok) {
        throw new Error("Erreur lors de la recpueration de la blague");
      }  
      const data = await response.json();
      return data;
    } catch (error) {
      console.error("fetchJokeApi:", error.message);
    }
};


