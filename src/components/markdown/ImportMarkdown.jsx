let markdownContent = '';

export const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) { 
        console.log("Fichier sélectionné :", file.name); 
        const reader = new FileReader();
        reader.onload = (e) => {
            markdownContent = e.target.result;
            console.log("Contenu stocké :", markdownContent); 
        };
        reader.onerror = () => console.error("Erreur de lecture du fichier");
        reader.readAsText(file);
    } else {
        console.error("Aucun fichier sélectionné ou type incorrect");
    }
};