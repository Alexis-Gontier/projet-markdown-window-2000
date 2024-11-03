import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

export default function Icon({ image, text, link, style }) {
  return (
    <Link to={link} className="w-16 flex flex-col items-center gap-2 group">
      <img src={image} alt={text} className="transition-opacity duration-200 group-hover:opacity-50" />
      <p className={`text-white text-sm font-light text-center transition-colors duration-200 group-hover:bg-blue-900 group-hover:text-white px-1 ${style}`}>{text}</p>
    </Link>
  )
}

Icon.propTypes = {
  image: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
  style: PropTypes.string,
};