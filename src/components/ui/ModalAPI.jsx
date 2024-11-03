import PropTypes from 'prop-types';

export default function ModalAPI({ children }) {
  return (
    <div className="relative w-96 bg-[#D7D0C8] border border-red-500 relative after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-full after:h-px after:bg-[#000]">
        <div className="p-px">
            <div className="w-full h-8 px-2 py-0 bg-gradient-to-r from-[#000181] to-[#1084d0] flex justify-between items-center">
                <p className="text-white text-base">Windowns</p>
                <button>x</button>
            </div>
            <div className="w-full h-full flex flex-col items-center">
                {children}
            </div>
        </div>
    </div>
  )
}

ModalAPI.propTypes = {
  children: PropTypes.node.isRequired,
};