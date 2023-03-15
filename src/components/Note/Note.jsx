import cn from "classnames";
import AddNote from "./AddNote/AddNote";
import Content from "./Content/Content";
const Note = ({ addNote, ...props }) => {
  return (
    <div
      onClick={addNote && addNote}
      className={cn("note", {
        ["add-note"]: addNote,
      })}
    >
      {addNote ? <AddNote /> : <Content {...props} />}
    </div>
  );
};

export default Note;
