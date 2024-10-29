import Bitcoin from '../components/api/Bitcoin'
import Cats from '../components/api/Cats'
import issPosition from '../components/api/issPosition'
import TrueFalse from '../components/api/TrueFalse'

const COMPONENTS = [
    Bitcoin,
    Cats,
    issPosition,
    TrueFalse
]

function nbrRandom(max) {
    return Math.floor(Math.random() * max)
}

export default function popAPI() {
    const ComponentRandom = COMPONENTS[nbrRandom(COMPONENTS.length)]

    const positionX = nbrRandom(100 + 1)
    const positionY = nbrRandom(100 + 1)

    return {
        positionX,
        positionY,
        ComponentRandom,
    }
}