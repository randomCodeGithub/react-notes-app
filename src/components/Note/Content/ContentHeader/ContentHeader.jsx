import { useState } from "react";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Button from "./Button/Button";
const ContentHeader = ({
  date,
  editMode,
  activate,
  deactivate,
  removeNote,
  noteId,
}) => {
  return (
    <div className="tools">
      <p>{date}</p>
      <div>
        <Button icon={faEdit} btnMode={editMode ? deactivate : activate} />
        <Button icon={faTrashAlt} btnMode={removeNote} note-id={noteId} />
      </div>
    </div>
  );
};
export default ContentHeader;
