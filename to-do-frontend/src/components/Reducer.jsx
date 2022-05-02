function reducer(state, action) {
  switch (action.type) {
    case "add-note":
      const newNote = {
        id: Math.floor(Math.random() * 100),
        message: action.payload.message,
        title: action.payload.title,
        done: false,
      };

      const newListOfNotesAddedOne = [...state.listOfNotes, newNote];

      const newStateAddNote = {
        ...state,
        listOfNotes: newListOfNotesAddedOne,
      };

      return newStateAddNote;

    case "remove-note":
      const newListOfNotesithoutPayloadNote = state.listOfNotes.filter(
        (note) => note.id !== action.payload.id
      );
      const newStateWithNoteDelete = {
        ...state,
        listOfNotes: newListOfNotesithoutPayloadNote,
      };
      return newStateWithNoteDelete;

    case "update-note":
      const newListOfNotes = state.listOfNotes.filter(
        (note) => note.id !== action.payload.id
      );
      const newListOfNotesWithModification = [
        ...newListOfNotes,
        action.payload,
      ];
      const newStateModifiedCheckbox = {
        ...state,
        listOfNotes: newListOfNotesWithModification,
      };
      return newStateModifiedCheckbox;
  }
}

export default reducer;
