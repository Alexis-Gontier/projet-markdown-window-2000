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
        second: undefined,
    };

    const dateFR = date.toLocaleDateString("fr-FR", options);

    return dateFR;
    // 21/10/2024, 13:55:37
}
