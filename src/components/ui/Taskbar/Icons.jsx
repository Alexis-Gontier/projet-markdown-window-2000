import Icon from "./Icon"
import GameIcon from "../../../assets/images/GameIcon.png";
import Explorer from "../../../assets/images/Explorer.png";

export default function Icons() {
  return (
    <div className="h-full flex">
      <Icon link={"/dashboard"}>
        <img src={Explorer} alt="" className="h-full" />
      </Icon>
      <Icon link={"/game"}>
        <img src={GameIcon} alt="" className="h-full" />
      </Icon>
    </div>
  )
}
