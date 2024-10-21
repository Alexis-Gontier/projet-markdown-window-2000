import BtnStart from '../components/ui/Taskbar/BtnStart'

function Taskbar() {
  return (
    <header className="z-100 bg-nav fixed left-0 bottom-0 w-full h-12 p-1 flex justify-between items-center shadow-[0px_0px_1px_0px_#1a202c]">
        <nav className="w-full h-full">
          <BtnStart />
        </nav>
    </header>
  )
}

export default Taskbar
