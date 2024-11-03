import Icon from "./Icon";
import GameIcon from "../../../assets/images/GameIcon.png";
import Explorer from "../../../assets/images/Explorer.png";
import Home from "../../../assets/images/Home.png";

export default function IconDashboard() {
  return (
    <>
      <div className="absolute top-0 left-0 flex flex-col gap-3 p-4">
        <Icon image={Home} text={"Home"} link={"/"} />
        <Icon image={Explorer} text={"Dashboard"} link={"/dashboard"} />
      </div>
      <div className="absolute top-0 left-[80px] flex flex-col gap-3 p-4">
      <Icon image={GameIcon} text={"Plus ou Moins"} link={"/game"}/>
      </div>
    </>
  );
}
