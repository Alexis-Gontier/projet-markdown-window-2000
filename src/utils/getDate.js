// function pour la date

function getDate() {
    const date = new Date();
    const options = {
        weekday: undefined,
        day: 'numeric',
        month: 'numeric',
        year: 'numeric',
        hour: 'numeric',
        minute: 'numeric',
        second: 'numeric',
    };

    const dateFR = date.toLocaleDateString("fr-FR", options);

    return dateFR;
}
