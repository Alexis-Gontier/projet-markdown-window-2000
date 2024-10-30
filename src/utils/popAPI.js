import Bitcoin from '../components/api/Bitcoin'
import Cats from '../components/api/Cats'
import issPosition from '../components/api/issPosition'
import TrueFalse from '../components/api/TrueFalse'

const COMPONENTS = [
    Bitcoin,
    Cats,
    issPosition,
    TrueFalse
];

const POSITIONS = [
    { positionX: 900, positionY: 100 },
    { positionX: 450, positionY: 150 },
    { positionX: 600, positionY: 250 },
    { positionX: 600, positionY: 250 },
    { positionX: 700, positionY: 650 },
];

function nbrRandom(max) {
    return Math.floor(Math.random() * max);
}

export default function popAPI() {
    const ComponentRandom = COMPONENTS[nbrRandom(COMPONENTS.length)];
    const { positionX, positionY } = POSITIONS[nbrRandom(POSITIONS.length)];
    return {
        positionX,
        positionY,
        ComponentRandom,
    };
}
