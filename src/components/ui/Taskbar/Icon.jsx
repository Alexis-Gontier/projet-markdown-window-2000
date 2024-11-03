import PropTypes from 'prop-types';
import { Link } from 'react-router-dom'

export default function Icon({ children, link }) {
  return (
    <Link to={link} className="h-full p-1 flex justify-center items-center border-2 border-transparent hover:border-t-[#fff] hover:border-r-[#808080] hover:border-b-[#808080] hover:border-l-[#fff]">
      {children}
    </Link>
  )
}

Icon.propTypes = {
  children: PropTypes.node.isRequired,
  link: PropTypes.string.isRequired,
};