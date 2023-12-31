import "./App.css";

//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

//components
import { Sidebar, Navbar } from "./layout";
import {
  AllNotes,
  ArchiveNotes,
  TrashNotes,
  TagNotes,
} from "./pages";
import { TagsModal, CreateNoteModal } from "./components";

//router
import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";

import { useSelector } from "react-redux";

const App = () => {
  const { viewEditTagsModal, viewCreateNoteModal } = useSelector(
    (state) => state.modal
  );

  return (
    <div className="app">
      {/* modals */}
      {viewCreateNoteModal && <CreateNoteModal />}
      {viewEditTagsModal && <TagsModal type="edit" />}

      <ToastContainer
        position="bottom-right"
        theme="light"
        pauseOnHover
        autoClose={1500}
      />
      <Router>
        <Sidebar />
        <div className="app__container">
          <Navbar />
          <Routes>
            <Route path="/" element={<AllNotes />} />
            <Route path="/notes" element={<AllNotes />} />
            <Route path="/archive" element={<ArchiveNotes />} />
            <Route path="/trash" element={<TrashNotes />} />
            <Route path="/tag/:name" element={<TagNotes />} />
          </Routes>
        </div>
      </Router>
    </div>
  );
};

export default App;
