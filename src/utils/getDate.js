// function pour la date

function getDate() {
    const date = new Date();
    const options = { year: 'numeric', month: 'numeric', day: 'numeric' };

    const dateFR = date.toLocaleDateString("fr", options);

    return dateFR;
}
