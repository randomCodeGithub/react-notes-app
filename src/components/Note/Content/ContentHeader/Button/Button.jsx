import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const Button = ({ btnMode, icon, ...props }) => {
  return (
    <button onClick={btnMode} {...props}>
      <FontAwesomeIcon icon={icon} />
    </button>
  );
};
export default Button;
