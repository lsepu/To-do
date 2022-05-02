import React, { useContext } from "react";
import { Store } from "./StoreProvider";

const ListOfToDo = () => {
  const { state, dispatch } = useContext(Store);

  const onCheckbox = (e, note) => {
    const checked = e.currentTarget.checked;
    dispatch({
      type: "update-note",
      payload: {
        ...note,
        done: checked,
      },
    });
  };

  return (
    <div>
      <h1>Actions pending</h1>
      <ul>
        {state.listOfNotes.map((note) => {
          return (
            <li
              style={note.done ? { textDecoration: "line-through" } : {}}
              key={note.id}
            >
              {note.title} <br />
              {note.message} <br />
              <input
                onChange={(e) => onCheckbox(e, note)}
                type="checkbox"
                checked={note.done}
              />
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ListOfToDo;
