import Bitcoin from '../components/api/Bitcoin'
import Cats from '../components/api/Cats'
import Events from '../components/api/Events'
import issPosition from '../components/api/issPosition'
import Joke from '../components/api/Joke'
import Mocktail from '../components/api/Mocktail'

const COMPONENTS = [
    Bitcoin,
    Cats,
    Events,
    issPosition,
    Joke,
    Mocktail,
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