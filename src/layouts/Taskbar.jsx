import Btn from '../components/ui/Taskbar/Btn'
import LogoWindows from '../assets/images/logo-windows-2000.png'
// import IconSpeaker from '../assets/images/speaker.png'
import Line from '../components/ui/Taskbar/Line'
import Icons from '../components/ui/Taskbar/Icons'
import Clock from '../components/ui/Taskbar/Clock'

function Taskbar() {
  return (
    <header className="z-10 bg-nav fixed left-0 bottom-0 w-full h-12 p-1 border-t-[3px] border-[#fff] shadow-[0px_-3px_0px_0px_#D7D0C8]">
        <nav className="w-full h-full flex justify-between items-center">
          <div className=" h-full flex items-center gap-2">
            <Btn>
              <img
                className="h-full"
                src={LogoWindows}
                alt="Logo Windows 2000"
              />
              <span className="text-base font-bold">
                Start
              </span>
            </Btn>
            <Line />
            <Icons />
            <Line />
            {/* <Btn>
              <img
                className="h-full"
                src={IconSpeaker}
                alt="Logo Windows 2000"
              />
              <span className="text-base font-normal w-48 text-start">
                My Documents
              </span>
            </Btn>
            <Btn>
              <img
                className="h-full"
                src={IconSpeaker}
                alt="Logo Windows 2000"
              />
              <span className="text-base font-normal w-48 text-start">
                My Documents
              </span>
            </Btn> */}
          </div>
          <div className="h-full flex justify-end items-center">
            <Clock />
          </div>
        </nav>
    </header>
  )
}

export default Taskbar
