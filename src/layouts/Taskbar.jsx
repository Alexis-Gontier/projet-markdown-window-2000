import BtnStart from '../components/ui/Taskbar/BtnStart'
import Line from '../components/ui/Taskbar/Line'
import Icons from '../components/ui/Taskbar/Icons'
import Clock from '../components/ui/Taskbar/Clock'

function Taskbar() {
  return (
    <header className="z-100 bg-nav fixed left-0 bottom-0 w-full h-12 p-1 border-t-[3px] border-[#fff] shadow-[0px_-3px_0px_0px_#D7D0C8]">
        <nav className="w-full h-full flex justify-between items-center">
          <div className="w-full h-full flex items-center gap-2">
            <BtnStart />
            <Line />
            <Icons />
            <Line />
          </div>
          <div className="w-full h-full flex justify-end items-center">
            <Clock />
          </div>
        </nav>
    </header>
  )
}

export default Taskbar
