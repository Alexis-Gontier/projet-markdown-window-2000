import Logo from '../../../assets/images/logo-windows-2000.png'

export default function BtnStart() {
  return (
    <button className="bg-[#D7D0C8] h-full py-1 px-2 flex justify-center items-center gap-1 border-[3px] border-t-[#fff] border-r-[#808080] border-b-[#808080] border-l-[#fff] shadow-[2px_2px_0px_0px_#000] focus:bg-[#c7c1ba] focus:border-t-[#808080] focus:border-r-[#fff] focus:border-b-[#fff] focus:border-l-[#808080] focus:shadow-[0px_0px_0px_0px_#000] focus:translate-x-px focus:translate-y-px">
      <img
        className="h-full"
        src={Logo}
        alt="Logo Windows 2000"
      />
      <span className="text-base font-bold">
        Start
      </span>
    </button>
  )
}
