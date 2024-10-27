// Fetch pour le vrai faux du jour
export const fetchQuestionApi = async () => {
    try {
      const response = await fetch("https://opentdb.com/api.php?amount=1&category=9&difficulty=medium&type=boolean");  
      if (!response) {
        throw new Error("Erreur lors de la recpueration de la question");
      }  
      const data = await response.json();
      return data;
      console.log(data);
      
    } catch (error) {
      console.error("fetchQuestion:", error.message);
    }
};


