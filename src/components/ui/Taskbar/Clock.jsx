import PropTypes from 'prop-types'

export default function Clock({ hour }) {
  return (
    <div className="h-full p-2 border-[3px] border-t-[#808080] border-r-[#fff] border-b-[#fff] border-l-[#808080] flex justify-between items-center">
        <div className="w-14">

        </div>
        <span className="h-full text-sm font-bold px-3 flex jusify-center items-center">
            {hour}
            1.28 PM
        </span>
    </div>
  )
}

Clock.propTypes = {
    hour: PropTypes.string.isRequired,
}
