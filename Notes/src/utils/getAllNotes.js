import { NotesContainer } from "../styles/styles";

import { NoteCard } from "../components";

//filtering notes
const filteredNotes = (notes) => {
    return notes;
};

const getAllNotes = (mainNotes, searchInput) => {
  //different notes
  const pinned = mainNotes.filter(({ isPinned }) => isPinned);
  const normal = mainNotes.filter(({ isPinned }) => !isPinned);

  //normal notes
  if (normal.length !== 0 && pinned.length === 0) {
    return (
      <>
        <div className="allNotes__notes-type">
          All Notes <span>({normal.length})</span>
        </div>
        <NotesContainer>
          {filteredNotes(normal).map((note) => (
            <NoteCard key={note.id} note={note} type="notes" />
          ))}
        </NotesContainer>
      </>
    );
  }

  //Pinned notes
  if (pinned.length !== 0 && normal.length === 0) {
    return (
      <>
        <div className="allNotes__notes-type">
          Pinned Notes <span>({pinned.length})</span>
        </div>
        <NotesContainer>
          {pinned.map((note) => (
            <NoteCard key={note.id} note={note} type="notes" />
          ))}
        </NotesContainer>
      </>
    );
  }

  // All notes (pin and normal)
  if (pinned.length !== 0 && normal.length !== 0) {
    return (
      <>
        <div>
          <div className="allNotes__notes-type">
            Pinned Notes <span>({pinned.length})</span>
          </div>
          <NotesContainer>
            {pinned.map((note) => (
              <NoteCard key={note.id} note={note} type="notes" />
            ))}
          </NotesContainer>
        </div>
        <div>
          <div className="allNotes__notes-type">
            All Notes <span>({normal.length})</span>
          </div>
          <NotesContainer>
            {filteredNotes(normal)?.map((note) => (
              <NoteCard key={note.id} note={note} type="notes" />
            ))}
          </NotesContainer>
        </div>
      </>
    );
  }
};

export default getAllNotes;
