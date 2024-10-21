export default function Line() {
  return (
    <div className="h-full flex items-center gap-1">
      <div className="h-[95%] flex">
        <div className="h-full w-0.5 bg-[#808080]"></div>
        <div className="h-full w-0.5 bg-[#fff]"></div>
      </div>
      <div className="h-4/5 w-1.5 bg-[#D7D0C8] flex border-2 border-t-[#fff] border-r-[#808080] border-b-[#808080] border-l-[#fff]"></div>
    </div>
  )
}
