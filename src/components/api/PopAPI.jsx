import popAPI from "../../utils/popAPI"

export default function PopAPI() {

    const { positionX, positionY, ComponentRandom } = popAPI()

  return (
    <div>
        <p>{positionX}</p>
        <p>{positionY}</p>
        <p><ComponentRandom /></p>
    </div>
  )
}
