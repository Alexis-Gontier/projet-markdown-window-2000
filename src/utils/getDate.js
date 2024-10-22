// function pour la date

export default function getDate() {
    const date = new Date();
    const options = {
        weekday: undefined,
        day: undefined,
        month: undefined,
        year: undefined,
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };

    const dateFR = date.toLocaleTimeString("fr-FR", options);

    return dateFR;
}
