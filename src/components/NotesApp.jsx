import { useEffect, useState } from "react";
import Note from "./Note/Note";
import { getLocalStorage, updateLocalStorage } from "../utils/localStorage";
import { getFormatedDate } from "../utils/dateUtils";
const NotesApp = () => {
  const [noteList, setNoteList] = useState(getLocalStorage);

  useEffect(() => {
    updateLocalStorage([...noteList]);
    console.log(noteList);
    // sortNote();
  }, [noteList]);

  const addNote = () => {
    setNoteList((noteList) => [
      ...noteList,
      { date: getFormatedDate(), text: "" },
    ]);
  };

  const updateNote = (id, newText) => {
    let newArr = noteList.map((note, index) => {
      if (index === id) {
        return { ...note, text: newText };
      }
      return note;
    });
    setNoteList([...newArr]);
  };

  const removeNote = (e) => {
    const noteId = parseInt(e.target.getAttribute("note-id"));
    let newArr = noteList.filter((text, index) => index !== noteId);
    console.log(noteId);
    setNoteList([...newArr]);
  };

  return (
    <div className="note-app">
      <Note addNote={addNote} />
      {noteList.map((note, key) => (
        <Note
          key={key}
          id={key}
          text={note.text}
          date={note.date}
          updateText={updateNote}
          removeNote={removeNote}
        />
      ))}
    </div>
  );
};

export default NotesApp;
