import Markdown from "marked-react";
import { useState } from "react";
import ContentHeader from "./ContentHeader/ContentHeader";
const Content = ({ id, text, updateText, ...props }) => {
  const [editMode, setEditMode] = useState(text ? false : true);

  const activateEditMode = () => {
    setEditMode(true);
  };
  const deactivateEditMode = () => {
    setEditMode(false);
  };
  const setNewText = (e) => {
    updateText(id, e.target.value);
  };
  return (
    <div className="notes">
      <ContentHeader
        noteId={id}
        text={text}
        editMode={editMode}
        activate={activateEditMode}
        deactivate={deactivateEditMode}
        {...props}
      />
      {!editMode ? (
        <div className="main">
          <Markdown>{text}</Markdown>
        </div>
      ) : (
        <textarea id={id} value={text} onChange={setNewText} />
      )}
    </div>
  );
};

export default Content;
