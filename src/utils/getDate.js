// function pour la date

export default function getDate(options) {
    const date = new Date();
    const dateFR = date.toLocaleTimeString("fr-FR", options);
    return dateFR;
}
