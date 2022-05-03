function reducer(state, action) {
  switch (action.type) {
    case "get-notes":
      const stateWithAllTheNotes = {
        ...state,
        listOfNotes: action.payload,
      };
      return stateWithAllTheNotes;

    case "add-note":
      const newNote = action.payload;

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
