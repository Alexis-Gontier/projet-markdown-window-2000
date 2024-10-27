import Icon from "./Icon"
import speaker from "../../../assets/images/speaker.png"

export default function Icons() {
  return (
    <div className="h-full flex">
      <Icon>
        <img src={speaker} alt="" className="h-full" />
      </Icon>
      <Icon>
        <img src={speaker} alt="" className="h-full" />
      </Icon>
    </div>
  )
}
