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
    { positionX: 250, positionY: 100 },
    { positionX: 400, positionY: 200 },
    { positionX: 800, positionY: 200 },
    { positionX: 350, positionY: 450 },
    { positionX: 1240, positionY: 580 },
    { positionX: 200, positionY: 580 },
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
