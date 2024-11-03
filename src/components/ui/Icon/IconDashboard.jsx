import Icon from "./Icon"

import speaker from "../../../assets/images/speaker.png"

export default function IconDashboard() {
  return (
    <div className="absolute top-0 left-0 flex flex-col gap-3 p-4">
      <Icon image={speaker} text={"Home"} link={"/"}/>
      <Icon image={speaker} text={"Dashboard aaaaa"} link={"/dashboard"}/>
    </div>
  )
}
