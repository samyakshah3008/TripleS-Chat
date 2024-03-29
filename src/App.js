import "./App.css";
import LoginPage from "./pages/LoginPage";
import { Routes, Route } from "react-router-dom";
import SignupPage from "./pages/SignupPage";
import HomePage from "./pages/HomePage";
import BookmarksPage from "./pages/BookmarksPage";
import ExplorePage from "./pages/ExplorePage";
import ProfilePage from "./pages/ProfilePage";
import Comments from "./components/Comments";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" exact element={<LoginPage />} />
        <Route path="/signup" exact element={<SignupPage />} />
        <Route path="/home" element={<HomePage />} />
        <Route path="/bookmarks" element={<BookmarksPage />} />
        <Route path="/explore" exact element={<ExplorePage />} />
        <Route path="/profile/:username" element={<ProfilePage />} />
        <Route path="/comments" element={<Comments />} />
      </Routes>
    </div>
  );
}

export default App;
