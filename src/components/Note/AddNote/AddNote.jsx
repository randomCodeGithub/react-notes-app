import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
const AddNote = () => {
  return (
    <>
      <div className="icon">
        <FontAwesomeIcon icon={faPlus} />
      </div>
      <p>Add note</p>
    </>
  );
};

export default AddNote;
