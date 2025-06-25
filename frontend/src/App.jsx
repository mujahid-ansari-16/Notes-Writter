import { Route } from "react-router";
import { Routes } from "react-router-dom";

import HomePage from "./pages/HomePage.jsx";
import CreatePage from "./pages/CreatePage";
import NoteDetailPage from "./pages/NoteDetailPage";
import toast from "react-hot-toast";

const App = () => {
  return (
  <div data-theme="coffee" >
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/create" element={<CreatePage/> }/>
      <Route path="/note/:id" element={<NoteDetailPage />} />
    </Routes>
  </div>
  )
};



export default App;