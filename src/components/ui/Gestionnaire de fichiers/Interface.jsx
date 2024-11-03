import Icon from '../Icon/Icon'
import speaker from "../../../assets/images/speaker.png"
import { Link } from 'react-router-dom'


export default function Interface() {
  return (
    <div className="bg-[#D7D0C8] w-[600px] h-[400px] flex flex-col border-2 border-t-[#fff] border-r-[#808080] border-b-[#808080] border-l-[#fff] shadow-[1px_1px_0px_1px_#000]">
      <div className="h-10 p-2 m-1 bg-gradient-to-r from-[#000181] to-[#1084d0] flex justify-between items-center">
        <p className="text-white">Computer</p>
        <Link to={"/"} className="group bg-[#D7D0C8] max-h-full px-2 flex justify-center items-center gap-1 border-2 border-t-[#fff] border-r-[#808080] border-b-[#808080] border-l-[#fff] shadow-[1px_1px_0px_1px_#000] focus:bg-[#c7c1ba] focus:border-t-[#808080] focus:border-r-[#fff] focus:border-b-[#fff] focus:border-l-[#808080] focus:shadow-[0px_0px_0px_0px_#000] focus:translate-x-px focus:translate-y-px">x</Link>
      </div>
      <div className="bg-white h-full m-1 mt-0 p-3 border-2 border-t-[#808080] border-r-[#fff] border-b-[#fff] border-l-[#808080]">
        <div className="flex gap-2 flex-wrap">
          <Icon image={speaker} text={"Dashboard aaaaa"} link={"/dashboard/exemple"} style={"text-black"}/>
          <Icon image={speaker} text={"Dashboard aaaaa"} link={"/dashboard/exemple"} style={"text-black"}/>
        </div>
      </div>
    </div>
  )
}
