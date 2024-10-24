import PropTypes from 'prop-types';

export default function Btn({ children }) {
  return (
    <button className="group bg-[#D7D0C8] h-full py-1 px-2 flex justify-center items-center gap-1 border-2 border-t-[#fff] border-r-[#808080] border-b-[#808080] border-l-[#fff] shadow-[1px_1px_0px_1px_#000] focus:bg-[#c7c1ba] focus:border-t-[#808080] focus:border-r-[#fff] focus:border-b-[#fff] focus:border-l-[#808080] focus:shadow-[0px_0px_0px_0px_#000] focus:translate-x-px focus:translate-y-px">
      {children}
    </button>
  )
}

Btn.propTypes = {
  children: PropTypes.node.isRequired,
};