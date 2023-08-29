import { useState } from "react";

//styles
import {
  Container,
  NotesContainer,
  EmptyMsgBox,
} from "../../styles/styles";
import { TopBox, Box, InputBox } from "./AllNotes.styles";

//icons
import { BiSearch } from "react-icons/bi";


//reddux
import {useSelector } from "react-redux";

//components
import { NoteCard } from "../../components";

import { getAllNotes } from "../../utils";

const AllNotes = () => {
  // const dispatch = useDispatch();

  const { mainNotes } = useSelector((state) => state.notesList);

  const [searchInput, setSearchInput] = useState("");

  const searchResult = () => {
    const searchedNotes = mainNotes.filter(({ title }) =>
      title.toLowerCase().includes(searchInput.toLowerCase())
    );

    if (searchedNotes.length > 0) {
      return (
        <NotesContainer>
          {searchedNotes.map((note) => (
            <NoteCard key={note.id} note={note} type="notes" />
          ))}
        </NotesContainer>
      );
    } else {
      return <EmptyMsgBox>No Results Found</EmptyMsgBox>;
    }
  };

  return (
    <Container>
      {/* notes */}
      {mainNotes.length === 0 ? (
        <EmptyMsgBox>There are no notes</EmptyMsgBox>
      ) : (
        <>
          <TopBox>
            <InputBox>
              <div className="notes__search-icon">
                <BiSearch />
              </div>
              <input
                type="text"
                value={searchInput}
                onChange={(e) => setSearchInput(e.target.value)}
                placeholder="Search note title .."
              />
            </InputBox>

          </TopBox>

          <Box>
            {searchInput !== ""
              ? searchResult()
              : getAllNotes(mainNotes, searchInput)}
          </Box>
        </>
      )}
    </Container>
  );
};

export default AllNotes;
