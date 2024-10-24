import PropTypes from 'prop-types';

export default function Icon({ children }) {
  return (
    <button className="h-full p-1 flex justify-center items-center border-[3px] border-transparent hover:border-t-[#fff] hover:border-r-[#808080] hover:border-b-[#808080] hover:border-l-[#fff]">
      {children}
    </button>
  )
}

Icon.propTypes = {
  children: PropTypes.node.isRequired, // 'children' doit être un élément React (texte, composant, etc.) et obligatoire
};